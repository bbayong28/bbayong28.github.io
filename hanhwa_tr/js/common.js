$(function () {
    
    
    $('#header').mouseover(function() {
        $(this).addClass('on');
    });
    $('#header').mouseleave(function() {
        $(this).removeClass('on')        
        var sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on');
        }
    });

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow img').removeClass('on')
        if (c === 1) {
            $('.mainArrow img').addClass('on')
        }       
    });
    
    $('.mainSlider').slick({
        arrows:false,
        //autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus:false,        
    });
    
    $('.mainArrow img:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });
    $('.mainArrow img:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });


    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 400)
    });
    

    /* $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        console.log(sct);
    }); 이까지하면 스크롤 숫자 console에 찍힘 */

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

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            //$('.gnb>ul>li>a').next().hide();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });


    $('#fl').on('change', function () {
        console.log($(this), $(this).val())
        var lnk = $(this).val();
        //lnk && window.open(lnk);
        if (lnk) {
            window.open(lnk);
        }
    });

})

