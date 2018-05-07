module.exports = function(app) {
  app.controller('SimpleController',
    ['$scope', '$http', function($scope, $http) {

      $scope.loadingDone = true;
      $scope.errors = [];
      $scope.wheelposition = 0;
      var maxwheel = 15;

      $scope.dismissError = function(err) {
        $scope.errors.splice($scope.errors.indexOf(err), 1);
      };

      $scope.left = function() {
        $scope.wheelposition -= 1;
        if ($scope.wheelposition < 0) {
          $scope.wheelposition = maxwheel;
        }
      };

      $scope.right = function() {
        $scope.wheelposition += 1;
        if ($scope.wheelposition > maxwheel) {
          $scope.wheelposition = 0;
        }
      };

      $http.linterPlease = '';
    }]);
};
