(function() {

  $(document).on('click', '.tabs li a', function() {
    var link, tabs;
    link = $(this);
    tabs = link.parents('.tabs');
    $('.tab-content').removeClass('active');
    tabs.find('li').removeClass('active');
    link.parent('li').addClass('active');
    $(link.attr('href')).addClass('active');
    return false;
  });

}).call(this);
