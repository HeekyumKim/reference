$(function() {
	$(".gg-element").each(function(idx) {
		var tmpIdx = idx;
		var thisObj = this;
		$(this).on("click", function() {
			$('#gg-screen').show();
      $('#gg-screen').html($(thisObj).html());
      $(".gg-box").addClass("add");
			
      if (tmpIdx == 0) {	// 맨 처음이면
        $('#gg-screen').append('<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt" data-idx="' + (tmpIdx + 1) + '"></div>');
      }
      else if (tmpIdx == $(".gg-element").length - 1) {	// 맨 마지막이면
        $('#gg-screen').append('<div class="gg-close gg-bt">&times</div><div class="gg-prev gg-bt" data-idx="' + (tmpIdx - 1) + '"></div>');
      }
      else {
        $('#gg-screen').append('<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt" data-idx="' + (tmpIdx + 1) + '"></div><div class="gg-prev gg-bt" data-idx="' + (tmpIdx - 1) + '"></div>');
      }
    });
		
	});
	
	$(document).on('click','.gg-close',function(){
	    $("#gg-screen").hide();
	    $(".gg-box").removeClass("add");
	    $("body").css('overflow','auto');
	  });

	  $(document).on('click','.gg-prev',function(){
		  $(".gg-element").eq($(this).data("idx")).click();
	  });
	  $(document).on('click','.gg-nxt',function(){
		  $(".gg-element").eq($(this).data("idx")).click();
	  });
});


