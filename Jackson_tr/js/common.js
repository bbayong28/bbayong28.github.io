window.onload = function () {
    AOS.init({
        duration: 800,
        /* disable: window.innerWidth < 768, */
    });
}

$(function () {
    
    $('.m__open').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');  
    });
    
    $('.mainSlider').slick({
        arrows:false,
        //autoplay: true,
        pauseOnHover: false,
        pauseOnFocus:false,   
        dots: true,
            customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            if (i=='0'){
                i = "01 - ACRE ";
            } else if (i=='1'){
                i = "02 - Newen ";
            }else if (i=='2'){
                i = "03 - BOHEA";
            }else if (i=='3'){
                i = "04 - Po.oak";
            }else if (i=='4'){
                i = "05 - LEBEIGE";
            }
            return '<a class="dot">'+i+'</a>';
        },
    });


    $('.productSlider').slick({
        arrows:false,
        //autoplay: true,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false, 
    });

    /* $('a').on('click', function (e) {
        e.preventDefault();
        console.log($(this.hash).offset().top);
        var hash = $(this.hash).offset().top;
        $('html,body').animate({ scrollTop: hash }, 300)
    });  밑에 탭이 안먹음
    */


    $('.tabMenu>li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.shopContent>li').removeClass('on');
        $('.shopContent>li').eq(idx).addClass('on');
        $('.tabMenu>li').removeClass('on');
        $(this).parent().addClass('on');
    })

    $('.project_slider').slick({
        arrows: false,
        dots: false,
        centerMode: true,  
        centerPadding: '250px',
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

    $('.businessArrow i:nth-child(1)').on('click', function () {
        $('.project_slider').slick('slickPrev')
    });

    $('.businessArrow i:nth-child(2)').on('click', function () {
        $('.project_slider').slick('slickNext')
    });
    


    const tab_menu = $('.interiorSlide figure .tab_menu li');
    const tab_content = $('.right .tab_content > li');
    //tab_menu
    $(tab_menu).on('click', function () { 
        var idx = $(this).index();
        console.log(idx);
        $(this).addClass('active').siblings().removeClass('active').closest('figure').find(tab_content).eq(idx).addClass('on').siblings('li').removeClass('on');
        return false;
    });
    var swiper = new Swiper(".interiorSlide", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },    
        touchRatio: 0,
        noSwiping: true,
        autoplay:false,        
        loop: true,
        breakpoints : {
            768: {
                touchRatio:1,
                noSwiping: false,
            }
        }
        
    });
/*     swiper.on('transitionEnd', function () {
        if (swiper.realIndex == 0) { 
            $('.move_first').show();
        } else {
             $('.move_second').show();
         }
            console.log('now index :::', swiper.realIndex);
    });
 */
        
    $('.tab_menu li span').on('click', function () { 
        var idx = $(this).index();
        console.log(idx);
        $(this).addClass('active').siblings().removeClass('active').closest('figure').find('.tab_menu li span').eq(idx).addClass('active').siblings('li').removeClass('active');
        return false;        
    });
     

    $('.product_slide2').slick({  
        arrows:false,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 1,
        pauseOnHover: false,
        pauseOnFocus: false,  
        
    })


    $('.reviewArrow i:nth-child(1)').on('click', function () {
        $('.product_slide2').slick('slickPrev')
    });

    $('.reviewArrow i:nth-child(2)').on('click', function () {
        $('.product_slide2').slick('slickNext')
    });

    //$('h2').each(function () { 
    //    console.log(this);
    //    const span_w = $(this).find('.tit').innerWidth();
    //    const real_bor = 'calc(100% - ' + (span_w + 15) + 'px)';
    //    $(this).find('.tit').siblings('.border_span').css({
    //    width: real_bor,
    //    color: 'red'
    //    });
    //    //console.log(span_w);
    //});
    //각 섹션마다 h2 span span 다른 비율로 줄때  
    /*
    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 400)
    });
    
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(350);
        } else {
            $('.toTop').fadeOut(1000);
        }
        if (sct > 300) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    }); */

})
