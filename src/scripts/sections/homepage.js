$(document).ready(function() {
  const homepageProductContainer = $('.homepage-product-grid');

  /**
   * Event handlers
   */

  // Product hovers
  $('.homepage-product').on('mouseenter', () => {
    homepageProductContainer.addClass('product-hovered');
  });

  $('.homepage-product').on('mouseleave', () => {
    homepageProductContainer.removeClass('product-hovered');
  });

  // Main menu toggle
  $('[data-hook=close-main-nav]').click((e) => {
    e.preventDefault();
    $('body').removeClass('menu-in');
  });

  $('[data-hook=open-main-nav]').click((e) => {
    e.preventDefault();
    $('body').addClass('menu-in');
  });

  // Main menu click
  $('.main-nav a').click(() => {
    $('body').removeClass('menu-in');
  });

  // Splash click
  $('[data-hook=dismiss-splash]').click(() => {
    $('body').addClass('products-faded');
    hideSplash();
    setTimeout(() => {
      $('body').removeClass('products-faded');
    }, 1000);
  });

  /**
   * Splash screen
   */
  if(window.location.pathname === '/' && (!localStorage || !localStorage.dev)){
    showSplash();
  } else {
    $('body').removeClass('products-faded');
  }

});

function showSplash(){
  $('.splashpage').css('display', 'block');
  $('body').addClass('remove-overflow');
  setTimeout(() => { $('.splashpage').addClass('in'); }, 1);
}

function hideSplash(){
  $('.splashpage').removeClass('in');
  $('body').removeClass('remove-overflow');
  setTimeout(() => {
    let splash = $('.splashpage');
    splash.remove();
  }, 300);
}
