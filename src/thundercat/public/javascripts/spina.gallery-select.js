(function() {

  $.fn.galleryselect = function() {
    return this.each(function() {
      var gallery;
      gallery = $(this);
      if (gallery.data('multiselect') !== void 0) {
        return gallery.find('.item').click(function() {
          var checkbox;
          $(this).toggleClass('selected');
          checkbox = $(this).find('input:checkbox');
          return checkbox.prop("checked", !checkbox.prop("checked"));
        });
      } else {
        return gallery.find('.item').click(function() {
          gallery.find('.item').removeClass('selected');
          gallery.find('.item input').attr('checked', false);
          $(this).toggleClass('selected');
          return $(this).find('input').attr('checked', true);
        });
      }
    });
  };

}).call(this);
