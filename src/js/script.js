$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/chevron-left-solid.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/chevron-right-solid.png"></img></button>',
        responsive: [{
            breakpoint: 925,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });
});