//$(function(){})는 제이쿼리 문법
//window.addEventListener('DOMContentLoaded', () => {}) 는 바닐라 자스 문법  addEventListener는 제이쿼리의 .on 과 같음
//H1.innerHTML = `나는 더 삐뚫어질거야...????`   줄바꿈 안됨
//H1.innerText = `나는 더 삐뚫어질거야...????`   줄바꿈 가능
//element.innerText;  이 속성은 element 안의 text 값들만을 가져옵니다.
//element.innerHTML; innerText와는 달리 innerHTML은 element 안의 HTML이나 XML을 가져옵니다
//H1.addEventListener('click', (e) => {
//    H1.style.color = `blue`
//})
//H1.addEventListener('click', e => {
//    e.currentTarget.style.color = `blue` // 내가 클릭한 얘
//    e.target.style.color = `blue`  //
//})

//화살표함수 EventListener에서 쓰면 this를 잘 못 인식함 function(){} 써야함
//H1.addEventListener('click', function () {
//    this.style.color = `blue`
//    console.log(e.currentTarget, e.target)
//})



window.addEventListener('DOMContentLoaded', () => {
    const H1 = document.querySelector('h1'); // $('h1')
    const TOGGLE = function () {
        this.classList.toggle('on')
    }
    H1.addEventListener('click', TOGGLE);

                  
    const dddd = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination', 
            clickable : true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction:false,
        },

        on: {
            //init: function () { 
            //    console.log('swiper initialized');
            //},

            slideChangeTransitionEnd: function () { 
                console.log(this.slides.length, this.realIndex);
                //console.log(document.querySelectorAll('.swiper-slide'), document.querySelector('.swiper-slide-active'));
                document.querySelectorAll('.swiper-slide').forEach(
                    e => e.classList.remove('on')
                );
                document.querySelector('.swiper-slide-active').classList.add('on');

                document.querySelector('h1 strong').innerText = `${this.realIndex + 1} / ${this.slides.length - 2}`;
            },
        },
        
    });

    //const dddd = $('.ddd').slick(); 

    


})