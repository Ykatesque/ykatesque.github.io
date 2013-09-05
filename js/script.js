//fade in different texture bgs on Ykat logotype
var scrollSpeed = 2500;
var currentImage = 1;

function nextImage(currentImage) {
    currentImage = ((currentImage + 1) % 4); // we have images 1..6 to cycle through
    if (currentImage == 0) currentImage = 1;
    //console.log(currentImage);

    $('.display-sweet-image-behind').fadeTo(80, 0.55, function () {
        $(this).css("background-image", "url(" + currentImage + ".png)", "opacity", "0.25").fadeTo(80, 1.0);
    });

    return currentImage;
}

setInterval(function () {
    currentImage = nextImage(currentImage);
}, scrollSpeed);

$(document).ready(function () {
    var stickyNavTop = $('.nav').offset().top;
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');

        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });


    $('#portfolio').on('click', function scrollPort(event) {
        console.log("clicked: portfolio");
        event.preventDefault();
        $('body, html').animate({
            scrollTop: 880 + 940
        }, 'slow');
        $('#about').addClass('.aboutbg');
    });

    $('#contact').on('click', function scrollContact(event) {
        console.log("clicked: contact");
        event.preventDefault();
        $('body, html').animate({
            scrollTop: ((890 * 2) + 980)
        }, 'slow');
    });

    $('#about').on('click', function scrollAbout(event) {
        console.log("clicked: about");
        event.preventDefault();
        $('body, html').animate({
            scrollTop: (850)
        }, 'slow');
        //$('.nav').css('background-image', 'url(../intoxicating_by_lexiibabii01-d53vl31.jpg)');
    });


    $(".link").on("click", function (event) {
        // hide all elements under crate
        event.preventDefault();
        $('#wrapper').children().hide();

        // now show the element clicked...
        child_element_name = $(this).data("target");
        console.log($(this).data("target"));
        $(child_element_name).fadeToggle();

    });

    $(".item a").hover(function () {

        $(this).next().fadeToggle();


    });


});