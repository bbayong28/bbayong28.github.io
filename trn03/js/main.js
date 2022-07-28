$(function () {

    $('.TopBanner i').on('click', function () {
        $('.TopBanner').hide();
    });

    $('.pop button').on('click', function () {
        $(this).parent().hide();
    })

})