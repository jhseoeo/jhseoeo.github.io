<script context="module" lang="ts">
  export const metadata = {
    title: 'HLS',
    date: '2024-09-30',
    categories: ["Backend"],
    coverImage: '/images/HLS/b1f7a85af74efa52.png',
    coverWidth: 16,
    coverHeight: 9,
    excerpt: '',
    indexed: false,
    exposed: true
  };
</script>

<script lang="ts">
  import CodeBlockWrapper from '$lib/components/CodeBlockWrapper.svelte';
</script>

<p>애플이 심심했는지 미디어 스트리밍 프로토콜을 만들었다</p>

<p>용량이 큰 비디오를 여러 개의 세그먼트(보통 8~10초 단위)로 분할해 서빙하고, http 요청을 기반으로 비디오를 스트리밍</p>

<p>보통 영상을 업로드하는 시점에 비디오 세그먼트(.ts)와 메타데이터(.m3u8)로 트랜스코딩</p>

<p></p>

<h3>m3u8</h3>

<ul>
<li>Master Playerlist: 전체적인 비디오의 메타데이터  
  <CodeBlockWrapper>
    <pre class="language-plain text"><code class="language-plain text">#EXTM3U
#EXTINF:10.0,
http://example.com/segment1.ts
#EXTINF:10.0,
http://example.com/segment2.ts
#EXTINF:10.0,
http://example.com/segment3.ts</code></pre>
  </CodeBlockWrapper>

</li>
</ul>
<p></p>

<ul>
<li>Media Playlist: 각 세그먼트에 대한 메타데이터
  <CodeBlockWrapper>
    <pre class="language-plain text"><code class="language-plain text">#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=1280000,RESOLUTION=640x360
low_bandwidth.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2560000,RESOLUTION=1280x720
medium_bandwidth.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=5120000,RESOLUTION=1920x1080
high_bandwidth.m3u8</code></pre>
  </CodeBlockWrapper>

  <ul>
  <li>먼가 해상도, 비트레이트 같은 게 다닥다닥 붙어 있는데 Adaptive Bitrate Streaming을 위한 것</li>
  </ul>
</li>
</ul>
<p></p>

<h3>장단점</h3>

<ol>
<li>stateless - 로드밸런싱, 스케일 아웃 등등등이 용이해짐
  <ul>
  <li>이 장점 하나가 무지막지하게 크다</li>
  </ul>
</li>
</ol>
<!-- Unknown block type: divider -->
<ol>
<li>업로드 코스트. 아무래도 단일 파일을 쪼개서 트랜스코딩해야 할테니 여기에 소요되는 프로세싱 파워가 있을 것</li>
<li>실시간의 경우 레이턴시가 높음
  <ul>
  <li>대안: Low Latency HLS?</li>
  </ul>
</li>
</ol>
<p></p>

<h3>개발자 도구 까보기</h3>

<p>귀여운 댕댕이 영상이 hls로 날아가는 걸 개발자 도구로 까보았다</p>

<img src="/images/HLS/b1f7a85af74efa52.png" alt="" class="responsive-image" />

<img src="/images/HLS/5d75935f10e03dca.png" alt="" class="responsive-image" />

<p>Content-Type: application/vnd.apple.mpegurl</p>

<p>request body에 m3u8이 왔다</p>

<img src="/images/HLS/624a3303f4615564.png" alt="" class="responsive-image" />

<p>Content-Type: application/octet-stream</p>

<p>매 요청마다 비디오 세그먼트를 가져온다</p>

<p></p>

<p>넷플릭스도 쓰는가보다 안 쓸 리가 없지</p>

<img src="/images/HLS/fb9351412b186208.png" alt="" class="responsive-image" />

<p>m3u8은 잘 숨겨놓은 것인지 못찾았다. 추측컨대 개발자도구에서 안보이게 어느정도 암호화? 걸 수도 있는 듯</p>

<p></p>

<h3>여담</h3>

<p>유튜브는 UMP라고 하는 MIME? 파일 포맷?을 쓰는 듯한데 검색하려니 웬 기관단총만 잔뜩 나와서 검색을 포기했다;;</p>

<p></p>


