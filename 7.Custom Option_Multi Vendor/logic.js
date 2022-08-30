(function( jQuery ){
    $('.wk-slider.round').each((index, item) => {
      $(item).click(() => {
        // if($($(item).parent()?.[0]).next()?.[0].disabled)
        $(item).toggleClass('active')
      })
    })
  })( window.GemQuery || jQuery );