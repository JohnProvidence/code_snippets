// scroll nav function

function scrollNav(navItemSelector) {
	// simple function that sets a jump nav up with smooth scrolling to page elements

	$(navItemSelector).on('click', function(){
		var target = $(this).find('a').attr('href');

		$('html, body').animate({
			
			scrollTop: $(''+target+'').offset().top - 100 
			
			// this scrolls to the position of the target minus 100 px. You may need to adjust this value.
			
			}, 1000); 

			// 1000 milisecond scroll, use a different value to speed up or slow down scroll
		
			return false;

	});

}