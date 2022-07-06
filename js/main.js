$(function () {

    $('.hello__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 500,
    });

    $('.team__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,

        prevArrow: document.querySelector('.team__btn-prev'),
        nextArrow: document.querySelector('.team__btn-next'),

        speed: 500,
    });


    $(document).ready(function () {
        $('.shop__tab').click(function (event) {
            if ($('.shop__tabs').hasClass('one')) {
                $('.shop__tab').not($(this)).removeClass('active');
            }

            $(this).toggleClass('active');
        });
    });

    $(document).ready(function () {
        $('.shop__btn').click(function (event) {
            if ($('.shop__btn-box').hasClass('one')) {
                $('.shop__btn').not($(this)).removeClass('active');
            }

            $(this).toggleClass('active');
        });
    });

    $(document).ready(function () {
        $('.product-item__size-btn').click(function (event) {
            if ($('.product-item__size').hasClass('one')) {
                $('.product-item__size-btn').not($(this)).removeClass('active');
            }

            $(this).toggleClass('active');
        });
    });

});

// const shopTab = document.querySelector('.shop__tab');

// const shopTabActive = addEventListener('click', function () {
//     shopTab.classList.toggle('active');

// });




