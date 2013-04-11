/*
 *	SnapPoint jQuery Plugin
 *	Version 2.05
 *	Author: Robert Spangler (http://robspangler.com/)
 *
 *	Copyright (c) 2012
 *	Licensed under the MIT license.
 *
 *
 *	Left-to-Right snap added by
 *
 *	Ken Frederick
 *	ken.frederick@gmx.de
 *
 *	http://cargocollective.com/kenfrederick/
 *	http://kenfrederick.blogspot.com/
 *
 */
(function( $ ){

	//
	// as of jQuery 1.9.0
	// jQuery.browser is out
	// http://pupunzi.open-lab.com/2013/01/16/jquery-1-9-is-out-and-browser-has-been-removed-a-fast-workaround/
	//
	jQuery.browser = {};
	jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

	var snapPointTimer = null;
	
	$.fn.snapPoint = function(options) {
		
		var defaults = { 
			scrollDelay: 550,		// Amount of time the visitor has to scroll before the snap point kicks in (ms)
			scrollSpeed: 90,		// Length of smooth scroll's animation (ms)
			outerTopOffset: 200,	// Number of pixels for the downward vertical offset (relative to the top of your snapping container)
			innerTopOffset: 0,		// Number of pixels for the upward vertical offset (relative to the top of your snapping container)
			outerLeftOffset: 200,	// Number of pixels for the outer horizontal offset (relative to the right of your snapping container)
			innerLeftOffset: 0		// Number of pixels for the inner horizontal offset (relative to the left of your snapping container)
		};
		    options = $.extend({}, defaults, options);
		    elArray = this;

		$(window).scroll(function() {
			if (snapPointTimer) {
				clearTimeout(snapPointTimer);
			}
			snapPointTimer = setTimeout(snapPointInit, options.scrollDelay);
		});

		snapPointTimer = null
		
		function snapPointInit() {
			elArray.each(function(){
				var position = $(this).position();
				elementPosTop = position.top;
				elementPosLeft = position.left;

				windowPosTop = $(jQuery.browser.webkit ? 'body' : 'html').scrollTop(); /*webkit uses body, others use html*/
				
				// scroll up or down
				if ( windowPosTop + options.outerTopOffset >= elementPosTop && 
					 elementPosTop + options.innerTopOffset >= windowPosTop && 
					 windowPosTop != elementPosTop ) {
					$(jQuery.browser.webkit ? 'body' : 'html').animate({
						scrollTop: elementPosTop
					}, options.scrollSpeed);
				}


				windowPosLeft = $(jQuery.browser.webkit ? 'body' : 'html').scrollLeft(); /*webkit uses body, others use html*/

				// scroll left or right
				if ( windowPosLeft + options.outerLeftOffset >= elementPosLeft &&
					 elementPosLeft + options.innerLeftOffset >= windowPosLeft && 
					 windowPosLeft != elementPosLeft ) {
					$(jQuery.browser.webkit ? 'body' : 'html').animate({
						scrollLeft: elementPosLeft
					}, options.scrollSpeed);
				}



			});
		}
	
	}

})( jQuery );