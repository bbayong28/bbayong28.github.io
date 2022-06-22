$(function () {
    
    //20220620 shin topBanner
    $('.topBanner i').on('click', function(){
        $('.topBanner').slideUp();
    })

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow i').removeClass('on')
        if (c === 1) {
            $('.mainArrow i').addClass('on')
        }
        //if (c) {
        //    c = c + 1;
        //} else {
        //    c = 1;                
        //}
        $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
        //console.log(s)치고 콘솔에서 slideCount 확인      
       
    });

    $('.mainSlider').slick({
        arrows:false,
        //autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus:false,        
    });

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });


    $('#utb').YTPlayer({
        videoURL: 'https://youtu.be/dS9x5Ws67wI',
        containment: '.utb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible:true,

    });

    $('.utb .zoom').on('click', function (e) {
        e.preventDefault();
        $('#utb').YTPFullscreen();
    })


})