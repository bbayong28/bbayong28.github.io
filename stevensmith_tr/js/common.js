
$(function () {    
    
    $('.mainSlider').slick({
        arrows:false,
        //autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus:false,        
    });

    $('.topSlider').slick({          
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 500,        
        pauseOnHover: false,
        slidesToShow: 6,
        slidesToScroll: 1,        
    });
    
    $('.productSlider').slick({                
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,   
    })
    
    $('.productArrows i:nth-child(1)').on('click', function () {
        $('.productSlider').slick('slickPrev')
    });
    $('.productArrows i:nth-child(2)').on('click', function () {
        $('.productSlider').slick('slickNext')
    });


    $('.etctSlider').slick({                
        arrows:false,
        autoplay: true,
        autoplaySpeed:4000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,   
    })

    $('.etcArrows i:nth-child(1)').on('click', function () {
        $('.etctSlider').slick('slickPrev')
    });
    $('.etcArrows i:nth-child(2)').on('click', function () {
        $('.etctSlider').slick('slickNext')
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

