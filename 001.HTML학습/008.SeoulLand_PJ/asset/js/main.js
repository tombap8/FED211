// 서울랜드 메인페이지 JS - main.js ///////////


// 제이쿼리 코드블록 ///////////////////////
$(function(){ // jQB /////////////////////

    // 1. 메인배너 기능구현 ////////
    // 대상: 슬라이드박스 .slide li
    var sld = $(".slide li");
    // 슬라이드 순번변수
    var snum = 0;

    // 1-1. 오른쪽 버튼 클릭시 다음배너 나오기
    // 대상: .rb
    $(".rb").click(function(){
        // 확인
        console.log("오른쪽이동!");

        // 1. 슬라이드 순번증가 //////////////////////////
        snum++;
        if(snum === sld.length) snum = 0;
        // 한계수체크: 슬라이드 개수와 같아지면 처음으로!
        console.log("슬라이드개수:"+sld.length);
        console.log("슬라이드번호:"+snum);

        // 2. 해당순번 li 슬라이드에 클래스 "on"넣기(나머지는 빼기)
        sld.eq(snum).addClass("on").siblings().removeClass("on");
        // eq() 메서드 - 컬렉션집합요소의 순번을 선택하는 메서드
        // eq(n) -> n은 0부터 순서를 센다!
        // eq는 sequence 라는 단어에서 온것임

    }); /////////// click /////////////////

    // 1-2. 왼쪽 버튼 클릭시 이전배너 나오기
    // 대상: .lb
    $(".lb").click(function(){
        // 확인
        console.log("왼쪽이동!");

        // 1. 슬라이드 순번감소 //////////////////////////
        snum--;
        if(snum === -1) snum = sld.length-1;//개수-1=마지막순번
        // 한계수체크: 슬라이드 개수와 같아지면 처음으로!
        console.log("슬라이드개수:"+sld.length);
        console.log("슬라이드번호:"+snum);

        // 2. 해당순번 li 슬라이드에 클래스 "on"넣기(나머지는 빼기)
        sld.eq(snum).addClass("on").siblings().removeClass("on");
        // eq() 메서드 - 컬렉션집합요소의 순번을 선택하는 메서드
        // eq(n) -> n은 0부터 순서를 센다!
        // eq는 sequence 라는 단어에서 온것임

    }); /////////// click /////////////////




}); //////////// jQB /////////////////////
//////////////////////////////////////////