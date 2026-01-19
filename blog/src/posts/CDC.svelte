<script context="module" lang="ts">
  export const metadata = {
    title: 'CDC',
    date: '2024-07-22',
    categories: ["Backend","DevOps"],
    coverImage: '/images/CDC/8afdc0433fd7f5bf.png',
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

<p>어느날 RSS 등록된 포스트를 보다 보니.. 이런 게 있었다</p>

<!-- Unknown block type: bookmark -->
<h2>그게 뭔데</h2>

<ul>
<li>Change Data Captrue; 데이터베이스 안에서 일어나는 변경사항들을 감지하고, 각 변경사항을 이벤트로 변환해서 이벤트 스트림으로 전송할 수 있게 해준다</li>
<li>그냥 쿼리 날릴 때 적당히 로그도 같이 찍으면 되는 거 아닌가?
  <ul>
  <li>는 db update는 성공하고 로그찍는데 실패하는 분산db 일관성문제 머리쪼개진다 그래선 안된다</li>
  </ul>
</li>
<li>CDC 구현 방법(변경되는 데이터를 캡처하는 방법)은 보통 3가지가 있는 모양
  <ul>
  <li>Trigger-based</li>
  <li>Timestamp-based</li>
  <li>Log-based(transaction log, binlog)</li>
  </ul>
</li>
</ul>
<p></p>

<h2>찍먹</h2>

<ul>
<li>첨부한 포스트도 그렇듯, CDC를 위해 가장 많이 사용되는 툴은 Debezium이라고 한다. Debezium은 log-based 채택
  <p>⇒ DB 인스턴스에 추가적으로 정보를 저장할 필요는 없지만, 부하 자체는 생길 수 있음)</p>

</li>
</ul>
<img src="" alt="" class="responsive-image" />

<ul>
<li>Debezium은 Kafka Connect에 붙여서 사용하는 방식을 주로 사용하고, kafka와 독립적으로 사용할 수 있는 Debezium Server가 있어서 AWS Kinesis같은 다른 파이프라인에 붙일 수도 있는 듯 하다.</li>
<li>대략 <a href="https://debezium.io/documentation/reference/2.7/tutorial.html#starting-zookeeper">튜토리얼</a> 따라서 열심히 쿼리를 날려보면
  <img src="/images/CDC/8afdc0433fd7f5bf.png" alt="" class="responsive-image" />

  <img src="/images/CDC/08f85b2ef1e24f36.png" alt="" class="responsive-image" />

  <img src="/images/CDC/a4cfd463f8d32ed2.png" alt="" class="responsive-image" />

  <img src="/images/CDC/8ce751484ffac0d2.png" alt="" class="responsive-image" />

  <p>이렇게 topic에 이벤트가 찍힌다. 각 이벤트에는 칼럼에 대한 정보, before/after, 메타데이터 등의 정보가 저장되어 .있다</p>

</li>
</ul>
<!-- Unknown block type: unsupported -->
<!-- Unknown block type: unsupported -->
<!-- Unknown block type: unsupported -->
<!-- Unknown block type: unsupported -->
<p></p>

<h2>쓰임새?</h2>

<ul>
<li>카프카 환경만 잘 셋업되어 있다면 약간의 설정(e.g. DB 로그에 접근할 수 있는 권한의 유저?)과 함께 사용할 수 있는 듯 하다</li>
<li>서비스에서 Redis, DB, ES 등에 multiple write를 해야 하는 상황이라면 대안으로 고려해볼 수 있지 않을까 싶다.</li>
<li>DB가 분리되어 있는 MSA에서 데이터 변경을 전파하는 용도로도 사용할 수 있다고 한다.</li>
<li>db 마이그레이션할 때도 좋은 선택지라는 듯</li>
<li>물론 이러한 일반적인 활용처 말고도 DB 변경을 실시간 이벤트로 뿌릴 수 있다는 확실한 특징이 있으니, 도메인에 따라 적절한 활용처를 찾을 수 있지 않을까 싶습니다.</li>
</ul>

