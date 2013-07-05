function AppListCtrl($scope, $http, Poller) {

    $scope.apps = Poller.data;
    $scope.performAction = function (action, app_id) {
        $http.get('services/' + action + '/' + app_id);
    };

}








