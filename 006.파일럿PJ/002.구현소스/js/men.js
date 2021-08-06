// 남자패션페이지 JS - men.js

// 페이지번호(컨텐츠의 위치를 페이지로 생각함!)
let pno = 0;

// 남성 신상품 정보
let sinsang = {
  "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG^99,000원",
  "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
  "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
  "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
  "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
  "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
  "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
  "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
  "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
};

$(function () { /// jQB ////////////////////////////

  // 메뉴 a요소 기본이동 막기!
  $(".gnb a,.indic a").click(function (e) {
    e.preventDefault();
}); ///////////// click ////////////////

//// GNB메뉴 클릭시 해당 페이지 위치로 이동 애니메이션
// 이벤트 대상: .gnb li + .indic li
// 변경 대상: html,body
$(".gnb li,.indic li").click(function (e) {

   // 0. 클릭된 li순번 구해오기
   let idx = $(this).index();
   //console.log("순번:" + idx);

    // 1. 하위a요소의 href값 읽어오기
    let idnm = $("a", this).attr("href");
    //console.log("href값:" + idnm);

    // 2. 아이디값에 해당하위 top값 위치구하기
    // top값을 구해서 스크롤 애니메이션 이동에 사용함!
    let pos = $(idnm).offset().top;
    // offset() 메서드 : 요소의 기본 셋팅 정보를 리턴함
    // - top,left,width,height 등 을 알수 있다!

    console.log("위치값:" + pos);


    // 3. 스크롤 애니메이션으로 페이지 이동하기
    // 세로스크롤 이동속성: scrollTop
    // 참고: 가로스크롤 이동속성: scrollLeft
    // 스크롤 이동대상: html,body
    // -> 범용브라우저에서 사용하는 스크롤대상
    $("html,body").animate({
        scrollTop: pos + "px"
    }, 1200, "easeOutQuint"); //// animate /////

    
    // 4. 클릭된 li요소에 class="on" 넣기
    $(".gnb li").eq(idx).addClass("on")
    .siblings().removeClass("on");
    $(".indic li").eq(idx).addClass("on")
    .siblings().removeClass("on");
    //다른 형제 li들 class="on" 지움
    
    // 6. li순번과 pno와 일치하기! /////////////////////
    pno = idx;
    //console.log("페이지번호:" + pno);
    

}); ///////////// click ///////////////



  /// 부드러운 스크롤 호출!(제이쿼리 아님!)
  startSS();

  /////////////////////////////////////
  // 배너에 스와이퍼 플러그인 적용하기 /// 
  /////////////////////////////////////

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      // disableOnInteraction 
      // - 건드린 후 멈춤 true / 다시 작동은 false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); //////// swiper ///////////////


  /// 스크롤 등장 플러그인 적용 : 스크롤리빌 ////
  $.fn.scrollReveal();

  ////////////////////////////////////////////////
  //////////////// 신상품 움직이기 ////////////////
  ////////////////////////////////////////////////
  // 움직일 대상: .flist
  let flist = $(".flist");
  // 위치값변수
  let lpos = 0;
  // 재귀호출상태값 변수
  let cbsts = 1; // 1-호출가능, 0-불가능

  // 신상품 움직이기 함수 ////////////////
  let moveList = () => {

    // 1. 위치값 감소하기 /////
    lpos--;
    // console.log("위치값:"+lpos);

    // 2. 위치값 적용하기 //////
    flist.css({
      left: lpos + "px"
    }); ////// css ////////////

    // 3. 한계값 초기화하기 
    //    + 첫번째 li 맨뒤로 보내기 + left값 0만들기
    if (lpos < -300) {

      // 3-1.한계값 초기화!
      lpos = 0;

      // 3-2.첫번째 li 맨뒤로 보내기
      flist
        .append(flist.find("li").first())
        .css({
          left: "0"
        }); //// css ///

    } /////////// if문 /////////////

    // 4. 재귀호출하기 ///////////
    if (cbsts) setTimeout(moveList, 40);


  }; //////// moveList 함수 /////////////

  // 이동함수 최초호출
  // moveList();

  // .flowbx에 마우스 오버시 멈추기/ 아웃시 다시작동하기
  $(".flowbx").hover(
    function () { // over
      cbsts = 0; // 콜백상태값 0
    },
    function () { // out
      cbsts = 1; // 콜백상태값 1
      moveList(); //함수 재호출!
    }); /////////// hover /////////

  ////////////////////////////////////////////////////////
  ////// 신상품 리스트 li에 마우스 오버시 정보보이기 ////////
  ////////////////////////////////////////////////////////
  // 대상: .flist li
  // 정보구분법: li의 클래스명으로 구분하여 sinsang객체로부터
  //            정보를 가져와서 html을 만들어서 보이게한다!
  ////////////////////////////////////////////////////////
  $(".flist li").hover(
    function () { // over ////////////////////

      // 1. 클래스 명 알아내기
      let cls = $(this).attr("class");

      // 2. 클래스명에 의한 신상정보 가져오기
      let ginfo = sinsang[cls];
      // console.log(ginfo);

      // 3. 상품정보박스 만들고 나타나기
      $(this).append('<div class="ibox"></div>');
      // 상품정보넣기
      $(".ibox").html(ginfo.replace(/\^/g, "<br>"))
        // replace로 기존 특수기호^를 br태그로 모두변경함(정규식)
        .animate({
          top: "105%",
          opacity: 1
        }, 300, "easeOutCirc");

    }, /////////// over //////////////////
    function () { // out ///////////////////
      // .ibox지우기
      $(".ibox").remove();
    }); /////////// hover ///////////////////////////

  // 신상최초호출여부
  let nacall = 1; //1-호출전, 0-호출후

  // 윈도우 높이값의 1/3
  let winH = $(window).height() / 3;
  console.log("윈도우높이:" + winH);

  ////////////////////////////////////////////////
  /////// 윈도우 스크롤시 위치값에 따른 액션주기 ////
  // 스크롤위치변수
  let scTop;
  ////////////////////////////////////////////////
  $(window).scroll(function () {
    // 1. 스크롤 위치값
    scTop = $(this).scrollTop();
    // console.log("스위:" + scTop);

    // 2. 스크롤 액션
    // 2-1. 첫페이지 윈도우 높이값의 2/3지점 통과시
    // -> 신상품 리스트 이동함수 최초호출하기!(한번만호출)
    if (scTop > winH * 2 && scTop < winH * 4 && nacall) {
      console.log("신상호출처음!");
      //한번만호출 상태변경
      nacall = 0; 

      // 콜백상태 가능상태로 변경
      cbsts = 1;
      // 이동함수 최초호출
      moveList();

    } ////////// if문 신상이동호출 ///////
    else if((scTop < winH * 2 || scTop > winH * 4) && !nacall){

      console.log("신상호출멈춤처음!");
      //한번만호출 상태변경
      nacall = 1; 

      // 콜백상태값 변경하여 멈추기!
      cbsts = 0; // 콜백상태값 0


    } /////////// else if문 신상이동 멈춤 /////

  }); /////////////// scroll /////////////////////
  ////////////////////////////////////////////////



}); ///////////// jQB ////////////////////////////