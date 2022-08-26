window.onload = function () {
    AOS.init({
        duration: 800,
        /* disable: window.innerWidth < 768, */
    });
}


$(function () {
  var swiper = new Swiper(".mainSlider", {
    spaceBetween: 100,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 1,// 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


  var mySwiper = new Swiper('.otherSlider', {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },  
     breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
       },
      300: {        
      centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });













});