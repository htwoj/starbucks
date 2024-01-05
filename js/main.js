
// 페이지 스크롤에 영향받는 요소들
// badge, arrow-award
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// lodash
// _.throttle(함수, 시간), 스크롤이 지나치게 자주 발생하는 것 조절
window.addEventListener('scroll', _.throttle(function (){
    
    console.log(window.scrollY);

    if (window.scrollY > 500) {
        // badge 숨김
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });

        // arrow-upward 버튼 표시
        gsap.to('#to-top', .2, {
            x: 0
        })

    } else {
        // badge 표시
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // arrow-upward 버튼 숨기기
        gsap.to('#to-top', .2, {
            x: 100
        })
    }
}, 300));

// arrow-upward 버튼 클릭 시, 최상단 0.7초 동안 이동
toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0 
    })
})


// 각 이미지 fade-in 설정
const fadeEls = document.querySelectorAll('.visual .fade-in');

// fade-in에 적용될 요소들 찾기
fadeEls.forEach(function (fadeEl, index){
    // gsap.to(요소, 지속시간, 옵션);
    // delay로 순서대로 보여지게 함
    gsap.to(fadeEl, 1, {
        delay: (index+1) * .5,
        opacity: 1
    });
});


// 슬라이드 적용
// swiper - new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
    direction: 'horizontal', // 수평 슬라이드
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기,
    autoplay: {
        delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true,
    pagination: { // 페이지 번호 사용 여부
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable : true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
});

new Swiper('.awards .swiper-container', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


// 프로모션 슬라이드 토글 기능
// 버튼을 클릭하면 프로모션 영역자체를 닫아주거나 열기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion; // 슬라이드 영역 숨김 여부를 반댓값으로 설정

    if(isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
})



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

// 이미지가 둥둥 떠다니는 애니메이션
function floatingObject(selector, delay, size){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 시간
        { // 옵션
            y: size, // transform: translateY()와 같음. 수직으로 얼마나 움직일지 설정
            repeat: -1, // 무한 반복
            yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
            ease: Power1.easeInOut, // easing 함수 적용, 속도 커브 옵션
            delay: random(0, delay) // 얼마나 늦게 애니메이션을 시작할 것인지 지연시간
        })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// scrollMagic
// 요소가 화면에 보여짐 여부에 따른 설정
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    // 특정한 요소를 감시하는 옵션을 지정하는 메소드 Scene()
    new ScrollMagic
        .Scene({ // 감시할 scene 추가
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
        })
        .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수)
});

