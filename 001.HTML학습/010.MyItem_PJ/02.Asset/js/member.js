// 마이아이템 회원가입 페이지 JS - member.js

$(function () { //// jQB ///////////////////////////////////

    /* 
        [ 입력폼의 유효성 검사 ]
        - 검사원리 : 
        입력창에 클릭 또는 탭하여 입력 가능상태(커서가 깜박이는 상태)를
        포커스 상태라고 함. 이벤트로는 focus 이벤트임!
        이 포커스 상태에서 다른 부분을 클릭(탭)되면 포커스가 풀리게됨
        이 상태를 블러(blur)상태로고 함!
        이렇게 이벤트가 블러로 발생할때 유효성 검사를 시행함!
        - 이벤트 대상선정: 입력요소 중 input type이 text,password
            input[type=text],input[type=password]
            (유의사항: type=text인요소 중 아이디가 email2는 검사에서 제외함!)
            제외하기 위한 선택자 : input[type=text][id!=email2]
        - 제이쿼리 사용 메서드 : blur() 메서드
    */
    $("input[type=text][id!=email2],input[type=password]")
        .blur(function () {

            // 1. 블러가 발생한 아이디 알아오기
            let cid = $(this).attr("id");

            // 2. 입력된 값 알아오기 : val() 메서드
            let cv;
            // trim() 메서드 : 앞뒤공백제거+공백만 있어도 제거
            if (cid === "mnm") cv = $(this).val().trim();
            // 이름만 앞뒤공백만제거 -> trim() -> 내장함수
            else cv = groSpace($(this).val());
            // 나머지는 모든공백제거 -> groSpace() -> 구현함수

            // 공백 제거된 값을 다시 입력항목에 넣기!-> 서비스!
            $(this).val(cv);

            // console.log("블러!" + cid + ":" + cv);

            // 3. 빈값일 경우 "필수입력" 메시지 띄우기!!!
            if (cv === "") {
                $(this).siblings(".msg")
                .text("필수입력!")
                .removeClass("on");// 글자색 변경 제거
            } //////////// if문 : 빈값일때 ///////////////

            // 4. 아이디일때 검사하기 /////////////////////
            else if(cid === "mid") {
                // 유효성 검사결과
                let res = vReg(cv,cid);
                console.log("검사결과:"+res);
                
                // 결과가 false일 경우 메시지 띄우기
                if(!res){ // !(NOT연산자)로 결과 반대
                    $(this).siblings(".msg")
                    .text("영문자로 시작하는 6~20글자 영문자/숫자")
                    .removeClass("on");//글자색 변경 제거
                } /////////// if문 : 결과 false ////////
                else{
                    $(this).siblings(".msg")
                    .text("훌륭한 아이디네요~!")
                    .addClass("on");//글자색 변경 클래스
                } ////////// else문 : 결과 true ////////

            } /////////// else if문 : 아이디일때 //////////

            // 5. 비밀번호일때 검사하기 /////////////////////
            else if(cid === "mpw") {
                // 유효성 검사결과
                let res = vReg(cv,cid);
                console.log("검사결과:"+res);

                // 결과가 false일 경우 메시지 띄우기
                if(!res){ // !(NOT연산자)로 결과 반대
                    $(this).siblings(".msg")
                    .text("특수문자,문자,숫자포함 형태의 5~15자리");
                } /////////// if문 : 결과 false ////////
                else{ // 통과시 내용비우기 - empty()
                    $(this).siblings(".msg").empty();
                } ////////// else문 : 결과 true ////////

            } //////////// else if문 : 비밀번호일때 /////////

            // 6. 비밀번호확인 검사하기 /////////////////////
            else if(cid === "mpw2") {

                // 비밀번호입력값과 불일치하면 메시지 출력
                if(cv !== $("#mpw").val()){ 
                    $(this).siblings(".msg")
                    .text("비밀번호가 일치하지 않습니다!");
                } /////////// if문 : 결과 false ////////
                else{ // 통과시 내용비우기 - empty()
                    $(this).siblings(".msg").empty();
                } ////////// else문 : 결과 true ////////

            } //////////// else if문 : 비밀번호확인일때 /////////

            // 7. 별도의 검사가 필요없는 경우 빈값 메시지 지우기 ///
            else {
                $(this).siblings(".msg").empty();
            } ///////////// else문 : 빈값이 아닐때 ///////////////


        }); ////////// 블러 이벤트 함수 /////////////////////////
    ////////////////////////////////////////////////////////



}); ////////////// jQB //////////////////////////////////////
/////////////////////////////////////////////////////////////

/*//////////////////////////////////////////////////////
    함수명: groSpace
    기능: 문자의 모든 공백을 제거하여 리턴함
*/ //////////////////////////////////////////////////////
function groSpace(val) { // val - 전달변수(처리할값)
    // 정규식 문법 - 슬래쉬 사이에 표현함
    // \s 스페이스를 의미, g - 전역플래그(모두찾음)
    let newval = val.replace(/\s/g, "");
    return newval; // 호출한 곳으로 값을 가져감!
} ////////////// groSpace함수 ///////////////////////////
/////////////////////////////////////////////////////////

/*////////////////////////////////////////////////////////
    함수명: vReg
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/////////////////////////////////////////////////////////
function vReg(val, cid){
    // val - 검사할값, cid - 처리구분아이디
    // console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;
    
    // 검사할 아이디에 따라 정규식을 변경함
    switch(cid){
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val);//호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////