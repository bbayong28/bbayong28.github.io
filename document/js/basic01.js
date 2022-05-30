// 2022.05.30 hwayeong 
//document.querySelector('.header').style.color = 'red';

document.querySelector('.mopen').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('on');
    this.classList.toggle('on');
})
