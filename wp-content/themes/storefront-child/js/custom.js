(function($) {
  $( window ).load( function() {
    $('.header-cart-toggle').click( function(e) {
      $('#header-cart').toggleClass('visible');
      $('body').toggleClass('cart-open');
      e.preventDefault();
    });
    $('.header-menu-toggle').click( function(e) {
      $('#header-menu').toggleClass('visible');
      $('.storefront-handheld-footer-bar').toggleClass('visible');
      $('body').toggleClass('cart-open');
      e.preventDefault();
    });
    $('.header-menu').on('click', 'li.menu-item-has-children > a', function(e) {
      e.preventDefault();
      $(this).siblings('ul.sub-menu').addClass('expand');
      $('.header-menu-back').addClass('visible');
      $(this).closest('ul').addClass('expand');
    });
    $('.header-menu .header-menu-back').click( function(e) {
      $('.header-menu ul').removeClass('expand');
      $(this).removeClass('visible');
      $(this).closest('ul').addClass('covered');
    });

    $('.site-header .site-search').focusin(function(e) {
      $(this).find('.search-clear-btn').removeClass('hidden');
    });

    $('.site-header .site-search .search-field').blur(function(e) {
      $(this).val('');
      $(this).closest('.site-search').find('.search-clear-btn').addClass('hidden');
    });

    $(".search-clear-btn").click(function(){
      $(this).closest('.site-search').find(".search-field").blur();
    });

    $('.carousel-images').slick({
      arrows: false,
      asNavFor: '.carousel-captions'
    });
    $('.carousel-captions').slick({
      prevArrow: '<button type="button" class="control-btn btn-prev">&larr;</button>',
      nextArrow: '<button type="button" class="control-btn btn-next">&rarr;</button>',
      appendArrows: '.carousel-controls',
      asNavFor: '.carousel-images'
    });
    $('.review-form-toggle').click(function(e){
      $("#review_form_wrapper").toggleClass('hidden');
    });

    $('.products-carousel').slick({
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '20%',
      prevArrow: '<button type="button" class="control-btn btn-prev"></button>',
      nextArrow: '<button type="button" class="control-btn btn-next"></button>',
    });

    $('select.orderby').select2({
      minimumResultsForSearch: -1,
    });

    /**
     * Click 'Edit' to show edit forms in /my-account page
     */
    $('.myaccount-edit-link, .myaccount-cancel-link').click(function(e){
      e.preventDefault();
      var type = $(this).data('type');
      $('#my-'+type+'-edit').toggleClass('d-none');
      $('#my-'+type+'-block').toggleClass('d-none');
      $('#my-'+type+'-form').toggleClass('d-none');
      $('.country_select, .state_select').selectWoo();
    });
  });
})(jQuery);
