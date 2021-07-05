/* eslint-disable */

$(function(){


    //  fnSlide();  함수명(); --> 1회만 실행
    setInterval(fnSlide, 5000);


    function fnSlide(){

        $("#shuttleFrame").animate(
        {"margin-top":"-300px"},
        3000,
        function() {
            $("#shuttleFrame>a:nth-child(1)")
                .insertAfter("#shuttleFrame>a:nth-child(3)");

            $("#shuttleFrame").css({"margin-top":"0px"});
        }
    );
    }


});
