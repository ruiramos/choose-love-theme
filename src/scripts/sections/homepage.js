$(document).ready(function() {
  const homepageProductContainer = $('.homepage-product-grid');

  /**
   * Event handlers
   */

  // Product hovers
  $('.homepage-product').on('mouseenter', (e) => {
    homepageProductContainer.addClass('product-hovered');
    const t = $(e.target);
    const divContainer = t.closest('.homepage-product').parent();
    if(divContainer.attr('data-group')){
      homepageProductContainer.addClass('product-group-'+divContainer.attr('data-group'));
    }
  });

  $('.homepage-product').on('mouseleave', (e) => {
    homepageProductContainer.removeClass('product-hovered');
    homepageProductContainer.removeClass((i, classes) => {
      classes = classes || [];
      return classes.split(' ').filter((s) => s.indexOf('product-group-') === 0).join(' ')
    })
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
    createCookie('splash', 'true', 99);
    setTimeout(() => {
      $('body').removeClass('products-faded');
    }, 1000);
  });

  $('[data-hook=store-animated-scroll]').click((e) => {
    var target = $( $(e.delegateTarget).attr('href') );

    if( target.length ) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });

  // ScrollReveal for products
  window.sr = ScrollReveal({
    scale: 1,
    duration: 750,
    viewOffset: { top: 50, right: 0, bottom: 0, left: 0 }
  });

  sr.reveal('.homepage-product');
  sr.reveal('.scroll-reveal');

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
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
