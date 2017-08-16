(function(angular) {
    'use strict';
    angular.module('myApp.users').factory('UsersService', function($http) {
        return {
            getUsers: function() {
                return $http.get('https://jsonplaceholder.typicode.com/users');
            }
        };
    });
})(angular);

