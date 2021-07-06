// 프로필 페이지 JS - profile.js

$(function(){ /// jQB /////////////////////

    console.log("프로필JS로딩!");


    /// 자기소개 박스에 마우스 오버시
    // 디자인쪽에 오버하면 폰이 그쪽으로 회전(60deg)
    // 코더쪽에 오버하면 폰이 그쪽으로 회전(300deg)

    // 대상: .showtxt
    // 이벤트: mouseenter
    //      (요소의 경계선 안으로 들어갈때 발생)
    $(".showtxt").mouseenter(function(){

        // is()메서드로 오버된 요소의 클래스를 확인한다!
        // is(확인할선택자) 
        // -> 확인할 선택자를 조사하여 true/false를 리턴함!

        let isit = $(this).is(".dtxt");

        console.log("마우스엔터!"+isit);


    }); ///////// mouseenter 함수 ////////////



});////////////// jQB ////////////////////