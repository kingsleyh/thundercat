function AppListCtrl($scope, $http, Poller) {

    $scope.apps = Poller.data;
    $scope.performAction = function (action, app_id, context) {
        $http.get(context + 'services/' + action + '/' + app_id);
    };

}








