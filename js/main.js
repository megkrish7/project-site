---
layout: null
sitemap:
  exclude: 'yes'
---

function toggleMobileMenu() {
  $('.navigation-wrapper').toggleClass('visible');
  $('.btn-mobile-menu__icon').toggleClass('hidden');
  $('.btn-mobile-close__icon').toggleClass('hidden');
}

$(document).ready(function () {
  // Combined functionality for toggle buttons
  $('a.panel-button').click(function (e) {
    e.preventDefault();
    var targetSection = $(this).attr('href');

    // Check if the target section is already showing
    if ($(targetSection).hasClass('showing')) {
      $(targetSection).removeClass('showing').removeClass('animated slideInRight');
      $(targetSection).animate({'width': '0%'}, 400, function() {
          $(this).hide();
      });
    } else {
      // Hide other sections first
      $('.content-wrapper.showing').removeClass('showing').removeClass('animated slideInRight').hide();

      // Show the clicked section
      $(targetSection).show().css('width', '0%').animate({'width': '100%'}, 400, function() {
          $(this).addClass('showing animated slideInRight');
      });
    }
  });

  // Check if certain hashes are used to trigger button clicks
  if (window.location.hash === '#projects' || window.location.hash === '#about') {
      $('a[href="' + window.location.hash + '"]').click();
  }

  // Check the initial state of the navigation wrapper and toggle if necessary
  if (!$('.navigation-wrapper').hasClass('animated bounceInDown')){
      $('.navigation-wrapper').addClass('animated bounceInDown');
  }

  // Toggle mobile menu functionality
  $('.btn-mobile-menu').click(function () {
    toggleMobileMenu();
  });

  // Specific action for project buttons within navigation wrapper
  $('.navigation-wrapper .projects-button').click(function () {
    toggleMobileMenu();
  });

  // Adjust path as needed for non-root locations
  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }
});
