$(function () {

    $('header i').on('click', function () {
        $('.cover').toggleClass('on')
    })   
    
    $('.cover a').on('click', function () {
        $('.cover').toggleClass('on')
    })   

    
/*   $('.cover a').click(function (e) {
      e.preventDefault();      
    $('.cover .a').animate({scrollTop: 0}, 5000);
  });
 */
    
    $('.cover a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        console.log(100 * idx + "%", $('.sticky').height());
        let h = $('.sticky').height();
        $('.cover').removeClass('on');
        $('html, body').animate({ scrollTop: idx * (h + 1) }, 1000)
    })
			

}); 