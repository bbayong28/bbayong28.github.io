// $(function () { 
// 
//     var TXT = ['HOME', '01', '02', '03', '04', 'shin,s portfolio']
//     //fullpage
//     $('.main').fullpage({
//         anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
//         //navigation: true,
//         css:false,
//         //afterRender: function () { 
//         //    $('.section').addClass('on')
//         //},
//         afterLoad: function (page, num) { 
//             //첫 페이지에서는 안붙음...
//             setTimeout(() => {
//                 $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
//             });          
//             $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
//             $('.this_page').text(TXT[num - 1]);
//         },
//     });
// 
//     //$('.page03').on('wheel', function (e) { 
//     //    console.log(e.originalEvent.wheelDelta);
//     //    se.originalEvent.wheelDelta > 0 && fullpage_api.moveSlideLeft();
//     //})
// })

$(function () {

    var TXT = ['HOME', '01', '02', '03', '04', 'lee,s portfolio', 'copyright']
    //fullpage 
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            setTimeout(function () {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);

            //if (num !== 1) { $('.Header').addClass('on') } else { $('.Header').removeClass('on') }
            
            num !== 1
                ? $('.Header').addClass('on')
                : $('.Header').removeClass('on');
        
        },
    });


    

    //const BGC = $('.basicSlider').slick({
    //    arrows: false,
    //    asNavFor:'.basicSlider'
    //});

    $('.basicSlider').slick({
        arrows: false,
        autoplay: true,        
        pauseOnHover:true,
        asNavFor:'.basicSlider'
    });


    $('.basicSlider').on('afterChange', function (e, s, c) {
        $('.productSlider .slide_menu li ').eq(c).addClass('on').siblings().removeClass('on');

    });

    $('.productSlider .slide_menu li ').on('click', function () { 
        var idx = $(this).index();
        $('.basicSlider').slick('slickGoTo', idx)
    })







})