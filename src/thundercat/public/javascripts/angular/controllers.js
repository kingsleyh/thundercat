function AppListCtrl($scope, Poller) {

    $scope.apps = Poller.data;

//    $http.get('services/apps').success(function(data) {
//        $scope.apps = data;
//    });

//
//        (function tick() {
//            $scope.apps = App.query(function(){
//                $timeout(tick, 5000);
//            });
//        })();




}

