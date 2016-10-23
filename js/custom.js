$(document).ready(function() {    

    // Carousel setup
    $('.slider-nav .slick-slide').click(function(event) {
    	$(this).prevAll().addClass('slide-orange')
    	$(this).nextAll().removeClass('slide-orange')

    });
 
	if ($(':nth-of-type(1)', this).hasClass('slick-current')) {
		$('#progress-slider .progress-bar').css('width', '12.5%');
	} else if ($(':nth-of-type(2)', this).hasClass('slick-current')) {
		$('#progress-slider .progress-bar').css('width', '25%');
	} else {
		$('#progress-slider .progress-bar').css('width', '100%');
	} 
});

// Custom carousel journey 
$('.slider-for').slick({
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    draggable: false,
    slidesToShow: 8, 
    asNavFor: '.slider-for',  
    focusOnSelect: true,
    responsive: [{

        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        infinite: true
    }

    }, {
        arrows: true, 
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        dots: true
    }

    }, { 
        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});
$('.slider-nested').slick({
    draggable: false,
    arrows: true, 
    infinite: true,
	nextArrow: '<i class="fa fa-angle-right"></i>',
	prevArrow: '<i class="fa fa-angle-left"></i>' 
});