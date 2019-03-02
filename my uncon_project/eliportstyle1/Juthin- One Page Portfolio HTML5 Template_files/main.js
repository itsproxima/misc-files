(function ($) {
    "use strict";

    /*----------------------------
    Responsive menu Active
    ------------------------------ */
    $(".mainmenu ul#primary-menu").slicknav({
        allowParentLinks: true,
        prependTo: '.responsive-menu'
    });
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.mainmenu li a, .logo a,.slicknav_nav li a,.discover a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});

    /*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
    jQuery(window).on('scroll', function () {
        if ($(this).scrollTop() > 480) {
            $('.menubar').addClass("sticky");
        } else {
            $('.menubar').removeClass("sticky");
        }
    });


    /*----------------------------
    START - Scroll to Top
    ------------------------------ */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    
    /*----------------------------
    START - Progress bar
    ------------------------------ */
    var bar = new ProgressBar.Line(progress1, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#222',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(0.9);
    var bar = new ProgressBar.Line(progress2, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#222',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(0.5);
    var bar = new ProgressBar.Line(progress3, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#222',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(0.7);
    var bar = new ProgressBar.Line(progress4, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#222',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(0.8);
    var bar = new ProgressBar.Line(progress5, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#222',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(0.75);
    
	
	/*----------------------------
    START - Isotope
    ------------------------------ */
    jQuery(".portfolio-item").isotope();
    $(".portfolio-menu li").on("click", function(){
      $(".portfolio-menu li").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr('data-filter');
      $(".portfolio-item").isotope({
        filter: selector
      })
    });
    
	/*----------------------------
    START - Ticker
    ------------------------------ */
	$('.ticker').ticker();
    
    
	/*----------------------------
    START - Preloader
    ------------------------------ */
    jQuery(window).on("load", function(){
        jQuery("#preloader").fadeOut(500);
    });

}(jQuery));
