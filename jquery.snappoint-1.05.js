/*
 * SnapPoint jQuery Plugin
 * Version 1.05
 * Author: Robert Spangler (http://robspangler.com/)
 *
 * Copyright (c) 2012
 * Licensed under the MIT license.
 *
 */
(function( $ ){

	var snapPointTimer = null;
	
	$.fn.snapPoint = function(options) {
		
		var defaults = { 
			scrollDelay: 550,		//Amount of time the visitor has to scroll before the snap point kicks in (ms)
			scrollSpeed: 90,		//Length of smooth scroll's animation (ms)
			outerTopOffset: 200,	//Number of pixels for the downward vertical offset (relative to the top of your snapping container)
			innerTopOffset: 0		//Number of pixels for the upward vertical offset (relative to the top of your snapping container)
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
				
				elementPos = position.top;
				windowPos = $(jQuery.browser.webkit ? "body" : "html").scrollTop(); /*webkit uses body, others use html*/
				
				if ( windowPos + options.outerTopOffset >= elementPos && elementPos + options.innerTopOffset >= windowPos && windowPos != elementPos ) {
					$(jQuery.browser.webkit ? "body" : "html").animate({
						scrollTop: elementPos
					}, options.scrollSpeed);
				}
			});
		}
	
	}

})( jQuery );