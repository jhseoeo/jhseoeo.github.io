---
title: 'WebSocket에 CORS를 적용하려면'
date: 2023-11-11
excerpt: '???: 내 웹소켓은 부끄럼쟁이인가봐요'
categories:
  - 'Golang'
  - 'Fiber'
  - 'Websocket'
  - 'CORS'
coverImage: '/post_img/Backend/Architecture/DDD/cover.png'
coverWidth: 16
coverHeight: 9
indexed: true
exposed: true
---

<script>
	import CodeBlockWrapper from '$lib/components/CodeBlockWrapper.svelte';
</script>

Fiber 프레임워크를 사용하는 경우 CORS를 적용하려면 일반적으로 다음과 같이 하면 된다.

```go
app := fiber.New()
...
app.Use(cors.New(cors.ConfigDefault))
...
app.Listen(":3000")
```

이렇게 cors 미들웨어를 사용하면 다른 Origin에서 날린 요청도 받아줄 수 있다.
보통의 REST API라면 이걸로 CORS 요청을 받아서 처리하는 게 가능하지만, WebSocket의 경우는 다르다.

<br><br>

[Fiber CORS 미들웨어 문서](https://docs.gofiber.io/api/middleware/cors/)를 보면, 기본 CORS 설정 사용시 `GET,POST,HEAD,PUT,DELETE,PATCH` 메서드에 대해서만 CORS가 적용된다.

GET, POST 요청 같은 단순 요청(Simple Requests)은 CORS Preflight 요청을 보내지 않고 바로 요청을 보낸다.
그러나 WebSocket의 경우 Preflight 요청을 보내며, Preflight 요청의 메서드는 OPTIONS이다.
따라서 OPTIONS 메서드에 대해서도 CORS를 적용해주어야 한다.

Fiber에서는 다음과 같이 CORS 설정을 변경할 수 있다.

```go
app := fiber.New()
...
app.Use(cors.New(cors.Config{
    AllowOrigins: "*",
    AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
}))
...
app.Listen(":3000")
```

만약 미들웨어를 사용하지 않고 직접 CORS를 적용하고 싶다면 다음과 같이 하면 된다.

```go
app.Use(func(c *fiber.Ctx) error {
    c.Set("Access-Control-Allow-Origin", "*")
    c.Set("Access-Control-Allow-Methods", "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS")
    return c.Next()
})
```

<br>

아니 파이버야 당연히 OPTIONS도 해주는 줄 알았지...  
그래도 덕분에 Preflight Request에 대해 다시 한번 공부했다.

## References

---

- [Fiber CORS](https://docs.gofiber.io/api/middleware/cors/)
- [CORS Preflight](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#%EA%B8%B0%EB%8A%A5%EC%A0%81_%EA%B0%9C%EC%9A%94)
