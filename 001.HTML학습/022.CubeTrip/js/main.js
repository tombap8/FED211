// 큐브트립 메인 JS 

// 로딩구역 ////////////////////////////////////////////
$(function () { // jQB //////////////////////////////////

    // 로딩확인
    console.log("로딩완료");

    // 메뉴 클릭시
    // 대상: .city a
    $(".city a").click(function () {

        // 1. a요소의 글자 읽어오기
        //  (this는 클릭된 a자신!)
        var txt = $(this).text();
        console.log("메뉴:" + txt);

        // 2. 회전값 셋팅하기
        var setval;
        switch (txt) {
            case "출발":
                setval = "rotateX(0deg) rotateY(0deg)";
                break;
            case "서울":
                setval = "rotateX(-90deg) rotateY(-360deg)";
                break;
            case "런던":
                setval = "rotateX(360deg) rotateY(-90deg)";
                break;
            case "베를린":
                setval = "rotateX(-360deg) rotateY(90deg)";
                break;
            case "파리":
                setval = "rotateX(720deg) rotateY(-180deg)";
                break;
            case "뉴욕":
                setval = "rotateX(450deg) rotateY(360deg)";
                break;
        }

        // 3. 회전값 적용하기(transform에 setval변수값 적용하기)
        $(".cube").css({
            transform: setval,
            transition: "1.5s ease-in-out"
        }); /////////// css /////////////////





    }); /////// click ////////////////////


}); ////////////// jQB /////////////////////////////////
///////////////////////////////////////////////////////