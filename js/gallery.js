

var $carouselMain = $('.carousel-main').flickity({
  pageDots: false,
});

var $carouselNav = $('.carousel-nav').flickity({
  contain: true,
  pageDots: false,
  prevNextButtons: false
});

$carouselNav.on( 'staticClick.flickity', function(  event, pointer, cellElement, cellIndex ) {
  if ( cellElement ) {
    $carouselMain.flickity( 'select', cellIndex );
  }
  
})

var $carouselMain1 = $('.carousel-main1').flickity({
  pageDots: false,
});

var $carouselNav1 = $('.carousel-nav1').flickity({
  contain: true,
  pageDots: false,
  prevNextButtons: false
});

$carouselNav1.on( 'staticClick.flickity', function(  event, pointer, cellElement, cellIndex ) {
  if ( cellElement ) {
    $carouselMain1.flickity( 'select', cellIndex );
  }
  
})


  
  