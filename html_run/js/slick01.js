$(function () { 

    $('.visual_slider').slick({
        dots: true,
        autoplay:true,
        autoplaySpeed: 3000,
        PauseOnHover: false,  
    });


    $('.slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        dots: true,
        PauseOnHover: false,        

    });

        $('.slider02').slick({
            slidesToShow: 3,
    });
})