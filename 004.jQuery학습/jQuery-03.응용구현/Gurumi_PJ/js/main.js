// 구르미 갤러리 JS - main.js

$(function () { //////////// jQB //////////////////////////

    // 변경대상: .gbx
    let gbx = $(".gbx");

    // 광클금지변수
    let prot = 0;// 1-불허용, 0-허용

    // 오른쪽 이동버튼 기능을 함수로 만들고 호출
    // 왜? 자동호출도 같은 기능이므로!!!
    let autoSlide = () => {
        // 첫번째 요소를 잘라서 맨뒤로 보냄
        gbx.append(gbx.find("img").first());
    }; ///////// autoSlide함수 ////////////////

    /// 오른쪽 이동버튼 클릭시 ////////
    $(".rb").click(function () {

        // 광클금지 //////
        if(prot) return;
        prot = 1;
        setTimeout(() => {
            prot = 0;//해제
        }, 400);

        // 이동함수 호출
        autoSlide();
    }); ///////////// click /////////////

    /// 왼쪽 이동버튼 클릭시 /////////
    $(".lb").click(function () {
        
        // 광클금지 //////
        if(prot) return;
        prot = 1;
        setTimeout(() => {
            prot = 0;//해제
        }, 400);

        // 마지막 요소를 잘라서 맨앞으로 보냄
        gbx.prepend(gbx.find("img").last());
    }); ///////////// click ////////////////




}); ////////////////////// jQB /////////////////////////