
// 검책창 이벤트 설정
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소 내부를 클릭하면 실행
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
    
});

// 검색창 요소 내부 input 요소에 focus되면 실행
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색창 요소 내부 실제 input 요소에서 포커스 해제되면 실행
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});



// footer - 올해 년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();