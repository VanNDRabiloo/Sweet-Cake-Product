for (const item of product.images) {
   $('.describe-product-cpn .list-product-img').append(`<div class="product-img-wrap">
      <img class="product-img" src="${item}">
    </div>`)
 }