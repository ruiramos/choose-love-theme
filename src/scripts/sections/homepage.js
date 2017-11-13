$(document).ready(function() {
  const homepageProductContainer = $('.homepage-product-grid');

  $('.homepage-product').on('mouseenter', () => {
    homepageProductContainer.addClass('product-hovered');
  });

  $('.homepage-product').on('mouseleave', () => {
    homepageProductContainer.removeClass('product-hovered');
  });

  $('[data-hook=dismiss-splash]').click(() => {
    hideSplash();
  });

  if(window.location.pathname === '/' && (!localStorage || !localStorage.dev)){
    showSplash();
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
