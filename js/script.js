
//preloading images for use as bg on 'Ykat' h1 text

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        console.log('I ran')

    });
}


preload([
    '1.jpg',
    '2.jpg',
    '3.jpg'
]);


//fade in different texture bgs on Ykat logotype
var scrollSpeed = 2500;
var currentImage = 1;

function nextImage(currentImage) {
      currentImage = ((currentImage + 1) % 4); // we have images 1..3 to cycle through
      if(currentImage == 0) currentImage = 1;
      //console.log(currentImage);

      $('.display-sweet-image-behind').fadeTo(40, 0.65, function() {
        $(this).css("background-image", "url(" + currentImage + ".jpg)", "opacity", "0.25").fadeTo(80, 1.0);
      });

      return currentImage;
}

setInterval(function(){
  currentImage = nextImage(currentImage);
}, 200);




$(document).ready(function() {

//setting some variables
var menu = $('#menu');
var aboutlink = $('#about')
var portfoliolink = $('#portfolio');
var contactlink = $('#contact');


//sticky nav
var stickyNavTop = $('.nav').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) {
    $('.nav').addClass('sticky');

} else {
    $('.nav').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function() {
  stickyNav();
});


//needs some major refactoring, but laying out the ground work right now

var introHeight = $('#intro').height();
var aboutHeight = $('#aboutc').height();
var portHeight = $('#portfolioc').height();
var contactHeight = $('#contactc').height();


var scrollPort = function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: introHeight + aboutHeight + 100}, 'slow');
  aboutlink.addClass('.aboutbg');

};

var scrollContact = function(){
  event.preventDefault();
  $('body, html').animate({scrollTop:introHeight + aboutHeight + portHeight + 200}, 'slow');
};


var scrollAbout = function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: (introHeight)}, 'slow');

  //$('.nav').css('background-image', 'url(../intoxicating_by_lexiibabii01-d53vl31.jpg)');


};

portfoliolink.on('click', scrollPort);
contactlink.on('click', scrollContact);
aboutlink.on('click', scrollAbout);

// window.setInterval(function(){
//    window.setTimeout(function(){
//        $('.display-sweet-image-behind').css('background-image','url(intoxicating_by_lexiibabii01-d53vl31.jpg)');
//    },600);
//     $('.display-sweet-image-behind').css('background-image','url(tumblr_md05w7QDZV1qkovyeo1_500.png)');
// },300);



///Project Menu fadeToggle

 $(".link").on("click", function() {
   // hide all elements under crate
   event.preventDefault();
 $('#wrapper').children().hide();

   // now show the element clicked...
   child_element_name = $(this).data("target");
   console.log($(this).data("target"))
   $(child_element_name).fadeToggle();

});

  $(".item a").hover(function() {

  $(this).next().fadeToggle();


 });


  var $myElt       = $('.fancy_title');      // whatever element you want to check
  var $window      = $(window);            // the window jQuery element
  var myTop        = $myElt.offset().top;  // the top (y) location of your element
  var windowTop    = $window.scrollTop();           // the top of the window
  var windowBottom = windowTop + $window.height();  // the bottom of the window

  if (myTop > windowTop && myTop < windowBottom) {

  } else {
      // element is NOT in the window
      // maybe use this to scroll...
      // $('html, body').animate({scrollTop: myTop}, 300);
  }




});
