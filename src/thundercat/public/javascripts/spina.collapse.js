(function() {

  jQuery(function() {
    return $(document).on('click', '[data-collapse]', function() {
      var target;
      target = $(this).data('collapse');
      $(target).slideToggle();
      return false;
    });
  });

}).call(this);
