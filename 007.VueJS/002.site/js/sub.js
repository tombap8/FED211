// 보그코리아 서브페이지 JS - sub.js //

// 파라미터 받기 -> Get방식으로 데이터 받기 //////
let pm = location.href;
// location.href 를 이퀄 오른쪽에 쓰면 url을 읽어옴

// console.log("원본:"+pm);

//////// 물음표로 넘어오는 파라미터 체크하기 ///////
/// 왜 체크하나? 없으면 에러나니까!!!
/// 무엇으로 체크하나? indexOf(문자열) -> 없으면 -1
// 원래 indexOf(문자열)은 찾는 문자열 위치 순번을 리턴함!
if (pm.indexOf("?") === -1) { // 물음표없으면!
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
    // 첫페이지로 돌려보낸다!
} /////////////////// if /////////////////////////

// 파라미터값 가공하기 
// -> ?로 자르고 뒤엣것, =로 자르고 뒤엣것
pm = pm.split("?")[1].split("=")[1];
console.log(pm);




$(function () { ///// jQB /////////////////////////

    let cat = pm;


    let app = new Vue({
        el: '#cont',
        data: {
            items: {},
            message: cat
        },
        mounted: function () {
            axios.get("./js/real.json").then(response => (this.items = response))
        },
        addCls: function () {
            return {
                cls: cat
            }
        }
    })



}); /////////////// jQB ///////////////////////////
///////////////////////////////////////////////////