$(function () { 

    //fullpage
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
        //navigation: true,
        afterLoad: function (page, num) { 
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(page);
            $('.this_bg').css({
                backgroundPositionY: - 100 * (num - 1) + "px"
            });

            $('.this_pic img').attr({
                src: `./assets/images/lesedilarona0${num}.jpg`
            })
            $('.this_tp').css({
                backgroundImage : `url(./assets/images/lesedilarona0${num}.jpg)`
            })


        },



    });
})