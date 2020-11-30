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


$(function () {
	// 상세보기
	var $toggle_view = $('.updown_wrap');

	$('.view_open').on('click', function () {
		$toggle_view.addClass('show');
	});

	$('.view_close').on('click', function () {
		$toggle_view.removeClass('show');
	});


	// 유지보수 여부
	$('.form_groupRow .radio_default').on('click', function () {
		if ($(this).children('input[type="radio"]').attr('id') != "use") {
			$('.maintain').hide();
		} else {
			$('.maintain').show();
		}
	});
});

$(document).ready(function () {

	/* -------------------------------------------------
		레이어 팝업
	------------------------------------------------- */
	$("[data-layer]").click(function(e){
		var containerH = $(".container").outerHeight();
		var _target = $(this).attr("data-layer");
		$("." + _target).parent().removeAttr("style").addClass("on");
		// $("." + _target).parent().css({"height":containerH});
		$("." + _target).removeAttr("style").addClass("on");
		var _layerOn_length = $(".ly_group > .on, .ly_group_s > .on").length;
		
		if(_layerOn_length && $("." + _target).parent().hasClass('ly_fixed')){
			var _left= $("." + _target).outerWidth() / 2 + 213;
			var _top= $("." + _target).outerHeight() / 2;
			$("." + _target).css({"position" : "absolute", "left" : "50%", "top" : "50%", "margin" : -_top + "px 0 0 -" + _left + "px"});

		} else if(_layerOn_length){
			var _left= $("." + _target).outerWidth() / 2;
			var _top= $("." + _target).outerHeight() / 2;
			$("." + _target).css({"position" : "absolute", "left" : "50%", "top" : "50%", "margin" : -_top + "px 0 0 -" + _left + "px"});
		}

		e.preventDefault();
		
	});
	
	$("[data-fn='lyClose'], .lyClose").click(function(){

		var _layerOn_length = $(".ly_group > .on, .ly_group_s > .on").length;
		if(_layerOn_length){
			$(".ly_group > .on, .ly_group_s > .on").removeClass("on")
				.parent().removeClass("on");
		}else{
			$(this).parent().removeClass("on")
				.parent().removeClass("on");
        }
        
    });

});