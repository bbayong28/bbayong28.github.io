$(function () {
    $('.num li').on('click', function () {
        var idx = $(this).index();
        console.log(idx);
        $('.shoes .case ul').css({ top: -450 * idx })
    })
})