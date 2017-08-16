(function(angular) {
    'use strict';
    angular.module('myApp.users').controller('UsersCtrl', function($scope, UsersService) {
        $scope.title = 'USER LIST';
        UsersService.getUsers().then(function (response) {
            $scope.users = response.data;
        }).catch(function () {
            $scope.$broadcast('error', 'Failed to load user list');
        });
    });
})(angular);