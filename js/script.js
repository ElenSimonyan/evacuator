/**
 * Created by Serg
 */
$(function () {
    $("input[type='tel']").mask("9(999)999 99 99");
    $("input, textarea").placeholder();
    $(".fancybox").fancybox();
    $(".bxslider").bxSlider({
    	//slideWidth: 480
    });
    $( "#tabs" ).tabs();
    $(".bxslider1").bxSlider({
    	slideWidth: 1400,
    	minSlides: 3,
    	maxSlides: 3,
    	slideMargin: 27,
    	slideWidth: 280
    });
    $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $(this).siblings('ul').slideToggle();
	});
});
