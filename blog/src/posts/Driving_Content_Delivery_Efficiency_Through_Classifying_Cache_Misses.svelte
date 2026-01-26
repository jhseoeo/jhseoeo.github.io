<script context="module" lang="ts">
  export const metadata = {
    title: 'Driving Content Delivery Efficiency Through Classifying Cache Misses',
    date: '2025-07-19',
    categories: ["Backend"],
    coverImage: '/images/Driving_Content_Delivery_Efficiency_Through_Classifying_Cache_Misses/1783c3b28e31bb4b.png',
    coverWidth: 16,
    coverHeight: 9,
    excerpt: '넷플릭스의 CDN 관리',
    indexed: false,
    exposed: true
  };
</script>

<script lang="ts">
  import CodeBlockWrapper from '$lib/components/CodeBlockWrapper.svelte';
</script>

<h2>개요</h2>

<ul>
<li>넷플릭스가 굴리는 CDN에서는 Open Connect Appliances(OCA)라고 하는 서비스가 있다고 합니다</li>
<li>근데 아무래도 최대한 캐시 미스 덜 나고 CDN 타야 좋겠죠</li>
<li>그래서 캐시 미스가 발생하는 원인을 잘 분류해서 분석해보았습니다</li>
</ul>
<p></p>

<h2>캐시 미스</h2>

<img src="/images/Driving_Content_Delivery_Efficiency_Through_Classifying_Cache_Misses/1783c3b28e31bb4b.png" alt="" class="responsive-image" />

<ul>
<li>OCA 상태와 상관 없이, 각 클라이언트 기준으로 최적의 OCA에서 데이터가 제공되지 않을 때
  <ul>
  <li>Steering service라는 게 있는데, 미디어 데이터를 어느 OCA에서 가져올 지 결정해줌</li>
  <li>IP의 근접성 기준으로 결정 (BGP 경로..?)
    <details>
      <summary>그게 뭔데</summary>
      <img src="/images/Driving_Content_Delivery_Efficiency_Through_Classifying_Cache_Misses/ee05d6bf9e2df65b.png" alt="" class="responsive-image" />

    </details>

  </li>
  <li>즉, 넷플릭스 형님들은 캐시 미스를 클라이언트 기준으로 판단한다!</li>
  </ul>
</li>
<li>캐시 미스 발생 원인은 이런 게 있다
  <ul>
  <li>콘텐츠 누락 (OCA에 파일 자체가 없는 경우)
    <p>여러 알고리즘에 의해 어느 OCA에 어느 파일을 올릴 지가 달라지다 보니 해당 OCA에는 파일이 없을 수도 있음</p>

  </li>
  <li>Health Miss
    <ul>
    <li>OCA 리소스 대비 요청량이 넘칠랑말랑 해서 다른 OCA로 넘기는 경우</li>
    </ul>
  </li>
  </ul>
</li>
</ul>
<p></p>

<h2>캐시 미스 계산</h2>

<ul>
<li>을 하기 위해서 몇 가지 로그를 쌓습니다
  <ul>
  <li>Steering service에서 계산한 ‘근접 순위’
    <ul>
    <li>Steering service 자체를 모킹해서 이것저것 실험해볼 수도 있다는 느낌으로 적혀 있네요</li>
    </ul>
  </li>
  <li>OCA 서버 로그
    <ul>
    <li>비디오 스트리밍을 시작하면 파일 수, 총 바이트 수 등의 데이터를 기록</li>
    </ul>
  </li>
  </ul>
</li>
<li>해당 로그들을 결합하여 캐시 미스 메트릭을 쌓음
  <ol>
  <li>카프카로 전송</li>
  <li>로그 통합
    <ul>
    <li>Steering service와 OCA는 서로 다른 리전에 있음</li>
    <li>(카프카 알못이라 뭔소린지 모름) 다대다 조인 하면 모든 리전에 로그를 복제해야 함..</li>
    <li>리전간 전송을 딱 한 번만 수행하여 모든 로그를 단일 리전으로 보낸다</li>
    </ul>
  </li>
  <li>Steering service의 로그와 OCA의 로그를 조인</li>
  <li>캐시 미스 계산
    <ul>
    <li>Steering service에서 준 순위의 첫 번째 OCA에서 다운로드 받은 미디어인지 확인</li>
    </ul>
  </li>
  </ol>
  <p></p>

</li>
</ul>
<h2>활용</h2>

<img src="/images/Driving_Content_Delivery_Efficiency_Through_Classifying_Cache_Misses/f143d03c7e601e83.png" alt="" class="responsive-image" />

<p>대충 이런 대시보드 만들고 알림 받아서, 캐시 미스 너무 높아지면 장애 대응하거나 잘못 예측된 콘텐츠를 OCA에 신속하게 배포한다던지 등등을 한다고 합니다</p>

<p></p>

<p>여담) 넷플릭스에 이런 글이 올라왔었다</p>

<p><a href="https://netflixtechblog.com/behind-the-streams-live-at-netflix-part-1-d23f917c2f40">Behind the Streams: Live at Netflix. Part 1</a></p>

<img src="/images/Driving_Content_Delivery_Efficiency_Through_Classifying_Cache_Misses/902365be224d1999.png" alt="" class="responsive-image" />

<p>와 가뜩이나 요새 미디어한테 두드려맞고 있는데 이거 완전 좋은 글감이잖아?</p>

<p>근데 넷플릭스 기술블로그 특인 글들은 기술적인 내용이 생각보다 없고 일반론이 많아서 패스..</p>

<p>LLHLS + CDN 기반으로 무난히 스트리밍한다는 얘기를 이만큼 늘려서 쓸 수 있는 것도 대단한 능력</p>

<p></p>

<p></p>


