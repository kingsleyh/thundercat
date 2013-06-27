(function() {
  var hideModal, showModal;

  $.fn.modal = function() {
    return showModal($(this));
  };

  $(document).on('click', 'a[data-toggle="modal"]', function() {
    var link, modal;
    link = $(this);
    modal = $(link.attr('href'));
    return showModal(modal);
  });

  $(document).on('click', 'body.overlay', function() {
    return hideModal();
  });

  $(document).on('click', 'a[data-dismiss="modal"]', function() {
    return hideModal();
  });

  $(document).on('click', '.modal', function(e) {
    return e.stopPropagation();
  });

  hideModal = function() {
    $('body').removeClass('overlay');
    $('#overlay .modal').addClass('bounceOut');
    $('#overlay').fadeOut(300, function() {
      return $(this).remove();
    });
    return false;
  };

  showModal = function(element) {
    var modal;
    modal = element.clone();
    modal.addClass('animated flipInX');
    if ($('#overlay').length < 1) {
      $('body').append('<div id="overlay"></div>');
    }
    modal.css({
      "margin-top": -element.height()
    });
    modal.appendTo('#overlay');
    $('#overlay').fadeIn(200, function() {
      modal.show();
      return modal.animate({
        "margin-top": window.innerHeight / 8
      }, 200);
    });
    $('body').addClass('overlay');
    return false;
  };

}).call(this);
