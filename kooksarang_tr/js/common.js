window.onload = function () {
    AOS.init({
        duration: 600,
        /* disable: window.innerWidth < 768, */
    });
}

$(function () {

    $('.m__open').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });


     $('.gnb>ul>li>a').on('click', function (event) {
         if ($(window).width() < 769) {
             event.preventDefault();
             $('.smenu').hide();
             $(this).next().show();
             //$(this).next().slideToggle();
         }
 
     });


    $(window).on('resize', function () {
        $('.smenu').removeAttr('style');
        
    })

    
    $('.mainSlider').slick({
        arrows: false,
        //autoplay: true,
        pauseOnHover: false,
        pauseOnFocus:false,  
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.tabMenu>li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.kind>li').removeClass('on');
        $('.kind>li').eq(idx).addClass('on');
        $('.tabMenu>li').removeClass('on');
        $(this).parent().addClass('on');
    })

    
    $('.jesaSlider').slick({
        arrows: false,
        //autoplay: true,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
    });

    $('.jesaArrow i:nth-child(1)').on('click', function () {
        $('.jesaSlider').slick('slickPrev')
    });

    $('.jesaArrow i:nth-child(2)').on('click', function () {
        $('.jesaSlider').slick('slickNext')
    });

})