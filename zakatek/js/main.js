var maxWindowForNav = 575;

$(document).ready(function () {
    $('.carousel').carousel({
        interval: false
    });
    classOnSmaller();
});

if ($(window).width() > maxWindowForNav) {
    $(window).scroll(function () {

        scrolled();

    });
}

function scrolled() {
    var windowPosition = $(window).scrollTop();
    var navHeight = $('#main-nav').height();

    if (windowPosition > navHeight) {
        $('#main-nav').addClass('nav-bg');
        $('#main-nav').removeClass('nav-bg-remove');
    } else {
        $('#main-nav').addClass('nav-bg-remove');
        $('#main-nav').removeClass('nav-bg');
    }
}

function classOnSmaller() {

    if ($(window).width() < maxWindowForNav) {
        $('#main-nav').addClass('nav-bg');
    }
}
