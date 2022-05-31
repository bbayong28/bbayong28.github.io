$(function () {


    $('.main_slider').on('init reInit afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.main_visual .main_slider figure.xx a').removeClass('active');
        $('.num').text((c ? c + 1 : 1) + "/" + s.slideCount);
        let cur = $('.slick-current');
        cur.addClass('xx').siblings().removeClass('xx');
        setTimeout(function () {
            $('.main_visual .main_slider figure.xx a').addClass('active');
        }, 2000);
    });


    $('.main_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });




})