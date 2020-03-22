$(document).ready(function(){
	// one meru
	$('.hv1').mouseenter(function(){
		$('.mer').removeClass('on');
		$('.mer1').addClass('on');
		$('.menu-tabs ul li').removeClass('active');
		$('.menu-tabs ul li.tm1').addClass('active');
		$('.single-tab-content').removeClass('on');
		$('.single-tab-content.tc1').addClass('on');
	});
	// two meru
	$('.hv2').mouseenter(function(){
		$('.mer').removeClass('on');
		$('.mer2').addClass('on');
		$('.menu-tabs ul li').removeClass('active');
		$('.menu-tabs ul li.tm2').addClass('active');
		$('.single-tab-content').removeClass('on');
		$('.single-tab-content.tc2').addClass('on');
	});
	// three meru
	$('.hv3').mouseenter(function(){
		$('.mer').removeClass('on');
		$('.mer3').addClass('on');
		$('.menu-tabs ul li').removeClass('active');
		$('.menu-tabs ul li.tm3').addClass('active');
		$('.single-tab-content').removeClass('on');
		$('.single-tab-content.tc3').addClass('on');
	});
	// one menu
	$('.menu-tabs ul li.tm1').mouseenter(function(){
		$('.mer').removeClass('on');
		$('.mer1').addClass('on');
		$('.menu-tabs ul li').removeClass('active');
		$('.menu-tabs ul li.tm1').addClass('active');
		$('.single-tab-content').removeClass('on');
		$('.single-tab-content.tc1').addClass('on');
	});
	// two menu
	$('.menu-tabs ul li.tm2').mouseenter(function(){
		$('.mer').removeClass('on');
		$('.mer2').addClass('on');
		$('.menu-tabs ul li').removeClass('active');
		$('.menu-tabs ul li.tm2').addClass('active');
		$('.single-tab-content').removeClass('on');
		$('.single-tab-content.tc2').addClass('on');
	});
	// three menu
	$('.menu-tabs ul li.tm3').mouseenter(function(){
		$('.mer').removeClass('on');
		$('.mer3').addClass('on');
		$('.menu-tabs ul li').removeClass('active');
		$('.menu-tabs ul li.tm3').addClass('active');
		$('.single-tab-content').removeClass('on');
		$('.single-tab-content.tc3').addClass('on');
	});
})