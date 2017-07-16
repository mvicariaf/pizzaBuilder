// Write your Pizza Builder JavaScript in this file.

var totalPrize = 13;
var prizeList = $('ul').eq(1);
prizeList.children().eq(3).fadeOut();
prizeList.children().eq(4).fadeOut();
$( document ).ready(function() {

	newPrize ();
	//Seleccionar clase pep y aplicarle fadeToggle
	$('.btn-pepperonni').on('click', function(){
		$('[class~=pep]').fadeToggle();
		$('.btn-pepperonni').toggleClass('active');
		if ( $('.btn-pepperonni').hasClass('active')== false){
			totalPrize = totalPrize -1;
			prizeList.children().first().fadeOut();
		} else {
			totalPrize = totalPrize +1;
			prizeList.children().first().fadeIn();
		}
		newPrize();
	});
	$('.btn-mushrooms').on('click', function(){
		$('.mushroom').fadeToggle();
		$('.btn-mushrooms').toggleClass('active');
		if ( $('.btn-mushrooms').hasClass('active')== false){
			totalPrize = totalPrize -1;
			prizeList.children().eq(1).fadeOut();

		} else {
			totalPrize = totalPrize +1;
			prizeList.children().eq(1).fadeIn();

		}
		newPrize();
	});
	$('.btn-green-peppers').on('click', function(){
		$('[class^=green-pepper]').fadeToggle();
		$('.btn-green-peppers').toggleClass('active');
		if ( $('.btn-green-peppers').hasClass('active')== false){
			totalPrize = totalPrize - 1;
			prizeList.children().eq(2).fadeOut();
		} else {
			totalPrize = totalPrize +1;
			prizeList.children().eq(2).fadeIn();
		}
		newPrize();
	});
	//$ ('.sauce').toggleClass('sauce-white',false);
	$ ('.btn-sauce').on('click', function(){
		$('.sauce').toggleClass('sauce-white');
		$('.btn-sauce').toggleClass('active');
		if ( $('.btn-sauce').hasClass('active')== true){
			totalPrize = totalPrize +3;
			prizeList.children().eq(3).fadeIn();
		} else {
			totalPrize = totalPrize -3;
			prizeList.children().eq(3).fadeOut();
		}
		newPrize();
	});
	$ ('.btn-crust').on('click', function(){
		$('.crust').toggleClass('crust-gluten-free');
		$('.btn-crust').toggleClass('active');
		if ( $('.btn-crust').hasClass('active')== true){
			totalPrize = totalPrize +5;
			prizeList.children().eq(4).fadeIn();
		} else {
			totalPrize = totalPrize -5;
			prizeList.children().eq(4).fadeOut();
		}
		newPrize();
	});
	
	$('section').removeClass('sauce-white');
	$('section').removeClass('crust-gluten-free');
	$('.btn-sauce').removeClass('active');
	$('.btn-crust').removeClass('active');
	//$ ('.crust').toggleClass('crust-gluten-free',false);
	
	
	function newPrize (){
		$('strong').replaceWith("<strong>$"+totalPrize.toString() +"</strong>");
	}
});
