(function() {
  var toggleSwitch;

  $.fn.spinaSwitch = function() {
    return this.each(function() {
      var input, klass, offIcon, onIcon;
      input = $(this);
      input.hide();
      if (input.is(':checked')) {
        klass = "checkbox activated";
      } else {
        klass = "checkbox";
      }
      onIcon = input.data('on') || "v";
      offIcon = input.data('off') || "x";
      return input.after('<a href="#' + input.attr("id") + '" class="' + klass + '">\
                  <span class="knob"></span>\
                  <i data-icon="' + onIcon + '"></i>\
                  <i data-icon="' + offIcon + '"></i>\
                </a>');
    });
  };

  $(document).on('click', 'a.checkbox', function(e) {
    return toggleSwitch(e);
  });

  $(document).on('touchend', 'a.checkbox', function(e) {
    return toggleSwitch(e);
  });

  toggleSwitch = function(e) {
    var checkbox, input;
    checkbox = $(e.currentTarget);
    input = $(checkbox.attr("href"));
    if (checkbox.hasClass('activated')) {
      checkbox.removeClass('activated');
      input.attr("checked", false);
    } else {
      checkbox.addClass('activated');
      input.attr("checked", true);
    }
    return false;
  };

}).call(this);
