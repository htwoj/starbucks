# 예제 2 - 스타벅스 랜딩 페이지

## 설명
HTML/CSS/JS를 활용하여 애니메이션을 포함한 스타벅스 랜딩 페이지 구현
- [DEMO 페이지로 이동](https://scintillating-gnome-7293ce.netlify.app/)


## 주요 파일/폴더
**index.html**  
**css**
- main.css
- signin.css
- common.css // 공통으로 사용되는 css  

**js**
- main.js
- youtube.js
- common.js // 공통으로 사용되는 js  

**images**
- 배경, 뱃지 등 이미지


## 사용 라이브러리

**[오픈 그래프 / 트위터 카드]**  
    - 웹페이지가 소셜 미디어(카카오톡, Slack 등)로 공유될 때 우선적으로 활용되는 정보 지정  
    - 페이지 title, 설명, image, url 등 

**[GSAP]**  
    - 자바스크립트로 웹 화면을 제어(세밀한 움직임, 동작의 연속성 등)하는 애니메이션 라이브러리  
    - gsap.to()

**[ScrollToPlugin]**  
    - GSAP 추가기능으로 스크롤 애니메이션 라이브러리  
    - scrollTo() 사용

**[Swiper]**  
    - 슬라이드를 구현하는 라이브러리

**[Youtube API]**  
    - Youtube 동영상 제어  
    - onYouTubePlayerAPIReady 함수명은 해당 IFrame Player API에서 사용하기 때문에 다르게 지정하면 정상 작동 불가능

**[ScrollMagic]**  
    - 스크롤과 요소의 상호작용을 위한 자바스크립트 라이브러리  
    - 주로 어떤 요소가 현재 화면에 보이는 상태인지 확인할 때 사용

**[Lodash]**  
    - 배열이나 객체를 좀 더 간편하게 다루는 자바스크립트 라이브러리  
    - _.throttle() 사용 : 이벤트가 계속해서 함수를 호출하는 경우, 정해진 시간 동안 한 번만 호출하게 하는 기능(ex) 스크롤)