$('.menu-button').on('click', function(){
    $(this).toggleClass('opened');
    $('.burger-menu').toggleClass('opened');
});

$('.search-button').on('click', function(){
    $(this).toggleClass('opened');
    $('.search-page').toggleClass('opened');
});