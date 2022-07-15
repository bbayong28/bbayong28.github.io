$(function () {
    
    
    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');  
    });
    
    $('.mainSlider').slick({
        arrows:false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus:false,        
    });

    $('.productSlider').slick({
        arrows:false,
        autoplay: true,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false,   
        dots:true,   
    });

    $('.tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.tab_content>li').removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on');
        $('.tab_menu>li').removeClass('on');
        $(this).parent().addClass('on');

    }) 

    $('.tab_content .product_slider').slick({  
        arrows:false,
        autoplay: true,
        slidesToShow: 3,
        pauseOnHover: false,
        pauseOnFocus: false,    
    })

    $('.tabArrow i:nth-child(1)').on('click', function () {
        $('.product_slider').slick('slickPrev')
    });
    $('.tabArrow i:nth-child(2)').on('click', function () {
        $('.product_slider').slick('slickNext')
    });

    $('.etcSlide').slick({
        arrows:false,
        autoplay: true,
        slidesToShow: 2,
        pauseOnHover: false,
        pauseOnFocus: false,           
        slidesToScroll: 2,          
        autoplaySpeed: 2000,        
        asNavFor: '.etcSlideR',
    }); 
    
    $('.etcSlideR').slick({
        arrows:false,
        autoplay: true,
        slidesToShow: 1,
        pauseOnHover: false,
        pauseOnFocus: false,           
        slidesToScroll: 1,          
        autoplaySpeed: 2000,        
        asNavFor: '.etcSlide',
    });
    

    $('.etcSlideArrow i:nth-child(1)').on('click', function () {
        $('.etcSlide').slick('slickPrev')
    });

    $('.etcSlideArrow i:nth-child(2)').on('click', function () {
        $('.etcSlide').slick('slickNext')
    });    
   

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
    });

})

