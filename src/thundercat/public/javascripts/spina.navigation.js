(function() {
  var closeNavigation, openNavigation, ready;

  ready = function() {
    if ($('nav#primary').length > 0) {
      $('body').prepend('<div id="navigation_panel" />');
    }
    $('#navigation_panel').append($('nav#primary').find('ul').first().clone());
    if ($('nav#secondary').length > 0) {
      $('nav#secondary ul').clone().addClass('secondary').appendTo('#navigation_panel');
      $('#navigation_panel ul.secondary').prepend('<li class="divider" />');
    }
    return $('#navigation_panel a').on('click', function() {
      closeNavigation();
      return Turbolinks.visit($(this).attr('href'));
    });
  };

  $(document).ready(ready);

  $(document).on('page:load', ready);

  $(document).on('click', 'a[data-toggle=navigation]', function() {
    $('html').toggleClass('navigation-open');
    return false;
  });

  $(document).on('click', '.navigation-open #wrapper', function() {
    return closeNavigation();
  });

  $(document).on('touchend', '.navigation-open #wrapper', function() {
    return closeNavigation();
  });

  openNavigation = function() {
    $('html').addClass('navigation-open');
    return false;
  };

  closeNavigation = function() {
    $('html').removeClass('navigation-open');
    return false;
  };

}).call(this);
