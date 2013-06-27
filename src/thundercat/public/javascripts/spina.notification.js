(function() {

  $(document).on('click', 'a[data-dismiss="notification"]', function() {
    return $(this).parent('.notification').fadeOut(200, function() {
      return $(this).remove();
    });
  });

}).call(this);
