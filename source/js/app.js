$(document).ready(function(){
  var $window = $(window);
  var $body = $('body');
  var $menuBtn = $('.js-menu-btn');
  var $navBlock = $('.js-nav-block');
  var $menuItem = $('.js-main-menu-item');
  var $searchBtn = $('.js-search-btn');
  var $headerBlock = $('.js-header-block');
  var $btnDropdown = $('.js-btn-dropdown');
  var $menuDropdown = $('.js-menu-dropdown');
  var $popupLabel = $('.js-popup__label');
  var $formLabel = $('.js-form__label');
  var $homeSlider1 = $('.js-home-slider1');
  var $homeSlider2 = $('.js-home-slider2');

  $menuBtn.on('click', function(e){
    if ($window.outerWidth() >= 992) {
      $menuItem.toggleClass('active');
    }
    else {
      $navBlock.slideToggle(200);
    }
    e.stopImmediatePropagation();
  });
  $searchBtn.on('click', function(e){
    $headerBlock.addClass('active');
    e.stopPropagation();
  });
  $headerBlock.on('click', function(e){
    e.stopPropagation();
  });
  $btnDropdown.on('click', function(e){
    $(this).siblings().children('.js-menu-dropdown').slideUp(200);
    $(this).children('.js-menu-dropdown').slideToggle(200);
    e.stopImmediatePropagation();
  });
  $menuDropdown.on('click', function(e){
    e.stopPropagation();
  });
  $body.on('click', function(){
    $headerBlock.removeClass('active');
    $menuDropdown.slideUp(100);
  });
  $popupLabel.on('click', function() {
    $(this).addClass('popup__label--checked');
  });
  $formLabel.on('click', function() {
    $(this).addClass('form__label--checked');
  });
  $homeSlider1.owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $homeSlider2.owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});
