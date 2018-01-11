$(document).ready(function(){
  var $menuBtn = $('.js-menu-btn');
  var $navBlock = $('.js-nav-block');
  var $menuItem = $('.js-main-menu-item');
  var $searchBtn = $('.js-search-btn');
  var $headerBlock = $('.js-header-block');
  var $btnDropdown = $('.js-btn-dropdown');
  var $menuDropdown = $('.js-menu-dropdown');

  $menuBtn.on('click', function(){
    if ($(window).outerWidth() >= 992) {
      $menuItem.toggleClass('active');
    }
    else {
      $navBlock.slideToggle(200);
    }
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
    e.stopPropagation();
  });
  $menuDropdown.on('click', function(e){
    e.stopPropagation();
  });
  $('html, body').on('click', function(){
    $headerBlock.removeClass('active');
    $menuDropdown.slideUp(100);
  });
});
