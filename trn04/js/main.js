
window.addEventListener('DOMContentLoaded', () => {
     
    

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct)
        // if (sct > 0) {
        //     document.querySelector('#Header').classList.add('on');
        // } else {
        //     document.querySelector('#Header').classList.remove('on');
        // }
        sct > 0
            ? document.querySelector('#Header').classList.add('on')
            : document.querySelector('#Header').classList.remove('on');
        
        sct > 500
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on');
    })


    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination', 
            clickable : true,
        },

    })


    const SCE_ELE = document.querySelectorAll('.active-event');    
    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop -300 
                ? el.classList.add('on')
                : el.classList.remove('on')
        })
    });//이거 제일 힘든거 알기!

    //const UL = document.querySelector('nav ul');
    //const LI = [...UL.children];   //[0][2]..찍어보면됨
    //console.log(LI);



    /* 제이쿼리에서 function 쓴 이유 - this를 쓸 일이 많아서
        자스는 this 쓸일 거의 없다. */
    document.querySelector('.to_top').addEventListener('click', () => { 
        window.scrollTo({ top: 0, bdhavior:'smooth'})
    })
    

    //document.querySelector('.mopen').addEventListener('click', function () {         
    //    this.classList.toggle('on')
    //})

    //화살표 함수를 꼭 써야한다면 대신할 거를 가져오기
    document.querySelector('.mopen').addEventListener('click', (e) => {
        const TG = e.currentTarget;
        TG.classList.toggle('on');
        document.querySelector('#Header').classList.toggle('ox')
    });
    
    document.querySelector('#Header').addEventListener('wheel', (e) => { 
        //e.stopPropagation();  이벤트 전파를 막음
        //e.preventDefault();  이벤트 자체를 막음
        console.log(111);
        e.preventDefault();
    })




      
    
    
    
    
    

})