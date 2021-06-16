// 서울랜드 공통 JS - common.js //////////

/*//////////////////////////////////////////
    함수명: showGNB
    기능: .gnbbx에 클래스 on을 넣거나 빼준다
*/ //////////////////////////////////////////
function showGNB(gubun) {
    // gubun-오버/아웃시 구분값 전달변수(1-오버시/0-아웃시)
    // 1. 함수호출확인
    // console.log("GNB배경보여!" + gubun);

    // 2. 변경대상: .gnbbx (GNB배경박스)
    var tg = document
        .getElementsByClassName("gnbbx").item(0);
    // 클래스를 불러올땐 반드시 순번 item(순번)을 써야함!

    // 3. 변경내용: 
    // 대상에 클래스 "on"을 오버시엔 넣고 아웃시엔 뺀다!

    if (gubun) tg.classList.add("on");
    // if(gubnu===1) 1값은 true이므로 안써도됨!
    // if문의 실행문이 하나일 경우 중괄호{} 생략가능!

    else tg.classList.remove("on");
    // else는 if조건이 아닌경우임. 지금은 gubun값이 0인경우

    // if문 없이 클래스"on"이 없으면 넣고 있으면 빼는 
    // toggle메서드 사용할 수 있음!
    //tg.classList.toggle("on");

    /* 
        [ JS에서 클래스 넣고 빼기 메서드 ]
        classList 객체
        1) add(클래스명) : 클래스넣기
        2) remove(클래스명) : 클래스빼기
        3) toggle(클래스명) : 없으면 넣고 있으면 뺌
    */

} //////////// showGNB 함수 //////////////////
//////////////////////////////////////////////