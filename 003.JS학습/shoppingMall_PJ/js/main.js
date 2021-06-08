// 쇼핑몰 PJ 메인 JS - main.js

/////////// html로드구역 /////////////////////
// load 이벤트 / DOMContentLoaded 이벤트
window.addEventListener("load",function(){

    // 1. 로드구역 실행확인
    console.log("로딩완료!");

    // 2. 변경대상: #slide
    var slide = document.querySelector("#slide");

    // 3. 슬라이드 오른쪽 이동버튼 셋업
    document.querySelector(".ab2").onclick = 
    function(){
        // 1. 호출확인
        console.log("나,오른쪽!");
        
        // 2. 변경대상 : #slide -> 바깥에 변수 slide

        // 3. 변경내용 : 슬라이드 left값 왼쪽이동으로 변경
        slide.style.left = "-100%";
        slide.style.transition = "left .8s ease-in-out";


    };/////// click이벤트 함수 ///////////////




});////////// 로드구역 ////////////////////////
