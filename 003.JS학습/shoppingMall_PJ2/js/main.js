//// 쇼핑몰 PJ 2 메인 JS - main.js//////
/////// 무한이동 슬라이드 버전 /////////

/////////// html로드구역 /////////////////////
// load 이벤트 / DOMContentLoaded 이벤트
window.addEventListener("load",function(){

    // 1. 로드구역 실행확인
    console.log("로딩완료!");

    // 2. 슬라이드번호
    var snum = 0;
    /* snum*-100 -> 0, -100, -200, -300, -400 */
    // -100%는 슬라이드 이동의 기본 단위임!
    // 따라서 여기에 몇배 곱하기로 슬라이드를 이동한다!
    // 0부터 시작하는 이유는 첫번째 슬라이드가 left:0 이기때문!

    // 3. 변경대상: #slide
    var slide = document.querySelector("#slide");

    // 4. 슬라이드 오른쪽 이동버튼 셋업 ///////
    document.querySelector(".ab2").onclick = 
    function(){
        // 1. 호출확인
        console.log("나,오른쪽!");
        
        // 2. 변경대상 : #slide -> 바깥에 변수 slide

        // 3. 변경내용 : 슬라이드 left값 왼쪽이동으로 변경
        slide.style.left = "-100%";
        slide.style.transition = "left .8s ease-in-out";


    };/////// click이벤트 함수 ///////////////

    // 5. 슬라이드 왼쪽 이동버튼 셋업
    document.querySelector(".ab1").onclick = 
    function(){
        // 1. 호출확인
        console.log("나,왼쪽!");
        
        // 2. 변경대상 : #slide -> 바깥에 변수 slide

        // 3. 슬라이드 번호 감소하기!
        snum--;//1씩감소
        // 한계값설정(첫번호보다 작아지면 끝으로 가기 또는 고정!)
        //if(snum === -1) snum = 0; // 첫번호 고정!
        if(snum === -1) snum = 4; // 끝으로 가기!

        console.log("슬번:"+snum);

        // 4. 변경내용 : 슬라이드 left값 왼쪽이동으로 변경
        slide.style.left = (snum*-100) + "%";
        slide.style.transition = "left .8s ease-in-out";


    };/////// click이벤트 함수 ///////////////




});////////// 로드구역 ////////////////////////
