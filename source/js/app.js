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
  var $detailThumbnail = $('.js-detail-thumbnail');
  var $detailSlider = $('.js-detail-slider');
  var $largeImg = $('.js-large-img');
  var $detailTab = $('.js-detail-tab');
  var $detailTabBlock = $('.js-detail-tab-block');
  var $detailCountProduct = $('.js-detail-count-product');
  var $detailCountUp = $('.js-detail-count-up');
  var $detailCountDown = $('.js-detail-count-down');

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
  $detailThumbnail.on('click', function(){
    $detailThumbnail.removeClass('active');
    $(this).addClass('active');
    var img = $(this).find('img').data('img');
    $largeImg.attr('src', img);
  });
  $detailTab.on('click', function(){
    if ($(this).hasClass('active')) {
      return false;
    }
    else {
      $detailTab.removeClass('active');
      $(this).addClass('active');
      $detailTabBlock.removeClass('active');
      var data = $(this).data('tab');
      $('.js-detail-tab-block[data-tabBlock="'+data+'"]').addClass('active');
    }
  });
  $detailSlider.owlCarousel({
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
  $detailCountProduct.on('keydown', function(e){
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
      (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
      (e.keyCode >= 35 && e.keyCode <= 39)) {
        return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });
  $detailCountDown.on('click', function(e){
    $detailCountProduct.val(function(i, oldval){
      if (oldval > 1) {
        return --oldval;
      }
      else {
        return 1;
      }
      e.stopImmediatePropagation();
    });
  });
  $detailCountUp.on('click', function(e){
    $detailCountProduct.val(function(i, oldval){
      return ++oldval;
    });
    e.stopImmediatePropagation();
  });
});
