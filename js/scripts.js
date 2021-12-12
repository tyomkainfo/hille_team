$('.close').click(function () {
    $('.od_promo_banner').slideUp(500);
})

// burger menu, Oshovskiy Dima
$('.burger').click(function() {
    $('.burger, header nav, header .main_container').toggleClass('burger_active');
});

















































// carousel, Peschanskyi
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        mouseDrag: false,
        touchDrag: false,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            375:{
                items:1,
                margin: 0
            },
            530:{
                items:2,
                margin: 0
            },
            767:{
                items:3,
                margin: 0
            },
            991:{
                items:4,
                margin: 0
            },
            1199:{
                items:5,
                margin: 0
            },
            1200:{
                items:5,
                margin: 30
            }
        }
    });
});