// document.querySelector('h1').style.display = 'none';
window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('h1').style.display = 'none';
}) 

/*window.onload = function () {
    var a = document.querySelector('h1');
    a.style.display = 'none';
}*/

//head 안에 script 쓰더라도 구현되게 하는방법
//1. 자바스크립트안에 window.addEventListener('DOMContentLoaded', function () { })쓰기!!!!  DOMContentLoaded가 다 실행 됐을 때 적용 됨.
//2. head 안 script 연결에 defer 쓰기
