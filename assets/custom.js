$(document).ready(function () {
    $('.product__media').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        asNavFor: '.product-thumbnails-slick'
    });

    $('.product-thumbnails-slick').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.product__media',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        draggable: true,
        prevArrow: '<button type="button" class="slick-prev slick-custom"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"><path fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 12l6-6-6-6" transform="translate(1 1)"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-custom"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"><path fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 12l6-6-6-6" transform="translate(1 1)"/></svg></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3
              }
            }
          ]
    })
});