
$(document).ready(function(){
   "use strict";

	// Navigation
	$("#menu-toggle").on("click", function(){
		$(".menu-wrap").toggleClass("open");
	});


	$(".menu li").hover(function() {
  	 	$(this).find(".submenu").stop(true, true).delay(1).slideDown(170);
	}, function() {
	    $(this).find(".submenu").stop(true, true).delay(200).slideUp(170);
	});
	
	// .stop(true, true).delay(1).slideDown(400)
	//Search
	$("#search-toggle").on("click", function() {
	    $("#search-bar").slideDown(170);
	});
	$("#search-close").on("click", function() {
	    $("#search-bar").slideUp(170);
	});


	// Nivo Light-Box
	var nivoActivator = $('.nivo-activator');
	if (nivoActivator.css("display") == "block"){
   		$('.slider-btn, .nivo-trigger').nivoLightbox({
   			theme: 'default'
   		});
	};

    // Countdown
    if ($('.countdown').length>0) {
        $(".countdown").countdown({
            date: "28 june 2016 12:00:00", // Edit this line
            format: "on"
        },
        function() {
          // This will run when the countdown ends
        });
    }

			
    // Owl-carousel sliders
    if ($("#home-slider, #post-slider").length>0) {
    	$("#home-slider, #post-slider").owlCarousel({
    		itemsCustom : [
	        [0, 1],
	        [450, 1],
	        [600, 1],
	        [700, 1],
	        [1000, 1],
	        [1200, 1],
	        [1400, 1],
	        [1600, 1]
	      ],
	      navigation : true,
	      navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	      autoPlay: true
    	});
    };

    if($("#partners-slider").length>0){
    	$("#partners-slider").owlCarousel({
    		itemsCustom : [
	        [0, 1],
	        [450, 1],
	        [600, 2],
	        [760, 3],
	        [991, 3],
	        [1200, 4],
	        [1600, 4]
	      	],
	       	navigation : false,
	      	navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	     	autoPlay: true
    	});
    };


    // portfolios Filter 
	var $portfolioslist = $('.portfolios-list');
   
    // initialize isotope
    if (($portfolioslist).length> 0) {
        $portfolioslist.isotope();
    };

	$('.portfolios-filter li').click(function(){
	    var selector = $(this).attr('data-filter');
	    $portfolioslist.isotope({ filter: selector });
	    return false;
	});

	// Dropdown
	$(".dropdown ").on("click", function(){
		$(".dropdown-list").toggleClass("on");
	});


	// Dropdown Replaced Texts
	$(".dropdown-list li").on("click", function(){
	    $('.dropdown-label').text($(this).text());
	    $('.dropdown-label').text();
	});


});