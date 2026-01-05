---
title: Golang으로 WebRTC Mesh Server 구현하기
date: 2023-02-18
excerpt: Golang을 통해 M:N WebRTC 시그널링 서버를 만들어보았습니다
categories:
  - 'WebRTC'
  - 'Golang'
  - 'Signaling Server'
coverImage: '/post_img/Networking/WebRTC/cover.png'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

Golang으로 하는 첫 프로젝트로, WebRTC many-to-many 시그널링 서버를 만들게 되었다.

<br><br>

## Basic 1:1 Signaling

우선 가장 기본적인 예제인, 1:1 연결 시그널링 서버의 예제부터 구현하였다. 1:1 시그널링 서버는 언어를 막론하고 예제가 많이 존재한다.
본인 또한 참고한 예제가 있다. <https://github.com/shanet/WebRTC-Example>의 예제를 확인하면 간단한 웹 클라이언트와, Node.js 및 WebSocket 기반의 간단한 시그널링 서버를 찾아볼 수 있다.

<br>

서버쪽 소스코드는 너무나도 간단하다. ICE나 SDP 등 WebRTC 연결 정보를 전달해주는 역할을 하는 코드는 이 정도밖에 안된다.

```javascript
const wss = new WebSocketServer({ server: httpsServer });

wss.on('connection', function (ws) {
	ws.on('message', function (message) {
		// Broadcast any received message to all clients
		console.log('received: %s', message);
		wss.broadcast(message);
	});
});

wss.broadcast = function (data) {
	this.clients.forEach(function (client) {
		if (client.readyState === WebSocket.OPEN) {
			client.send(data);
		}
	});
};
```

한쪽 피어가 보낸 메시지를 다른 피어한테 웹소켓을 통해 전송해주는 로직으로, 사실상 채팅 서버와 거의 동일하다고 볼 수 있다.
그래서 Go로 작성된 웹소켓 기반 채팅서버 예제를 참조하여 금방 시그널링 서버를 구현할 수 있었다.
<https://github.com/jos-/gofiber-websocket-chat-example>의 예제를 참조하여 동일 클라이언트 코드를 사용하는 Go 예제로 옮겨보았다.

프로젝트는 [GoFiber](https://github.com/gofiber/fiber)의 [웹소켓 extension](https://github.com/gofiber/websocket)을 사용하여 진행하였다.
웹소켓 관련 Go 라이브러리 중에서 가장 일반적으로 사용되는 게 [Gorilla WebSocket](https://github.com/gorilla/websocket)으로 알고 있는데, 2022년 12월 쯤 Gorilla WebSocket의 깃허브 레포지토리가 archived 상태가 되었다.
괜찮은 대체제를 찾는 겸, Fiber 연습하는 겸 GoFiber WebSocket extension를 사용하게 되었다.

<br>

먼저, 다음과 같이 유저가 접속하거나 나갈 때 데이터를 전송할 채널과, 채널에 들어온 데이터를 받아서 처리할 고루틴을 작성해주었다.

```go
type channelSet struct {
	register   chan *ws.Conn
	unregister chan *ws.Conn
	broadcast  chan string
}
type client struct{}

var clients = make(map[*ws.Conn]client)

func sendBroadcastMessage(cs *channelSet, message string) {
	for c := range clients {
		if err := c.WriteMessage(ws.TextMessage, []byte(message)); err != nil {
			fmt.Println("write error: err")
			c.WriteMessage(ws.CloseMessage, []byte{})
			c.Close()
		}
	}
}

func userHub(cs *channelSet) {
	for {
		select {
		case registerUser := <-cs.register:
			clients[registerUser] = client{}
			fmt.Println("new client is connected")

		case unregisterUser := <-cs.unregister:
			delete(clients, unregisterUser)
			fmt.Println("connection terminated")
		}
	}
}

func messageHub(cs *channelSet) {
	for {
		select {
		case message := <-cs.broadcast:
			fmt.Println("message received")
			sendBroadcastMessage(cs, message)
		}
	}
}

func main() {
	var channels = channelSet{
		register:   make(chan *ws.Conn),
		unregister: make(chan *ws.Conn),
		broadcast:  make(chan string),
	}

	go userHub(&channels)
	go messageHub(&channels)

	...
}
```

각각 `register` 채널에 유저 정보가 입력되면 유저를 전역변수 `clients`에 추가하고, `unregister` 채널에 입력되면 유저를 제거한다. `broadcast` 채널에 메시지가 입력되면 메시지를 모든 유저에게 전달한다.

`*ws.Conn` 타입의 인스턴스는 각 웹소켓 클라이언트에 해당하는 것으로, `*ws.Conn`의 `ReadMessage()` 등을 호출하여 데이터를 읽거나 쓸 수 있다.

<br>

유저의 웹소켓 세션에 관련된 부분은 다음과 같다.

```go
func main() {
	...

	app.Get("/ws/",
			func(c *fiber.Ctx) error {
				if ws.IsWebSocketUpgrade(c) {
					c.Next()
				}
				return nil
			},
			ws.New(func(c *ws.Conn) {
				defer func() {
					channels.unregister <- c
					c.Close()
				}()

				channels.register <- c

				for {
					messageType, message, err := c.ReadMessage()
					if err != nil {
						if ws.IsUnexpectedCloseError(err, ws.CloseGoingAway, ws.CloseAbnormalClosure) {
							fmt.Println("read error:", err)
						}
						return
					}

					if messageType == ws.TextMessage {
						channels.broadcast <- string(message)
					} else {
						fmt.Println("websocket message recived of type", messageType)
					}
				}
			}))
}
```

먼저 웹소켓을 사용할 수 있는지 검사한 후, 사용 가능하다면 웹소켓 연결을 생성한다.
웹소켓 연결이 생성되면 `register` 채널에 클라이언트 정보를 보내고, defer문을 통해 클라이언트가 웹소켓 연결을 끊으면 `unregister` 채널에 클라이언트 정보를 보낼 수 있게끔 하였다.

1:1 연결에서는 이러한 100줄 정도의 코드만으로도 시그널링 서버를 구현할 수 있다.

<br>

전체 코드는 <https://github.com/jhseoeo/webrtc-mesh-server/tree/5d435d745a48ba3be0c1299163029364ec31a3bf>에서 찾아볼 수 있다.

<br><br>

## 개선할 점

일단 M:M으로 나아가기에 앞서, 위 예제에서 몇 가지 문제점을 찾아볼 수 있다.

- 서버가 1:1 연결 하나만 처리할 수 있음.... 세션 정도는 만들어줄 필요가 있음.
- 클라이언트 코드도 마찬가지로 상대방이 한 명이라고 가정하여 작성되어 있음. 여러 명의 유저와 통신할 수 있게끔 수정해야 함.
- 유저가 나갈 때에 대한 처리가 부족함. 한 유저가 나가면 `RTCPeerConnection`을 통해 유저가 나갔다는 사실을 전달받을 수 있겠지만, 그걸 통해 `<video>` element를 지운다던지 하는 처리가 전혀 없음.
- 고루틴을 여러 개 띄워서 전역 변수인 `client`에 읽기/쓰기를 시도하는 반면, `client`는 뮤텍스 등을 통해 보호되지 않음. 이 때문에 새로고침을 막 눌러서 연결을 빡세게 시도하면 data race로 인한 panic이 일어나서 서버가 곧잘 죽는 것을 확인할 수 있음
- 모든 컴포넌트가 `main.go` 한 파일에 몰려있음. 리팩토링을 통해 디커플링하는 겸 변수 이름도 Convention에 맞게 다시 지어주면 좋을 듯 함.

또한 Mesh 형태의 many-to-many 연결을 구현하기 위해서는 시그널링 서버에서 특정 유저한테만 메시지를 보낼 수 있는 방법이 추가되어야 한다. WebRTC 연결을 생성하려는 대상이 아닌 다른 대상에게까지 메시지가 전달되면 오류가 발생하여 연결 설정이 제대로 안될 수 있기 때문이다.

다음으로 다룰 예제에서 위 사항을 충족시킨 코드를 확인할 수 있을 것이다.

<br><br>

## Many-to-Many Mesh Server

`main.go`의 변경사항이다.

```go
func main() {
	hub := CreateHub()

	...

	app.Get("/ws/:session",
		func(c *fiber.Ctx) error { // check if a client can establish websocket connection
			if ws.IsWebSocketUpgrade(c) {
				c.Next()
			}
			return nil
		},
		ws.New(func(conn *ws.Conn) {
			WebsocketConnectionLoop(clientDataStore, hub, conn)
		}))
}
```

우선, 이전에 전역변수로 선언되던 `clients`는 각 세션별로 존재하며, 각 세션은 `Hub`에서 만들어진다.  
또한 클라이언트별 웹소켓 루프를 별도의 함수로 지정하였다.

<br>

웹소켓 루프 함수를 살펴보자.

```go
// Websocket Session Loop for each client
func WebsocketConnectionLoop(hub *MessageHub, conn *ws.Conn) {
	session := SessionName(conn.Params("session"))

	uuid, err := getUUID(conn)
	if err != nil {
		fmt.Println("an error occurred getting uuid:", err)
		conn.Close()
	}

	fmt.Printf("user %s joined on %s\n", uuid, session)

	client := Client{Conn: conn}
	hub.RegisterUser(session, uuid, client) // add current user's information to users list

	defer func() { // when user leaves
		fmt.Printf("user %s leaved from %s\n", uuid, session)
		hub.UnregisterUser(session, uuid, client) // delete current user's information from users list
		conn.Close()
	}()

	for {
		var messageData MessageData
		err := conn.ReadJSON(&messageData)

		if err != nil {
			if ws.IsUnexpectedCloseError(err, ws.CloseGoingAway, ws.CloseAbnormalClosure) {
				fmt.Println("read error:", err)
			}
			return
		}

		hub.SendSignallingMessage(session, uuid, messageData)
	}
}
```

클라이언트가 접속하면 자신의 UUID를 보낸다. 클라이언트가 접속한 세션 정보와 이 UUID 정보를 바탕으로 `RegisterUser()` 메소드를 호출하면 클라이언트가 세션에 등록된다. 클라이언트가 접속을 종료할 때는 `UnregisterUser()`를 호출하여 유저의 퇴장을 처리한다.

이후, ICE나 SDP 등 시그널링 메시지를 처리하는 단계로 진입한다. `SendSignallingMessage()` 메소드를 통해 UUID로 구분하여 특정 대상에게 시그널링 메시지를 전달할 수 있다.

<br>

다음으로, `SessionDataStore`에 대해 살펴보자.

```go
// Client struct type. you can add any data here
// Client struct type. you can add any data here
type Client struct {
	Conn *ws.Conn
}

// Datastore of client
type SessionDataStore struct {
	mutex     sync.RWMutex
	dataStore map[UUIDType]Client
}

// Create new datastore
func MakeSessionDataStore() *SessionDataStore {
	return &SessionDataStore{
		dataStore: make(map[UUIDType]Client),
	}
}
```

`SessionDataStore`는 세션별로 유저들의 정보가 저장되는 자료구조로, `GetSessionData()`, `SetUserData()`, `DeleteUserData()` 메소드를 통해 접근할 수 있다.
`RWMutex`를 설정하여 여러 고루틴에서 동시에 접근하여 생길 수 있는 Data race 문제를 해결하였다.

<br>

채널을 관리하는 `Hub`쪽을 살펴보자.

```go
...

// Message data protocol
type MessageData struct {
	Type    string      `json:"type"`
	Data    interface{} `json:"data"`
	SrcUUID UUIDType    `json:"srcuuid"`
	DstUUID UUIDType    `json:"dstuuid"`
}

type ChannelSet struct {
	register      chan UserInfo
	unregister    chan UserInfo
	deleteSession chan bool
	broadcast     chan MessageInfo
	signaling     chan MessageInfo
}

// Set of channels
type Hub struct {
	mutex    sync.RWMutex
	channels map[SessionName]ChannelSet
}

func CreateHub() *Hub {
	hub := Hub{
		channels: make(map[SessionName]ChannelSet),
	}

	return &hub
}

func (h *Hub) SendBroadcastMessage(session SessionName, uuid UUIDType, message MessageData) {
	h.mutex.RLock()
	defer h.mutex.RUnlock()

	h.channels[session].broadcast <- MessageInfo{session, message}
}

func (h *Hub) SendSignallingMessage(session SessionName, uuid UUIDType, message MessageData) {
	h.mutex.RLock()
	defer h.mutex.RUnlock()

	h.channels[session].signaling <- MessageInfo{session, message}
}
```

`Hub`는 각 세션 별로 채널을 만들고 관리하는 역할이다. `Hub`의 메소드는 기본적으로 호출이 되면 유저의 세션에 따라 대응되는 채널에 정보를 집어넣는다. 이 채널은 각 세션별 고루틴으로 연결되어, 해당 고루틴에서 처리된다.

```go

func (h *Hub) RegisterUser(session SessionName, uuid UUIDType, client Client) error {
	if _, ok := h.channels[session]; !ok {
		channelSet, err := RunSessionLoop()
		if err != nil {
			return err
		}

		h.mutex.Lock()
		h.channels[session] = *channelSet
		h.mutex.Unlock()
	}

	h.mutex.RLock()
	h.channels[session].register <- UserInfo{session, uuid, client}
	h.mutex.RUnlock()

	return nil
}

func (h *Hub) UnregisterUser(session SessionName, uuid UUIDType, client Client) {
	h.mutex.RLock()
	h.channels[session].unregister <- UserInfo{session, uuid, client}
	toDetete := <-h.channels[session].deleteSession
	h.mutex.RUnlock()

	if toDetete {
		h.mutex.Lock()
		delete(h.channels, session)
		h.mutex.Unlock()
	}
}
```

`RegisterUser()`에서는 채널에 등록할 유저 정보를을 넣기에 앞서 채널이 있는지 검사하여, 없다면 각 세션의 고루틴 및 채널을 생성한다. `UnregisterUser()`에서는 세션에 더이상 유저가 없는 경우 채널을 삭제하는 로직까지 추가된다.

<br>

마지막으로 각 세션의 고루틴을 실행하는 `RunSessionLoop()` 함수를 살펴보자.

```go
func RunSessionLoop() (*ChannelSet, error) {
	channelSet := ChannelSet{
		register:      make(chan UserInfo),
		unregister:    make(chan UserInfo),
		deleteSession: make(chan bool),
		broadcast:     make(chan MessageInfo),
		signaling:     make(chan MessageInfo),
	}

	clients := MakeSessionDataStore()

	go func() {
	loop:
		for {
			select {
			case registerUser := <-channelSet.register:
				err := handleUserRegister(clients, registerUser)
				if err != nil {
					fmt.Println("an error occurred while handling user registration, but still process :", err)
				}

			case unregisterUser := <-channelSet.unregister:
				err := handleUserUnregister(clients, unregisterUser)
				if err != nil {
					fmt.Println("an error occurred while handling user unregistration, but still process :", err)
				}

				if clients.IsEmpty(unregisterUser.Session) {
					channelSet.deleteSession <- true
					break loop
				} else {
					channelSet.deleteSession <- false
				}

			case messageData := <-channelSet.broadcast:
				err := sendBroadcastMessage(clients, messageData)
				if err != nil {
					fmt.Println("an error occurred while sending broadcast message, but still process :", err)
				}

			case messageData := <-channelSet.signaling:
				err := sendSignalingMessage(clients, messageData)
				if err != nil {
					fmt.Println("an error occurred while sending signaling message, but still process :", err)
				}
			}
		}
	}()

	return &channelSet, nil
}
```

채널 목록 및 `MakeSessionDataStore()`으로 세션별 데이터 저장소를 생성하고 for~switch loop으로 채널에서 데이터를 읽어와 처리한다.

<br>

전체 코드는 <https://github.com/jhseoeo/webrtc-mesh-server>에서 찾아볼 수 있다.

<br><br>

## 후기

many-to-many 만들 때 시그널링 메시지를 브로드캐스팅으로 보내버려서 피어 수가 3명이 넘어가면 연결이 제대로 안됐었는데, 뭐가 문제인지 찾는 데 한참 걸렸다.

개인적으로 WebRTC 좀 친다고 생각했었는데 아직 갈 길이 먼 것 같다..
