$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:false,/*--Адаптация под картинки--*/
		slidesToShow:1, /*--сколько слайдов покаже---*/
		slidesToScroll:1,/*---сколько слайдов прокручивается---*/
		speed:800,/*---скорость прокрутки слайдера-- 300 по умолчанию--*/
		easing:'linear',/*--Анимация прокрутки---*/
		initalSlide:0,/*--с какого слайдера начать---*/
		autoplay:false,/*---автопрокрут---*/
		autoplaySpeed:3000,/*--скорость автопрокрута---*/
		pauseOnFocus:false,/*--пауза при фокусе и т.д--*/
		pauseOnHover:false,
		pauseOnHoverDots:false,
		draggable:true,/*--свайп мышкой для пк*/
		swipe:true,/*--свайп тачскрин--*/
		/*touchThreshold: ---задержка для свайпа чем больше тем быстрее*/
		/*touchMove ---запрет на передвижения слайда смартфон*/
		/*waitForAnimate ---скорость переключенмя слайдеров*/
		/*centerMod ---слайдер по центру*/
		/*variableWidth ---авто адаптация*/
		/*rows ---Сколько рядов будет*/
		/*slidesPerRow ---сколько слайдов в ряду*/
		/*vertical ---вертикальный слайдер*/
		/*verticalSwiping ---адекватная прокрутка*/
		/*fade ---свайп заменяется заменением*/
		/*asNavFor ---связка слайдеров*/
		
		/*responsive ---адаптация в разширениях*/
		
		/*appendArrows:$('container') ---перемещение стрелок и точек appendDotsв див*/
	});
	
});