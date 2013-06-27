(function() {
  var closeDropdown;

  jQuery(function() {
    $(document).on('click', 'body.dropdown', function() {
      return closeDropdown();
    });
    $(document).on('click', '[data-trigger="dropdown"]', function() {
      var body, dropdown, trigger;
      trigger = $(this);
      dropdown = trigger.siblings('ul');
      body = $('body');
      if (body.hasClass('dropdown')) {
        trigger.removeClass('button-active');
        body.removeClass('dropdown');
        dropdown.hide();
      } else {
        trigger.addClass('button-active');
        body.addClass('dropdown');
        dropdown.show();
      }
      return false;
    });
    return $(document).on('click', '[data-dropdown] ul', function(e) {
      return e.stopPropagation();
    });
  });

  closeDropdown = function() {
    $('body').removeClass('dropdown');
    $('[data-dropdown] ul').hide();
    $('[data-trigger="dropdown"]').removeClass('button-active');
    return false;
  };

}).call(this);
