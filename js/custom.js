/*js custom code*/
$(function () {
    "use strict";

    //resize the header

    $(".header").height($(window).height());
    
    $(window).resize(function () {
        $(".header").height($(window).height());
        
    });

    // links add active class
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // trigger th bxslider

    $('.slider').bxSlider(
        {pager:false}
    );

    // scroll smooth

    $('.links li a').click(function () {
       
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    // auto slider code

    (function autoSlider() {
     $('.slider1 .active').each(function() {
       if (!$(this).is(':last-child')) {
           $(this).delay(3000).fadeOut(1000, function () {
             $(this).removeClass('active').next().addClass('active').fadeIn();
             autoSlider();
           });
       } else{
           $(this).delay(3000).fadeOut(1000,function () {
               $(this).removeClass("active");
               $('.slider1 div').eq(0).addClass('active').fadeIn();
           });
       }
     });
    }());
    
    // trigger mixitup

    $('#container').mixItUp();

    // adjust shuffle links
    $(".shuffle li").click(function () {
      $(this).addClass('select').siblings().removeClass("select");
    });

    // applay nice scroll
    $("html").niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: "10px",

    });
});

