// 보그 코리아 서브 페이지 JS - sub.js

///// 각 서브별 데이터 셋팅하기 /////
let sinfo = {
    "fashion":{
        "제목":"Fashion",
        "메뉴":["전체","트렌드","아이템","피플","화보"],
        "경로":"fashion",
        "타이틀":[
            "&lt;고양이를 부탁해&gt;의 20주년 기획전",
            "패션계에서 가장 주목받는 신인 디자이너, 자크무스",
            "서울국제여성영화제 장편 경쟁 한국 영화 4편",
            "드라마 &lt;알고 있지만&gt;의 나비가 유행이라고?",
            "홍콩 누아르 영화 주인공으로 변신한 민주",
            "MSG워너비여, 영원하라!"
        ]
    },
    "beauty":{
        "제목":"Beauty",
        "메뉴":["전체","트렌드","아이템","헬스","피플"],
        "경로":"beauty",
        "타이틀":[
            "매실의 놀라운 효능",
            "맥시멀 뷰티의 신세계",
            "브라렛보다 니플 패치?",
            "지금 고쳐야 할 샤워 습관 6",
            "‘급찐살’ 저격! 셀럽들의 비건 식단",
            "팝한 여름 헤어 액세서리 활용법"
        ]
    },
    "living":{
        "제목":"Living",
        "메뉴":["전체","여행","음식","문화","인테리어","키즈","테크"],
        "경로":"living",
        "타이틀":[
            "","","","","",""
        ]
    },
    "people":{
        "제목":"People",
        "메뉴":"없음",
        "경로":"people",
        "타이틀":[
            "","","","","",""
        ]
    },
    "video":{
        "제목":"Video",
        "메뉴":"없음",
        "경로":"video",
        "타이틀":[
            "","","","","",""
        ]
    },
    "runway":{
        "제목":"Runway",
        "메뉴":"없음",
        "경로":"runway",
        "타이틀":[
            "","","","","",""
        ]
    },
    "shopping":{
        "제목":"Shopping",
        "메뉴":["전체","패션","뷰티","리빙"],
        "경로":"shopping",
        "타이틀":[
            "","","","","",""
        ]
    }
};////////// sinfo ////////////////

// Get방식으로 넘어온 값 받기! //////////////////////
let pm = location.href;

if (pm.indexOf("?") === -1) {
    location.href = "index.html"; //첫페이지로 돌아가!
} ///////////////////// if //////////////////////////

// 물음표와 이퀄로 잘라서 값만 가져온다!
pm = pm.split("?")[1].split("=")[1];

console.log(pm);

$(function(){// jQB ///////////////////////////////




}); ////////////// jQB ////////////////////////////






// 모바일여부를 체크하는 변수에 코드발급하기!!!
// mob값이 0이면 DT, 1이면 모바일
let mob = 0;
let chksz = () => {
    if ($(window).width() <= 500) mob = 1;
    else mob = 0;
    console.log("모바일여부:" + mob);
}; //// chksz함수 /////////////
chksz(); //함수실행 

// 화면의 크기가 변경될때 / 모바일 오리엔테이션변경(방향변경)시
// resize() 메서드 - 화면크기가 변할때 사용
$(window).resize(chksz);

$(function () { //////// jQB //////////////////

    //// 햄버거 버튼을 클릭하면 전체메뉴 보이기 ///
    // 이벤트 대상: .hbtn
    // 이벤트 종류: click
    // 변경 대상: .mobx
    // 변경 내용: 슬라이드 되면서 보이기/숨기기(토글)

    let hv = "100vh"; // 높이값을 보이는 화면에 채움!
    let ov = "auto"; // 내용이 넘치면 스크롤 생성(y축)

    $(".hbtn").click(function () {
        //console.log("보여줘!");

        // 1. 변경대상을 슬라이드 다운/업한다!
        $("#mobx").stop().slideToggle(300, "easeOutQuint");

        // 2. #top 전체 박스에 스크롤 생기거나 숨기기
        $("#top").css({
            height: hv, // 최초엔 "100vh"값 들어감
            overflow: ov // 최초엔 "auto"값 들어감
        });

        // 두가지 값이 전환되도록 값 변경하기!
        hv === "100vh" ? hv = "auto" : hv = "100vh";
        ov === "auto" ? ov = "visible" : ov = "auto";
        // 비?집:놀이동산; -> 3항연산자(조건연산자)


    }); ////////////// click /////////////////////////

    //// 검색 버튼을 클릭하면 검색창 보이기 ///
    // 이벤트 대상: .sbtn
    // 이벤트 종류: click
    // 변경 대상: .mos
    // 변경 내용: 슬라이드 되면서 보이기/숨기기(토글)
    $(".sbtn").click(function () {
        //console.log("검색해!");

        // 1. 변경대상을 슬라이드 보이기/숨기기
        $(".mos").stop().slideToggle(300, "easeOutQuint");

    }); /////////// click //////////////////////

    //// 스크롤 액션 대상 변수 ///////
    // 1.위로가기 버튼
    let tbtn = $(".tbtn");
    // 2.위로가기 버튼 등장액션 상태변수
    let tsts = 0; //0-액션전, 1-액션후
    //////////////////////////////////
    // 3.상단영역요소
    let tbx = $("#top");
    // 4.GNB박스 위치값
    let gnbpos = $(".gnb").offset().top;
    console.log("GNB위치값:" + gnbpos);
    // 5.상단영역 클래스 적용여부 상태변수
    let gnbsts = 0; //0-액션전, 1-액션후


    //////////////////////////////////////////////////
    //////////////// 스크롤 액션 //////////////////////
    //////////////////////////////////////////////////
    // 이벤트 종류: scroll
    // 이벤트 대상: window (전체스크롤)
    // 사용 메서드: scroll() 메서드
    $(window).scroll(function () {

        // 1. 스크롤바 위치값-> 제일중요!!!
        let scTop = $(this).scrollTop();
        // console.log("스위:"+scTop);

        // 2. 각 스크롤 액션 처리하기 //////////

        // 2-1. 위로 이동버튼 처리 ////////////
        if (scTop > 300 && tsts === 0) { // 기준값 아래일때

            tsts = 1; //상태값 변경(한번만 실행!)
            // console.log("나야나!");

            // 탑버튼 보이기
            tbtn.fadeIn(300);

        } ////// if /////////////
        else if (scTop <= 300 && tsts === 1) { // 기준값 위일때

            tsts = 0; //상태값 변경(한번만 실행!)
            // console.log("너야너!");

            // 탑버튼 숨기기
            tbtn.fadeOut(300);

        } ////// else if ////////////////

        /////// 모바일이 아닐때만 실행!!! //////
        // 2-2. 상단영역 메뉴처리 //////////////
        // 방법: .gnb메뉴 top위치값을 기준하여 
        // #top에 .on을 줘서 미리셋팅된 디자인을 적용한다!!!
        if (scTop >= gnbpos && gnbsts === 0 && mob === 0) {

            gnbsts = 1; //한번만실행!
            // console.log("바꿔!");

            // 상단영역에 class넣기
            tbx.addClass("on");

        } /////// if /////////////////////
        else if (scTop < gnbpos && gnbsts === 1 && mob === 0) {

            gnbsts = 0; //한번만실행!
            // console.log("복귀!");

            // 상단영역에 class제거
            tbx.removeClass("on");

        } /////// if /////////////////////


    }); ////////////////// scroll ////////////////////
    //////////////////////////////////////////////////

    //// 탑버튼 클릭시 페이지 상단 이동 애니메이션 하기 ///
    tbtn.click(function (e) {

        e.preventDefault(); // 기본이동막기

        // 상단영역class미리제거
        // 이유: 스크롤 애니메이션을 자연스럽게 상단처리
        tbx.removeClass("on");

        // 스크롤 애니메이션 //
        $("html,body").animate({
            scrollTop: "0"
        }, 1000, "easeOutCubic");

    }); ////////// click /////////////


    //// 모바일일때 화면전환(가로/세로)시 
    //// 상단영역 #top에 .on 빼기
    // $(window).resize(function(){
    //     tbx.removeClass("on");
    // });//////////// resize ///////////
    //-> 리사이즈는 모바일에서 스와이프시 작동하는 경우가
    // 많으므로 되도록 사용에 주의해야한다!!!




}); ///////////////// jQB ///////////////////