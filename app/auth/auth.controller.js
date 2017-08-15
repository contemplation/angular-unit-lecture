'use strict';

angular.module('myApp.auth').controller('LoginCtrl', function($scope, loginFactory) {
  $scope.title = 'Authorization Required';
  $scope.username = '';
  $scope.password = '';
  $scope.authorizate = loginFactory.auth;
  $scope.none = '';
});
