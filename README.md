# SnapPoint v1.0

Easy-to-use jQuery plugin that creates what I call "SnapPoints." A SnapPoint is the beginning of a block of content that you want the browser's window to scroll down to to. Metaphorically stated, SnapPoint attaches a little vacuum to any block level element (e.g. <div>). It sucks the visitors screen down to the top of that content.

##Why Would I Use This?

It's not for every site. You would use this if you had a page or multiple pages that are built around a multiple blocks of content, probably short content.

* For an example, please see the demo (http://robspangler.com/git/jquery-snappoint/demo/demo.html)
* Live example coming soon.

## How Do I Use It?

To start please include the latest version of jQuery and jquery.snappoint-1.0.js.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="path/to/jquery.snappoint-1.0.js"></script>

<script>
  $(document).ready(function(){
    $(".block").snapPoint();
  });
</script>
```

### Options

Here are the customizable options for SnapPoint:

```html
$(".block").snapPoint({ 
	scrollDelay: 550,		//Amount of time the visitor has to scroll before the snap point kicks in (ms)
	scrollSpeed: 90,		//Length of smooth scroll's animation (ms)
	outerTopOffset: 220,	//Number of pixels for the downward vertical offset (relative to the top of your snapping container)
	innerTopOffset: 0		//Number of pixels for the upward vertical offset (relative to the top of your snapping container)
});
```

## Changelog

### Version 1.0 (12/04/2012)
* Initial release

## Author

Robert Spangler

* http://www.robspangler.com
* http://www.linkedin.com/in/robertspangler