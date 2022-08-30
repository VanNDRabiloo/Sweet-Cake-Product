(function( jQuery ){
  $(".choose-product-option-cpn .product-option-1")[0].classList.add('active')
})( window.GemQuery || jQuery );

function handleChooseOptionProduct(event, price, id) {
  for (var i = 0, len = $(".choose-product-option-cpn .product-option-1").length; i < len; i++) {
    $(".choose-product-option-cpn .product-option-1")[i].classList.remove('active')
  }
  event.target.classList.toggle('active')
  const priceFormated = new Intl.NumberFormat().format(price/100);
  $(".choose-product-option-cpn .price-number span").text(priceFormated)
}

function handleChooseOptionProduct2(event) {
  event.target.classList.toggle('active')
}