$('.close').click(function () {
    $('.od_promo_banner').slideUp(500);
})
// burger menu, Oshovskiy Dima
$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger').toggleClass('burger_active');
        $('header nav, header .main_container').toggleClass('burger_active');
    });
});
