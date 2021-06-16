// 큐브트립 메인 JS 

// 로딩구역 ////////////////////////////////////////////
$(function () { // jQB //////////////////////////////////

    // 로딩확인
    console.log("로딩완료");

    // 메뉴 클릭시
    // 대상: .city a
    $(".city a").click(function () {

        // 0. 도시정보박스 숨기기(트랜지션없앨것!)
        $(".cbx").css({
            opacity:"0",
            transition:"none"
        });///////// css /////////


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

        // 4. 도시정보 셋팅하기 ///

        // 5. 도시정보박스 보이기 ///
        // 대상: .cbx
        // 내용: 큐브가 1.5초 회전한 후 도시정보박스가 보인다
        // 1.5초후에 실행하려면? setTimeout(함수,시간)
        setTimeout(function(){
            $(".cbx").css({
                opacity:"1",
                transition:"opacity .8s ease-in-out"
            });///////////////// css /////////////////
        },1500);////타임아웃함수 ///////////////////////







    }); /////// click ////////////////////


}); ////////////// jQB /////////////////////////////////
///////////////////////////////////////////////////////