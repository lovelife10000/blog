/**
 * Created by v_lljunli on 2017/5/10.
 */

/*
 * 所有用户 组
 * */
app.controller('usersGroup', ['$scope', '$http', function ($scope, $http) {
  $http({
    method: 'GET',
    url: 'users_group2',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(function success(res) {
    $scope.data = res.data;
  }, function error(res) {

  });
}]);