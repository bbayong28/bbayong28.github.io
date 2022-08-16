$(function () {

    function closeBanner() {
        $('.TopBanner').slideToggle();  // 제이쿼리
        //$('.TopBanner').toggleClass('on');
        //document.querySelector('.TopBanner').classList.toggle('on')  // 생자스
    }
    $('.TopBanner i').on('click', closeBanner);

    //  const,var,let closeBanner = () => {
    //      //$('.TopBanner i').toggleClass('on');  // 제이쿼리
    //      document.querySelector('.TopBanner').classList.toggle('on')  // 생자스
    //  }
    //  $('.TopBanner i').on('click', closeBanner);
    
    //$('.TopBanner i').on('click', function () {
    //    $('.TopBanner').hide();  //제이쿼리 메소드
    //})

    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        cssEsing: 'linear'
    });

    $('.ProductSlider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            }
        ]
    });

})