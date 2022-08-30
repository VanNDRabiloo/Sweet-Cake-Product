(function( jQuery ){
    $('.note-cpn .expand-or-shrink').click(function() {
      if(!$(this).parent().hasClass('expand')){
        $(this).parent().addClass('expand')
        $(this).text('– 表示を減らす')
      } else {
         $(this).parent().removeClass('expand')
        $(this).text('+ もっと見る')
      }
    })
  })( window.GemQuery || jQuery );