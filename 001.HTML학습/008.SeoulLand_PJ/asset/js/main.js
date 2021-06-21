// 서울랜드 메인페이지 JS - main.js ///////////


// 제이쿼리 코드블록 1 ///////////////////////
$(function(){ // jQB1 /////////////////////

    // 1. 메인배너 기능구현 ////////
    // 대상1: 슬라이드박스 .slide li
    var sld = $(".slide li");
    // 대상2: 블릿박스 .indic li
    var indic = $(".indic li");
    // 슬라이드 순번변수 (슬라이드순번===블릿순번)
    var snum = 0;

    /*/////////////////////////////////////////
        함수명: goSlide
        기능: 슬라이드 이동 및 블릿변경
    *//////////////////////////////////////////
    // 할당형 익명함수!
    var goSlide = function(){
        // 1.확인
        // console.log("슬라이드함수");

        // 2. 해당순번 li 슬라이드에 클래스 "on"넣기(나머지는 빼기)
        sld.eq(snum).addClass("on").siblings().removeClass("on");
        // eq() 메서드 - 컬렉션집합요소의 순번을 선택하는 메서드
        // eq(n) -> n은 0부터 순서를 센다!
        // eq는 sequence 라는 단어에서 온것임

        // 3. 블릿 순번 이미지 변경하기
        indic.eq(snum) // 해당순번 블릿 li
        .find("img").attr("src","images/ico_pm_55_on.png")
        // find(요소명) 메서드 : 하위자손요소 중 특정요소 찾기
        // attr(속성명,값) : 선택요소의 속성값 변경하기
        .parents("li").siblings() 
        //부모요소중 li로 가서 다른형제 li선택
        // parent() 하나위 직계부모로 이동
        // parents(특정요소) 조상들 중 특정요소로 이동
        .find("img").attr("src","images/ico_pm_55_off.png");

    }; ///////////// goSlide함수 ///////////////
    ////////////////////////////////////////////

    // 광클금지상태변수(버튼클릭시 사용)
    let prot = 0;// 0-허용, 1-불허용


    // 1-1. 오른쪽 버튼 클릭시 다음배너 나오기 /////////
    // 대상: .rb
    $(".rb").click(function(){

        //// 광클금지설정 //////////////////
        if(prot) return;//값이1이면 돌아가!
        prot = 1;//불허용!
        setTimeout(() => {prot = 0;}, 800);
        // 0.8초후 허용! ///////////////////

        // 확인
        console.log("오른쪽이동!");

        // 자동실행 지우기!
        clearAuto();

        // 1. 슬라이드 순번증가 //////////////////////////
        snum++;
        if(snum === sld.length) snum = 0;
        // 한계수체크: 슬라이드 개수와 같아지면 처음으로!
        console.log("슬라이드개수:"+sld.length);
        console.log("슬라이드번호:"+snum);

        // 2. 슬라이드 이동함수 호출!
        goSlide();
        
    }); /////////// click /////////////////

    // 1-2. 왼쪽 버튼 클릭시 이전배너 나오기 /////////////
    // 대상: .lb
    $(".lb").click(function(){

        //// 광클금지설정 //////////////////
        if(prot) return;//값이1이면 돌아가!
        prot = 1;//불허용!
        setTimeout(() => {prot = 0;}, 800);
        // 0.8초후 허용! ///////////////////

        // 확인
        console.log("왼쪽이동!");

        // 자동실행 지우기!
        clearAuto();

        // 1. 슬라이드 순번감소 //////////////////////////
        snum--;
        if(snum === -1) snum = sld.length-1;//개수-1=마지막순번
        // 한계수체크: 슬라이드 개수와 같아지면 처음으로!
        console.log("슬라이드개수:"+sld.length);
        console.log("슬라이드번호:"+snum);

        // 2. 슬라이드 이동함수 호출!
        goSlide();

    }); /////////// click ///////////////////////

    // 1-3. 블릿 li클릭시 해당순번의 슬라이드변경 및 블릿변경하기
    // 대상: .indic li -> 변수 indic에 할당!
    indic.click(function(){

        //// 광클금지설정 //////////////////
        if(prot) return;//값이1이면 돌아가!
        prot = 1;//불허용!
        setTimeout(() => {prot = 0;}, 800);
        // 0.8초후 허용! ///////////////////

        // 자동실행 지우기!
        clearAuto();

        // 1. 클릭된 li순번 확인
        var idx = $(this).index();
        // index() 메서드 - 선택된 요소의 형제들 중 순번을 리턴함
        console.log("블릿li순번:"+idx);

        // 2. 클릭된 순번을 슬라이드 순번변수 snum 넣는다!
        snum = idx;

        // 3. 슬라이드 이동함수 호출!
        goSlide();

    }); /////////// click ///////////////

    // 인터발용 변수
    var autoI;
    /*/////////////////////////////////////
        함수명: autoSlide
        기능: 슬라이드 자동호출 셋팅
    *//////////////////////////////////////
    var autoSlide = function(){
        // 1.확인
        // console.log("자동호출!");

        // 2.인터발셋팅(3초간격)
        // 인터발함수는 변수에 넣어야 지울 수 있으므로 할당함!
        autoI = setInterval(function(){

            // 2-1. 기존snum값 1씩증가
            snum++;

            // 2-2. 한계수 체크(다시 처음으로)
            if(snum===sld.length) snum = 0;

            // 2-3. 슬라이드 함수 호출!
            goSlide();

        },3000); //// 인터발함수 ///////

    }; ///////// autoSlide함수 /////////////
    ////////////////////////////////////////

    // 최초 인터발실행 함수 호출은 할당된 함수 아래에서 함!(중요!)
    autoSlide();

    /// 타임아웃용 변수
    var autoT;
    /*/////////////////////////////////////
        함수명: clearAuto
        기능: 슬라이드 자동호출 인터발지우기
    *//////////////////////////////////////
    var clearAuto = function(){
        // 1. 확인
        console.log("인터발지우기!");

        // 2. 인터발지우기
        clearInterval(autoI);
        // clearInterval(인터발할당변수) - 인터발호출 멈추기!

        // 3. 실행쓰나미 방지를 위해 타임아웃 지우기!
        clearTimeout(autoT);

        // 4. 일정시간 후 다시 인터발호출하기!
        // setTimeout의 실행쓰나미방지를 위해 변수에 할당함!
        // 실행전에 지워서 항상 마지막 하나만 남게해야한다!!!
        autoT = setTimeout(autoSlide,5000);//5초후


    }; ///////// clearAuto함수 /////////////
    ////////////////////////////////////////


}); //////////// jQB1 /////////////////////
//////////////////////////////////////////

// 제이쿼리 코드블록2 ///////////////////////
$(function(){
    // 2. 사이드 배너 기능구현하기 //////
    
    // 대상: 이동슬라이드 - .halban ul
    let sld = $(".halban ul");

    // 광클금지변수
    let prot = 0;//0-허용,1-불허용

    /////////////////////////////////////////////////////////
    // 슬라이드 자동넘김 기능과 아래로 이동버튼 클릭시 기능이////
    // 동일 하므로 이를 익명함수로 만들어서 같이 사용한다!///////
    // 버튼 클릭시에는 자동슬라이드를 지워야 해서 코드를 분리함//
    /////////////////////////////////////////////////////////

    /* //////////////////////////////////////////////
        함수명: goSlide
        기능: 사이드배너 슬라이드 아래로 이동하기
    *///////////////////////////////////////////////
    let goSlide = ()=>{

        // 1. 호출확인
        console.log("사이드배너함수!");

        // 2.이동슬라이드 위로 이동하기
        // 이동원리: 
        // (1)대상의 top값을 1/4크기인 -25%를 
        //      설정하여 애니메이션 이동한다.
        // (2)이동후 슬라이드 첫번째 li를 맨뒤로 이동한다.(append)
        // (3) 맨뒤 이동시 top값을 다시 0으로 변경함!
        sld.animate({
            top:"-25%"
        },400,function(){//애니후
            // 첫번째 li선택
            let first = sld.children("li:first");
            // 첫번째 li 맨뒤로 이동 + top값 0
            sld.append(first).css({top:"0"});

        }); ////// animate ////////////


    }; ////////////// goSlide함수 //////////////////
    ////////////////////////////////////////////////

    // 인터발용변수
    let autoI;

    /*/////////////////////////////////////////////
        함수명: autoSlide
        기능: 슬라이드 이동함수 인터발호출
    *//////////////////////////////////////////////
    let autoSlide = ()=>{

        // 1. 호출확인
        console.log("인터발호출!");

        // 2. 사이드배너 슬라이드 함수 호출(2초간격 인터발)
        autoI = setInterval(goSlide,2000);
        // 전달값이 없다면 함수명 쓰는곳에 함수이름만 쓴다!

    }; //////////// autoSlide함수 /////////////////
    ///////////////////////////////////////////////

    // 할당형 익명함수의 최초호출은 반드시 함수 코드 아래에서 해야함!
    // 자동슬라이드함수 호출!
    autoSlide();

    // 타임아웃용변수
    let autoT;

    /*/////////////////////////////////////////////////////
        함수명: clearAuto
        기능: 인터발함수 지우고 일정시간뒤 다시 인터발호출하기
    *//////////////////////////////////////////////////////
    let clearAuto = ()=>{

        // 1. 호출확인
        console.log("인터발지우기!");

        // 2. 인터발지우기 + 타임아웃지우기(실행쓰나미방지!)
        clearInterval(autoI);//인터발지움
        clearTimeout(autoT);//타임아웃지움

        // 3. 일정시간 뒤 인터발 재호출하기!
        autoT = setTimeout(autoSlide,5000);
        // 5초후 자동슬라이드 함수 호출!
        // 위의 2번에서 이 셋팅을 담은 autoT 변수를 지워야
        // 호출한 만큼 셋팅되어 실행되는 "실행쓰나미"를
        // 방지할 수 있다!(즉, 맨 마지막 하나만 남음)

    }; //////////////// clearAuto함수 //////////////////////
    ////////////////////////////////////////////////////////



    // 2-1. 아래로 이동버튼 클릭시 : .dwb
    $(".dwb").click(function(){

        /////////// 광클금지 ///////////
        if(prot) return;//돌아가!
        prot = 1;//불허용변경!
        setTimeout(()=>{prot=0;},400);
        ////// 0.4초후 허용으로변경 ////

        // 1.호출여부
        console.log("아래로!");

        // 2. 자동호출 지우기
        clearAuto();
        
        // 3.슬라이드 이동함수 호출
        goSlide();

    });/////////// click ////////////////

    // 2-2. 위로 이동버튼 클릭시 : .upb
    $(".upb").click(function(){

        /////////// 광클금지 ///////////
        if(prot) return;//돌아가!
        prot = 1;//불허용변경!
        setTimeout(()=>{prot=0;},400);
        ////// 0.4초후 허용으로변경 ////

        // 1. 호출여부
        console.log("위로이동!");

        // 2. 자동호출 지우기
        clearAuto();

        // 3. 이동슬라이드 아래로 이동하기
        // 이동원리: 
        // (1) 맨뒤 li요소를 맨앞으로 이동
        // (2) 동시에 top값 -25%로 설정
        // (3) top값을 0으로 애니메이션하기

        // 마지막 li 선택
        let last = sld.children("li:last");
        // 마지막 li 맨앞으로 이동(prepend) 
        // + top값 -25%
        // + top값 0으로 애니메이션하기
        sld.prepend(last).css({top:"-25%"}).animate({top:"0"},400);

    });//////////// click ///////////////






});/////////// jQB2 ////////////////////////
////////////////////////////////////////////