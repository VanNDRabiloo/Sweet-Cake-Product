fetch(window.Shopify.routes.root + `recommendations/products.json?product_id=${product.id}&limit=10`)
  .then(response => response.json())
  .then(async (data) => {
    const listProducts = data.products
      const listIdProduct = listProducts.map((item) => item.id)
      
      const listRating = await Promise.all(
        listIdProduct.map((id) => getRatingById(id))
      )
      
       if(listProducts?.length > 0){
          listProducts.forEach((item, index) => {
                $('.recommend-product-cpn .list-product').append(`<div class="product-wrapper">
                <a href="/products/${item.handle}">
                  <div class="img-product">
                    <img src="${item?.images?.[0]}" alt="" class="gf_image" data-gemlang="en" width="1280" height="720" data-width="100%" data-height="aupx" title="" natural-width="1280" natural-height="720">
                  </div>
                  <div class="detail-product">
                    <div class="name-product">
                      <p>${item?.title}</p>
                    </div>
                    <div class="rating-product">
                      <div class="module gf_module-{{align_lg}} gf_module-{{align_lg}}-lg gf_module-{{align_md}}-md gf_module-{{align_sm}}-sm gf_module-{{align_xs}}-xs {{extraClass}}">
                        <ul class="gf_icon-list gf_icon-list-${index}"></ul>
                      </div>
                      <p class="rating-text rating-text-${index}"></p>
                    </div>
                    <div class="price-product">￥${String(item?.variants?.[0]?.price).slice(0,-2)}<span>(税込)</span></div>
                  </div>
                </a>
              </div>
              `)
            handleRenderRating(listRating[index], `.recommend-product-cpn ul.gf_icon-list-${index}`, `.recommend-product-cpn .rating-text-${index}`)
          })
       }
    })

  //get rating star by id
  async function getRatingById(id) {
    const res = await fetch(`https://api-cdn.yotpo.com/v1/widget/${appKeyYotpo}/products/${id}/reviews.json`)
    const data = await res.json()
    return data?.response?.bottomline?.average_score
  }
  
  // handle render rating star
  function handleRenderRating(averageRating, listStarElemt, textElemt, noteAfterScore) {
    const ratingInt = Math.floor(averageRating);
    const ratingDecimal = averageRating%1
    const noRating = 5 - Math.ceil(averageRating);
    for(let i = 0 ; i < ratingInt ; i++) {
      $(listStarElemt).append('<li class="item"><div class="item-content"><i class="fas fa-star"></i></div></li>')
    }
    if(ratingDecimal > 0) {
      $(listStarElemt).append('<li class="item"><div class="item-content"><i class="fas fa-star-half-alt"></i></div></li>')
    }
    for(let i = 0 ; i < noRating ; i++) {
      $(listStarElemt).append('<li class="item"><div class="item-content"><i class="far fa-star"></i></div></li>')
    }
    $(textElemt).text(`${Math.round(averageRating*10)/10} ${noteAfterScore || ''}`)
  }