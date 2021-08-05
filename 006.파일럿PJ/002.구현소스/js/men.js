// 남자패션페이지 JS - men.js

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

      // 신상품 움직이기 함수 ////////////////
      let moveList = () => {

        // 1. 위치값 감소하기 /////
        lpos--;
        console.log("위치값:"+lpos);

        // 2. 위치값 적용하기 //////
        flist.css({
          left: lpos + "px"
        }); ////// css ////////////

        // 3. 한계값 초기화하기 
        //    + 첫번째 li 맨뒤로 보내기 + left값 0만들기
        if(lpos < -250){ 

          // 3-1.한계값 초기화!
          lpos = 0;

          // 3-2.첫번째 li 맨뒤로 보내기
          flist
          .append(flist.find("li").first())
          .css({left:"0"});

        } /////////// if문 /////////////
        
        // 4. 재귀호출하기 ///////////
        setTimeout(moveList, 40);


      }; //////// moveList 함수 /////////////

      // 이동함수 최초호출
      moveList();


}); ///////////// jQB ////////////////////////////