$(function () {
    $('.top_banner button').on('click', function () {
        $('.top_banner').toggleClass('active')
    })
    $('.right_banner').on('click', function () {
        $(this).toggleClass('active')
    })
})