// 메인 JS - main.js 
console.log("연결확인!!!");

////////////////////////////
/// 슬라이드 기능구현하기 ///
///////////////////////////

/// 일정시간간격 호출하기 ///
// setInterval(함수,시간) -> 시간은 1/1000초
// 페이드 효과 넘기기

// 슬라이드 순번변수
var snum = 0;

setInterval(function(){

    // 0. 슬라이드 순번 증가하기!
    snum++;
    if(snum===3) snum=0;
    //한계수에서 처음으로!

    // 1. 호출여부확인
    console.log("인터발!!!"+snum);

    // 2. 대상선정: .slide li
    var tg = document.querySelectorAll(".slide li");

    // 3. 대상모두 class="on" 제거하기
    for(var i=0; i<3; i++){
        tg[i].classList.remove("on");
    } //////// for //////////////////

    // 4. 해당순번만 class="on" 주기!
    tg[snum].classList.add("on");

},3000);// 인터발함수 //////////////
///////////////////////////////////
