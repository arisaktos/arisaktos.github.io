$(window).scroll(function () {

    scrolled();

});

function scrolled() {

    var windowPosition = $(window).scrollTop();

    var navHeight = $('#main-nav').height();

    if (windowPosition > navHeight) {
        $('#main-nav').addClass('nav-bg');
    } else {
        $('#main-nav').removeClass('nav-bg');
    }
}
