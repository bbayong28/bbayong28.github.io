$(function () {

    $('.first_slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    });



})



//$(function () {
   // $('h1').hide()
//}) function 으로 감싸줘야 위에 써도 실행됨.


//$('h1').hide() <- 제이쿼리 메소드라고 부름!
//slick 다운받으면 document.querySelector('h1').style.display = 'none'; 이 긴 문장을
//$('h1').hide() 이렇게 간단히 쓰면 실행 됨.
