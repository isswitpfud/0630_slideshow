/* eslint-disable */

$(function () {


    setInterval(fnslide, 3000);

    function fnslide() {


        /* 슬라이드쇼 전환형
       1. first-child : fadeOut
        1-1. 첫째에 콜백함수(익명함수)를 만들어 순서를 마지막(.insertAfter)으로 이동
       2. nth(2)-child : fadeIn*/

        $("#slide a:first-child").fadeOut(
            3000,
            //콜백함수(익명함수)
            function () {
                $("#slide a:first-child").insertAfter("#slide a:last-child");
            }
        );


        $("#slide a:nth-child(2)").fadeIn(5000);
    }

});
