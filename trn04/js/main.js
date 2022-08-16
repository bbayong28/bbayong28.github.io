
window.addEventListener('DOMContentLoaded', () => {
     
    const SCE_ELE = document.querySelectorAll('.screvent');

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
            : document.querySelector('#Header').classList.remove('on')
    })
        
    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop
                ? el.classList.add('on')
                : el.classList.remove('on')
        })
    });//이거 제일 힘든거 알기!

    const UL = document.querySelector('nav ul');
    const LI = [...UL.children];   //[0][2]..찍어보면됨
    console.log(LI);
     
    
    
    
    
    
    

})