$(document).ready(function(){
	//When mouse rolls over
	$("li.green").mouseover(function(){
		$(this).stop().animate({height:'100px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
	//When mouse is removed
	$("li.green").mouseout(function(){
		$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	$("li.yellow").mouseover(function(){
		$(this).stop().animate({height:'100px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
	//When mouse is removed
	$("li.yellow").mouseout(function(){
		$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	$("li.red").mouseover(function(){
		$(this).stop().animate({height:'100px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
	//When mouse is removed
	$("li.red").mouseout(function(){
		$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	$("li.purple").mouseover(function(){
		$(this).stop().animate({height:'100px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
	//When mouse is removed
	$("li.purple").mouseout(function(){
		$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	$("li.blue").mouseover(function(){
		$(this).stop().animate({height:'100px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
	
	//When mouse is removed
	$("li.blue").mouseout(function(){
		$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
	});
});
/*slide menu for regisreration*//*slide menu for regisreration*//*slide menu for regisreration*//*slide menu for regisreration*//*slide menu for regisreration*//*slide menu for regisreration*/
$(document).ready(function(){
var i=1;
$(".register").mouseenter(function(){
if(i==1)
{
$(".register").animate({left:'+10px'},{duration :800, easing: 'easeOutBounce'});
i=2;
}
else if(i==2)
{
$(".register").animate({left:'+140px'},{duration :800, easing: 'easeOutBounce'});
i=1;
}
});
});
function makeScrollable(wrapper, scrollable){
// Get jQuery elements
var wrapper = $(wrapper), scrollable = $(scrollable);
// Hide images until they are not loaded
scrollable.hide();
var loading = $('<div class="loading">Loading...</div>').appendTo(wrapper);
// Set function that will check if all images are loaded
var interval = setInterval(function(){
var images = scrollable.find('img');
var completed = 0;
// Counts number of images that are succesfully loaded
images.each(function(){
if (this.complete) completed++;
});
if (completed == images.length){
clearInterval(interval);
// Timeout added to fix problem with Chrome
setTimeout(function(){
loading.hide();
// Remove scrollbars
wrapper.css({overflow: 'hidden'});
scrollable.slideDown('slow', function(){
enable();
});
}, 1000);
}
}, 100);
function enable(){
// height of area at the top at bottom, that don't respond to mousemove
var inactiveMargin = 99;
// Cache for performance
var wrapperWidth = wrapper.width();
var wrapperHeight = wrapper.height();
// Using outer height to include padding too
var scrollableHeight = scrollable.outerHeight() + 2*inactiveMargin;
// Do not cache wrapperOffset, because it can change when user resizes window
// We could use onresize event, but it's just not worth doing that
// var wrapperOffset = wrapper.offset();
// Create a invisible tooltip
var tooltip = $('<div class="sc_menu_tooltip"></div>')
.css('opacity', 0)
.appendTo(wrapper);
// Save menu titles
scrollable.find('a').each(function(){
$(this).data('tooltipText', this.title);
});
// Remove default tooltip
scrollable.find('a').removeAttr('title');
// Remove default tooltip in IE
scrollable.find('img').removeAttr('alt');
var lastTarget;
//When user move mouse over menu
wrapper.mousemove(function(e){
// Save target
lastTarget = e.target;
var wrapperOffset = wrapper.offset();
var tooltipLeft = e.pageX - wrapperOffset.left;
// Do not let tooltip to move out of menu.
// Because overflow is set to hidden, we will not be able too see it
tooltipLeft = Math.min(tooltipLeft, wrapperWidth - 75); //tooltip.outerWidth());
var tooltipTop = e.pageY - wrapperOffset.top + wrapper.scrollTop() - 40;
// Move tooltip under the mouse when we are in the higher part of the menu
if (e.pageY - wrapperOffset.top < wrapperHeight/2){
tooltipTop += 80;
}
tooltip.css({top: tooltipTop, left: tooltipLeft});
// Scroll menu
var top = (e.pageY - wrapperOffset.top) * (scrollableHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
if (top < 0){
top = 0;
}
wrapper.scrollTop(top);
});
// Setting interval helps solving perfomance problems in IE
var interval = setInterval(function(){
if (!lastTarget) return;
var currentText = tooltip.text();
if (lastTarget.nodeName == 'IMG'){
// We've attached data to a link, not image
var newText = $(lastTarget).parent().data('tooltipText');
// Show tooltip with the new text
if (currentText != newText) {
tooltip
.stop(true)
.css('opacity', 0)
.text(newText)
.animate({opacity: 1}, 100);
}
}
}, 200);
// Hide tooltip when leaving menu
wrapper.mouseleave(function(){
lastTarget = false;
tooltip.stop(true).css('opacity', 0).text('');
});

}
}
$(function(){
makeScrollable("div.sc_menu_wrapper", "div.sc_menu");
});
/*slide menu for regisreration*//*slide menu for regisreration*//*slide menu for regisreration*//*slide menu for regisreration*//*slide menu for regisreration*//*slide menu for regisreration*/