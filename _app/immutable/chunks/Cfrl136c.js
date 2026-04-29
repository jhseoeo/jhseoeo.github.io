import"./Bzak7iHL.js";import"./69_IOA4Y.js";import{s as p,f as c,n as m}from"./CVx5jffJ.js";import{f as l,a}from"./2cXyNWGb.js";import{C as s}from"./BQl3WXse.js";const C={title:"Claude hook 기반 daemon 개발하기",date:"2026-05-01",categories:["AI"],coverImage:"/images/default-cover.jpg",coverWidth:16,coverHeight:9,excerpt:"",indexed:!1,exposed:!0};var g=l(`<pre class="language-plain text"><code class="language-plain text">    Claude Code ──▶ gate.py ──▶ daemon                   
                                  │                                                                                                                                                                                         
                                  ▼
                         매칭되는 룰 있나?                                                                                                                                                                                  
                                  │                                                                                                                                                                                         
                ┌─────────────────┼─────────────────┐
                ▼                 ▼                 ▼                                                                                                                                                                       
              없음             1차 시도           2차 시도
                            (플래그 없음)      (플래그 있음)                                                                                                                                                                
                │                 │                 │                                                                                                                                                                       
                ▼                 ▼                 ▼                                                                                                                                                                       
              통과         경고 + 차단         플래그 소비                                                                                                                                                                  
                                │              → 통과                                                                                                                                                                       
                                ▼                        
                          에이전트 retry                                                                                                                                                                                    </code></pre>`),h=l(`<pre class="language-plain text"><code class="language-plain text">    Claude Code                                                                                                                                                                                                             
        │                                                                                                                                                                                                                   
        │  SessionStart                                                                                                                                                                                                     
        ▼
     init.py  ──▶  daemon 살아있나?
                      │           │                                                                                                                                                                                         
                     YES          NO                                                                                                                                                                                        
                      │           │                                                                                                                                                                                         
                    skip       백그라운드로 daemon 띄움                                                                                                                                                                     
                                  │                                                                                                                                                                                         
                                  ▼
                            daemon (대기)    



     Project A                       Project B           
     ┌──────────┐  ┌──────────┐      ┌──────────┐
     │ session1 │  │ session2 │      │ session3 │                                                                                                                                                                           
     └────┬─────┘  └────┬─────┘      └────┬─────┘
          │             │                 │                                                                                                                                                                                 
          └──────┬──────┘                 │              
                 ▼                        ▼                                                                                                                                                                                 
          ┌─────────────┐          ┌─────────────┐                                                                                                                                                                          
          │  daemon A   │          │  daemon B   │
          │             │          │             │                                                                                                                                                                          
          │ rules: 공유  │          │ rules: 별개  │       
          │ flags: 세션  │          │ flags: 세션  │                                                                                                                                                                          
          │   별 분리     │          │   별 분리    │                                                                                                                                                                          
          └─────────────┘          └─────────────┘                                                                                                                                                                          
                                                                                                                                                                                                                            
     같은 프로젝트 = 같은 daemon (rules 공유, flag 만 세션별 분리)                                                                                                                                                          
     다른 프로젝트 = 별개 daemon  </code></pre>`),f=l(`<pre class="language-plain text"><code class="language-plain text">&#123;
  "rules": [
    &#123;
      "id": "no-force-push",
      "matcher": "Bash",
      "pattern": "git push.*(--force|-f)",
      "message": "[clflmgr] Force push requires checking 'git status' first.\\n\\n- If you have not checked, please do so first.\\n- If unnecessary, re-run the same command.\\n\\n(Auto-resets after 30s)",
      "timeout": 30
    &#125;
  ]
&#125;</code></pre>`),_=l("<p>최근 claude code를 활용하여 개인 프로젝트를 열심히 돌리고 있는데, 이런 일이 있었다</p> <ul><li>배포하기 전에는 로컬에서 pre-deploy라는 작업을 거친 후 배포하는 플로우가 존재한다. (이것저것 테스트하는 명령어)</li> <li>근데 클로드 이녀석이!! CLAUDE.md에 명시해놔도 냅다 무시한다!!!!!!</li> <li>그렇다고 git push 자체를 hook으로 냅다 틀어막을 수는 없는 노릇…</li></ul> <h2>시행착오</h2> <p>그래서 이것저것 시도해본 것들</p> <ol><li>앞서 언급했지만 CLAUDE.md에 명시도 했다. <p>→ NEVER나 MUST같은 걸 어느 정도 넣어서 시도해보긴 했지만 생각만큼 잘 되진 않았고, 더 넣자니 토큰 수 너무 까먹을 것 같고 강조/부정프롬을 너무 많이 넣으면 안좋다는 글을 어디서 본 것 같아서..</p></li> <li>hook으로 막지 않고 echo로 프롬프트 주입만 하기 <p>→ 클로드가 가능하다고 알려준 방법인데, 그냥 무시하고 지 할 일을 한다;;</p></li> <li>pre-deploy를 실행하면 .pre-deploy-passed 파일을 생성하고, git push origin develop에 푸시할 때 hook으로 .pre-deploy-passed 파일 없으면 푸시 못하게끔 만들기 <p>→ 근데 이녀석이 지 맘대로 .pre-deploy-passed 파일 touch해서 bypass해버린다</p> <p>→ 화들짝 놀라서 인터럽트하고,  왜 그랬냐고 변명을 들어보니 변경사항이 trivial해서 그랬다고 하더라. 틀린 말은 아닌데…</p></li></ol> <h2>아이디에이션</h2> <p>claude plugin 중에 이런 게 있다 (unknown mention type link_preview)</p> <p>hook 내부에서 session id 기반으로 json 파일 생성하고, 이 안에 플래그를 저장하는 방식으로, 한 세션에서 이미 본 warning은 무시할 수 있다.</p> <p>즉 클로드가 잠재적으로 위험성이 있는 명령어를 실행하려 하면 한 번 중단하면서 echo로 메세지를 적당히 출력. 컨텍스트를 주입하면서 에이전트가 적절한 다음 행동을 할 수 있도록 유도하는 방식이다.</p> <p>좋은 아이디어같긴 한데, 몇 가지 아쉬운 점이 있었다.</p> <ul><li>션에서 한 번 warning 보고 나면 끝. 작업 길어지면 컨텍스트 길어지고 compact하고 할 텐데.. warning 내용도 까먹지 않을까</li> <li>하드코딩되어 박혀 있는 rule 말고는 수정이 불가한데, 동적으로 설정할 수 있지 않을까</li></ul> <h2>개발</h2> <p>그래서 만들었다 (unknown mention type link_preview)</p> <!> <p>핵심적인 컨셉은 매칭되는 명령어를 입력시 프롬프트 출력하면서 1회 차단 → 2회째에 실행을 허용하는 것</p> <ul><li>에이전트가 출력된 프롬프트 보고 자체적으로 판단이 가능하고</li> <li>플래그는 30초 후 초기화되니 나중에 다시 실행하면 프롬프트 재주입이 가능하다</li></ul> <p></p> <!> <p>그럼 상태 관리는 어디에서 하느냐? 클로드 세션이 뜰 때, SessionStart 훅으로 별도의 daemon이 실행된다</p> <ul><li>프로젝트 경로를 해싱해서 /tmp 하위 경로 어딘가에 유닉스 소켓을 열고,</li> <li>PreToolUse 훅을 걸어서 이 유닉스 소켓으로 요청을 보내는 구조가 된다.</li> <li>매 요청마다 session_id도 같이 보내서 플래그 상태가 세션별로 분리되게 하였다.</li></ul> <p></p> <p>규칙은 아래와 같은 구조로 지정된다</p> <!> <p>이렇게 하면 에이전트가 Bash에서 git push -f같은 명령어를 실행하려 할 때, daemon이 1회는 tool 사용을 거절하고 message에 입력된 프롬프트를 주입해준다.</p> <p>그 이후 30초동안은 동일 명령어 재실행시 명령어를 허용하는 구조가 된다. daemon이 알아서 30초 후에 플래그를 리셋</p> <p></p>",1);function w(d){var r=_(),t=p(c(r),26);s(t,{children:(e,n)=>{var o=g();a(e,o)},$$slots:{default:!0}});var i=p(t,8);s(i,{children:(e,n)=>{var o=h();a(e,o)},$$slots:{default:!0}});var u=p(i,10);s(u,{children:(e,n)=>{var o=f();a(e,o)},$$slots:{default:!0}}),m(6),a(d,r)}export{w as default,C as metadata};
