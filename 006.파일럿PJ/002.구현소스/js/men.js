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
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }); //////// swiper ///////////////

}); ///////////// jQB ////////////////////////////