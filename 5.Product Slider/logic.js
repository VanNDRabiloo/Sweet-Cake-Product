const $jq = jQuery.noConflict();

$(document).ready(function(){
  for (const item of product.images) {
    $('.slider-product-cpn .slider-for').append(`<div class="mySlides"><img src="${item}"></div>`)
    $('.slider-product-cpn .slider-nav').append(`<div class="column"><img src="${item}"></div>`)
  }
  $('.slider-product-cpn .slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-product-cpn .slider-nav',
    });
    $('.slider-product-cpn .slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-product-cpn .slider-for',
      focusOnSelect: true,
      arrows: true,
      infinite: true,
    });
    $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});