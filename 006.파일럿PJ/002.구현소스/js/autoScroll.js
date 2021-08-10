// 자동 스크롤 기능 - autoScroll_mobile.js

/// 모바일 여부 코드 //
let mob = 0;//0-모바일 아님, 1-모바일
if($(window).width() < 800) mob = 1;
console.log("모바일여부:"+mob);

///// 전역변수구역 ///////////////////
// 현재 페이지 번호
let pno = 0;
// 전체 페이지 개수(상수로 변경불가!)
const totnum = 5;
// 광스크롤막기(0-허용,1-불허용)
let psts = 0;
/////////////////////////////////////

$(function () { /// jQB ////////////////////////

    /// 모바일일때 body에 스크롤바 생성하기 ///
    // if($(window).width() <= 500){
    //     $("body").css({overflowY:"scroll"});
    // } ///////////// if /////////////////////
    // 테스트 결과 안정적인 기능을 위해 세로스크롤은 없는것으로!

    /* 이벤트 중복발생 막기! */
    // 대상: #top, .indic
    // 막을 이벤트: touchstart, touchend
    // 원리: 이벤트 버블링 막기!(자식이벤트가 부모로 올라가는 현상!)
    // 사용메서드: e.stopPropagation()
    $("#top,.indic").on("touchstart touchend", function (e) {
        e.stopPropagation();
    }); /////////// 터치이벤트 버블링 막기 ///////////

    /* 
        [ 자동스크롤 모바일 구현하기 ]

        1. 모바일 이벤트 처리 : 터치스크린에서 사용하는 이벤트 종류
            1) touchstart - 손가락이 화면에 닿을때 발생
            2) touchend - 손가락이 화면에서 떨어질때 발생
            3) touchmove - 손가락이 화면에 닿은채로 움직일때 발생

        2. 화면터치(클릭) 이벤트 관련 위치값 종류
            1) screenX, screenY : 디바이스 화면을 기준한 x,y좌표
            2) clientX, clientY : 브라우저 화면을 기준한 x,y좌표
                                (단, 스크롤 미포함)
            3) pageX, pageY : 스크롤을 포함한 브라우저화면 기준 x,y좌표

            ※ 모바일 터치스크린 기준으로 위치값은 screenX, screenY를 사용!

        3. 터치(스와이프)방향 알아내기
        - 원리: 처음 터치한 위치에서 나중 터치가 끝난위치를 뺀다.
            작은수 - 큰수 = 음수
            큰수 - 작은수 = 양수
        이런 결과로 볼때 스크롤방향과 매칭해 보면
            음수가 나오면 아랫쪽방향 스와이프 -> 스크롤휠 위로
            양수가 나오면 윗쪽방향 스와이프 -> 스크롤휠 아래로
    */
    //// 터치방향을 위한 변수 ///
    let tcd1, tcd2;
    // tcd1 - 처음 터치된 Y축 위치값
    // tcd2 - 나중 터치끝날때 Y축 위치값

    //// 1. 터치 시작시 화면 터치위치값 변수에 넣기 ///
    // 대상: document
    // 사용위치속성: screenY (페이지 이동이 Y축 이므로!)
    $(document).on("touchstart", function (e) { // e-이벤트전달변수

        // 모바일 터치 위치값 변수에 할당하기
        tcd1 = e.originalEvent.touches[0].screenY;
        //console.log("터치시작:" + tcd1);

        // originalEvent - 모바일 이벤트 관리 객체
        // touches[0] - 최초발생 이벤트 수집 컬렉션
        // changedTouches[0] - 동일이벤트가 변경된 경우 수집 컬렉션
        // screenY - 스크린 Y축 좌표값

    }); /////////// touchstart 이벤트함수 /////////////

    //// 2. 터치 끝날때 화면 터치위치값 변수에 넣기 ///
    // 대상: document
    // 사용위치속성: screenY (페이지 이동이 Y축 이므로!)
    $(document).on("touchend", function (e) { // e-이벤트전달변수

        ////// 광스크롤막기 /////////////
        if (psts) return; //돌아가!
        psts = 1; //불허용상태변경!
        setTimeout(() => {
            psts = 0;
        }, 1200);
        // 1.2초애니시간후 허용상태변경 //

        // 1. 모바일 터치 위치값 변수에 할당하기
        tcd2 = e.originalEvent.changedTouches[0].screenY;
        //console.log("터치끝:" + tcd2);

        // 2. 방향판별하기(델타변수)
        let delta = tcd1 - tcd2;
        //console.log("차이:" + delta);

        ////////////////////////////////////////////////
        ////// 여기서 부터는 마우스 휠 코드와 동일함!//////
        // 단, 양수/음수의 의미는 다르다!

        //////////////////////////////////////////////
        // 3. 스와이프 방향에 따라 페이지번호 증감하기!//
        //////////////////////////////////////////////

        if (delta > 0) { // 양수면 윗방향 스와이프(다음페이지)
            pno++;
            if (pno === totnum) pno = totnum - 1;
            // 마지막페이지에 고정하기!
        } ////// if ///////////
        else { // 음수면 아랫방향 스와이프(이전페이지)
            pno--;
            if (pno === -1) pno = 0;
            // 첫페이지에 고정하기!
        } /////// else ////////

        //console.log("페이지번호:" + pno);

        //////////////////////////////////////////////
        // 3. 이동할 페이지(.page)의 위치값 알아내기 ///
        //////////////////////////////////////////////

        // 방법: .page의 순서로 위치를 알아냄!
        // let pos = $(".page").eq(pno).offset().top;
        // offset().top 은 현재 선택요소의 top위치값

        ////////////////////////////////////////////////////
        // 새로운 페이지 위치값 : 윈도우 높이값 * 페이지순번 //
        let pos = $(window).height() * pno;
        ///////////////////////////////////////////////////

        //console.log("이동위치:" + pos);

        //////////////////////////////////////////////
        // 4. 실제 이동위치로 스크롤 애니메이션 하기 ////
        //////////////////////////////////////////////

        $("html,body").stop().animate({
            scrollTop: pos + "px"
        }, 1200, "easeOutQuint");

        ///////////////////////////////////////////////
        // 5. 페이지번호(pno)에 맞는 GNB 메뉴 변경하기 //
        ///////////////////////////////////////////////
        // 변경대상: .gnb li, .indic li
        $(".gnb li").eq(pno).addClass("on")
            .siblings().removeClass("on");
        $(".indic li").eq(pno).addClass("on")
            .siblings().removeClass("on");
        // 선택된 li 이외의 li형제들 class="on"제거하기




    }); /////////// touchend 이벤트함수 /////////////





    /* 
        [ 자동스크롤 구현! ]

        1. 기능: 마우스휠을 위나 아래로 작동시킬때
            페이지가 위나 아래로 자동으로 애니메이션 되는 기능
        
        2. 이벤트: 마우스휠을 움직일때 발생하는 이벤트는?
            - mousewheel (오리지널 이벤트) -> 파이어폭스 지원안함!
            - wheel (신규이벤트-벤더사의 웹표준이 아직아님!) -> 사파리지원안함!
            - DOMMouseScroll (파이어폭스 전용 휠이벤트)
            -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로
            mousewheel + DOMMouseScroll 을 같이 사용할 것임!

        3. 마우스 휠 이벤트와 함수를 연결하는 방법:
            - on(이벤트명,함수)
            -> on메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
            (참고로 bind(이벤트명,함수) 제이쿼리 버전3 부터 지원중단!)

        4. 마우스휠 이벤트 대상: 보통 document에 적용함

        -> 유의사항!!!
        document, body, window 객체는 막을 수 없다!!!
        - 2019년도에 위의 세가지 중요객체에 대하여 기본기능 막기를
        할수 없도록 브라우저 소스가 업데이트 되었는데 이유는
        모바일에서 에러가 발생하는 문제의 원인으로 지목되어서
        본 3가지 중요객체에 대해서는 preventDefault() 또는
        return false를 사용한 기능막기를 못하도록 하였다!
            
    */

    /////////////// 자동스크롤 구현 ////////////////////
    // 사용메서드: on(이벤트명, 함수) 
    // -> 이벤트를 띄어쓰기로 여러개 쓰면 여러이벤트가 적용됨!
    $(document).on("mousewheel DOMMouseScroll",
        function (e) { //e-이벤트 전달변수

            // 모바일일때 기능막기
            if(mob) return;

            ////// 광스크롤막기 /////////////
            if (psts) return; //돌아가!
            psts = 1; //불허용상태변경!
            setTimeout(() => {
                psts = 0;
            }, 1200);
            // 1.2초애니시간후 허용상태변경 //


            // e.preventDefault();
            // document에 대한 기본기능 막기가 안되므로
            // 스크롤바를 안보이게 overflow:hidden 설정하여
            // 기본 스크롤이 안되도록 코딩하여 대체한다!

            // 마우스휠 이벤트 함수호출확인!
            // //console.log("마우스휠~~~~!");

            // 마우스 휠의 방향에 따라 페이지번호를 증가/감소
            // 할 것이므로 마우스 휠의 방향을 알아내야한다!!!

            //////////////////////////////
            // 1. 마우스휠 방향 알아내기!///
            //////////////////////////////

            // e변수로 들어오는 이벤트전달값으로 알아낸다!
            e = window.event || e;
            // 이벤트 전달값이 window오리저널 이벤트가 유효하면
            // 사용할 수 있도록 보완코드를 작성해야한다!
            // 변수 = 경우1 || 경우2;
            // 변수에 경우1과 경우2 중 true(유효한것)이 먼저할당됨!

            /* 
                [ 마우스휠 방향을 알아내기 위한 값 -> wheelDelta ]
                - 휠델타란? 마우스의 이벤트에 따라 발생하는
                    이벤트 횟수 및 방향, 이동거리 등의 정보를 제공함
                - ie, chrome 브라우저 공용
                - opera 브라우저는 detail을 사용함
            */
            let delta = e.detail ? e.detail : e.wheelDelta;
            // delta변수에 유효한 설정이 적용되어 할당된다!
            // 조건연산자(삼항연산자) -> 비?집:놀이동산;

            //console.log("휠델타정보:" + delta);
            // 방향 테스트 결과: 
            // 마이너스 -> 아랫쪽스크롤
            // 플러스 -> 윗쪽스크롤
            // 예외) 파이어폭스는 반대방향임!!!

            ///////////////////////////////////////////
            ///// 파이어폭스 일때 델타값 반대로 하기 /////
            // 방법:
            // JS의 내장함수 test() 를 사용하여
            // navigator.userAgent -> 현재 브라우저 정보를 읽어옴
            // "Firefox"라는 정보가 있으면 test() 에서 true리턴함
            // 그래서 if문 안으로 들어가서 처리함(반대부호처리!)

            // //console.log("브라우저정보:"+navigator.userAgent);
            // //console.log("정보여부:"+
            // (/Firefox/i.test(navigator.userAgent)));

            /* 
                [ test() 정규식 메서드 ]
                정규식.test(값) -> 값에 정규식 문자가 있으면 true

                [ 간단한 정규식 표현기호 ]
                1. 정규식 내용은 따옴표를 쓰지 않고 슬래쉬를 사용함
                2. 모든 패턴 문자열을 찾을때는 g라는 플래그문자를 씀
                3. 대소문자 구분없이 찾을때는 i라는 플래그문자를 씀
                예) /,/g 
                    -> 모든 콤마를 찾아라!
                    /firefox/i 
                    -> 대소문자 관계없이 "firefox"문자를 찾아라!
            */

            //// 파이어폭스 브라이우저 이면 델타값 부호를 반대로 한다!!!
            if (/Firefox/i.test(navigator.userAgent)) {
                delta = -delta; // 변수앞에 마이너스는 부호반대!
            } ///////// 파이어폭스여부 if문 /////////////


            //////////////////////////////////////////////
            // 2. 마우스휠 방향에 따라 페이지번호 증감하기!//
            //////////////////////////////////////////////

            if (delta < 0) { // -120 아랫방향 스크롤(다음페이지)
                pno++;
                if (pno === totnum) pno = totnum - 1;
                // 마지막페이지에 고정하기!
            } ////// if ///////////
            else { // 120 윗방향 스크롤(이전페이지)
                pno--;
                if (pno === -1) pno = 0;
                // 첫페이지에 고정하기!
            } /////// else ////////

            //console.log("페이지번호:" + pno);

            //////////////////////////////////////////////
            // 3. 이동할 페이지(.page)의 위치값 알아내기 ///
            //////////////////////////////////////////////

            // 방법: .page의 순서로 위치를 알아냄!
            // let pos = $(".page").eq(pno).offset().top;
            // offset().top 은 현재 선택요소의 top위치값

            ////////////////////////////////////////////////////
            // 새로운 페이지 위치값 : 윈도우 높이값 * 페이지순번 //
            let pos = $(window).height() * pno;
            ///////////////////////////////////////////////////

            //console.log("이동위치:" + pos);

            //////////////////////////////////////////////
            // 4. 실제 이동위치로 스크롤 애니메이션 하기 ////
            //////////////////////////////////////////////

            $("html,body").stop().animate({
                scrollTop: pos + "px"
            }, 1200, "easeOutQuint");

            // 페이지 이동과 동시에 showEle함수를 호출! 등장액션!
            showEle();

            ///////////////////////////////////////////////
            // 5. 페이지번호(pno)에 맞는 GNB 메뉴 변경하기 //
            ///////////////////////////////////////////////
            // 변경대상: .gnb li, .indic li
            $(".gnb li").eq(pno).addClass("on")
                .siblings().removeClass("on");
            $(".indic li").eq(pno).addClass("on")
                .siblings().removeClass("on");
            // 선택된 li 이외의 li형제들 class="on"제거하기



        }); //////////// 자동스크롤 /////////////////////////
    ///////////////////////////////////////////////////


}); //////////////// jQB /////////////////////