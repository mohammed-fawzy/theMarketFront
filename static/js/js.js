/*
 * Responsee JS - v6 - 2019-06-27
 * https://www.myresponsee.com
 * Copyright 2019, Vision Design - graphic zoo
 * Free to use under the MIT license.
*/
jQuery(document).ready(function($) {
  //loader
  $("#loader-wrapper").fadeOut(1000);
  new WOW().init();
  //nav bar top
   // Sticky Nav Bar
   $(window).scroll(function() {
    if ($(this).scrollTop() > 20){  
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });
  //Responsee eside nav

  //Responsee nav
  // Add nav-text before top-nav
  $('.top-nav').before('<p class="nav-text"><span></span></p>');   
  $('.top-nav > ul > li ul').each(function(index, element) {
    var count = $(element).find('li').length;
    var content = '<span class="count-number"> ' + count + '</span>';
    $(element).closest('li').children('a').append(content);
  });
  $('.top-nav > ul li:has(ul)').addClass('submenu');
  $('.top-nav > ul ul li:has(ul)').addClass('sub-submenu').removeClass('submenu');
  $('.top-nav > ul li.submenu > a').attr('aria-haspopup', 'true').click(function() { 
    //Close other open sub menus
    $('.top-nav > ul li.submenu > ul').removeClass('show-ul', 'fast'); 
    $('.top-nav > ul li.submenu:hover > ul').toggleClass('show-ul', 'fast');
  }); 
  $('.top-nav > ul ul > li.sub-submenu > a').attr('aria-haspopup', 'true').click(function() {  
    //Close other open sub menus
    $('.top-nav ul ul li > ul').removeClass('show-ul', 'fast');  
    $('.top-nav ul ul li:hover > ul').toggleClass('show-ul', 'fast');   
  });
  //Mobile navigation
  $('.nav-text').click(function() { 
    $("body").toggleClass('show-menu');
  });  
 
  
});










    /**********loader******************/

 /**********scroll******************/
/* ------------------------top---------------------------*/
$(document).ready(function() {
var scroltopbtn = $("#scrollUp");
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    scroltopbtn.fadeIn();
         
  } else {
    $(scroltopbtn).fadeOut();
  }
   
});
scroltopbtn.on('click', function () {
  $('html , body').animate({
    scrollTop: 0
  }, 600);
});
});