// 남자패션페이지 JS - men.js

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
  moveList();

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
      function(){ // over ////////////////////

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
      function(){ // out ///////////////////
          // .ibox지우기
          $(".ibox").remove();
      }); /////////// hover ///////////////////////////



}); ///////////// jQB ////////////////////////////