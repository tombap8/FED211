/// 보그 코리아 링크 시스템 JS - linksys.js ///

$(function(){ //////// jQB ///////////////////////

    // GNB 메뉴 링크 연결하기 //
    // 대상: .gnb a
    $(".gnb a").click(function(e){

        // 기본이동막기
        e.preventDefault();
        
        console.log("이동!");

    }); ///////// click //////////////


}); ///////////////// jQB ////////////////////////