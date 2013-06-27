(function() {
  var fixHelper, ready;

  ready = function() {
    return $('table.sortable tbody').sortable({
      helper: fixHelper,
      update: function() {
        return $.post($(this).data('update-url'), $(this).sortable('serialize'));
      }
    }).disableSelection();
  };

  fixHelper = function(e, ui) {
    $('.ui-sortable-placeholder').height($(this).height());
    ui.children().each(function() {
      return $(this).width($(this).width());
    });
    return ui;
  };

  $(document).ready(ready);

  $(document).on('page:load', ready);

}).call(this);
