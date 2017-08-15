"use strict";

angular.module('myApp.auth').factory('loginFactory', function($http, $q) {
  return {
    auth: function(username, password) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: '/auth',
        data: {
          name: username,
          pass: password
        }
      }).then(successFn, errorFn);

      function successFn() {
        deferred.resolve(true);
      };

      function errorFn() {
        deferred.resolve(false);
      };

      return deferred.promise;
    }
  };
});
