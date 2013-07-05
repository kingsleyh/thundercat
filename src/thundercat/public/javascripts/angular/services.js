angular.module('thundercatServices',[]).
factory('Poller', function($http, $timeout) {
  var data = { content: {}, calls: 0 };
  var poller = function() {
    $http.get('services/apps').then(function(r) {
      data.content = r.data;
      data.calls++;
      $timeout(poller, 1000);
    });

  };
  poller();

  return {
    data: data
  };
});