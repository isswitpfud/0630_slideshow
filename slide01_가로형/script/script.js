/* eslint-disable */

$(function () {

    //fnSlide(); 함수의 내부코드가 실행=함수코드 (반복x)
    setInterval(fnSlide, 3000); //일정시간마다 반복

    function fnSlide() {
        //슬라이드쇼 애니메이션 코드
        $("div#shuttleFrame").animate({
                "margin-left": "-780px"
            },
            3000,
            //콜백함수(=익명함수)
            function () {
                $("#shuttleFrame>a:nth-child(1)").insertAfter("#shuttleFrame>a:nth-child(3)")

                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            }
        ); //슬라이드쇼 애니메이션 코드
    }
});
