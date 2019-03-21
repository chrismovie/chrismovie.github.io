$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

$(function(){$(".post_to_top").click(function(){$("html,body").animate({scrollTop:$("#top").offset().top},"1000");return false})})