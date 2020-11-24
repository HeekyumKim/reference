$(function () {

    // 검색어 클리어 버튼
    var $ipt = $('#schinput'),
        $clearIpt = $('#schclear');

    $ipt.keyup(function () {
        $("#schclear").toggle(Boolean($(this).val()));
    });

    $clearIpt.toggle(Boolean($ipt.val()));
    $clearIpt.click(function () {
        $("#schinput").val('').focus();
        $(this).hide();
    });
 

});



// top버튼
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});