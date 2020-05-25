
/* -------- _System/assets/js/datetimepicker.js -------- */ 

$(function () {
    $('#datetimepicker').datetimepicker({
      locale: 'sv',
      inline: true,
      sideBySide: true,
      defaultDate: new Date(),
      stepping: '15',
      format: 'YYYY-MM-DD'
    });
});

$(function () {
    $('#datetimepickerHasValue').datetimepicker({
      locale: 'sv',
      inline: true,
      sideBySide: true,
      stepping: '15',
      format: 'YYYY-MM-DD'
    });
});

/* -------- _System/assets/js/equal-height.js -------- */ 

/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

  var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
  $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.comparison div');
});


$(window).resize(function(){
  equalheight('.comparison div');
});


/* -------- _System/assets/js/offcanvas-menu.js -------- */ 

menuButton = $('#openMenu');
menuWrapper = $('.menu-wrapper');
mainWrapper = $('.main-wrapper');
wrapperBackground = $('#wrapperBackground');

menuButton.click(function() {
  menuWrapper.attr('id', 'open');
  mainWrapper.attr('id', 'menuOpen');
})

wrapperBackground.click(function() {
  menuWrapper.removeAttr('id', 'open');
  mainWrapper.removeAttr('id', 'menuOpen');
})
