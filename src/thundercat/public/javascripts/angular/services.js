//angular.module('thundercatServices', ['ngResource']).
//    factory('App', function($resource){
//        return $resource('services/apps', {}, {
//            query: {method:'GET', params:{}, isArray:true}
//        });
//    });





angular.module('thundercatServices',[]).
factory('Poller', function($http, $timeout) {
        var data = { response: {}, calls: 0 };
        var poller = function() {
            $http.get('services/apps').then(function(r) {
                data.response = r.data;
                data.calls++;
                $timeout(poller, 1000);
            });

        };
        poller();

        return {
            data: data
        };
});