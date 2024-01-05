    // YOUTUBE IFrame API - 비동기로 로드
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // onYouTubeIframeAPIReady 함수명은 API에서 사용하기 때문에 변경 불가능
    // <iframe> 생성
    function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
        playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 ID
        },
        events: {
            // 영상이 준비되었을 때
            onReady: function(event){
                event.target.mute() // 음소거
            }
        }
    });
    }
