"use strict";

var app = angular.module('myApp.auth');

app.directive('disableOnRequest', function($http) {
  return {
    restrict: 'A',
    link: function(scope, elem) {
      scope.$watch(
        function() {
          return $http.pendingRequests.length;
        },
        function(newVal) {
          if (newVal) {
            elem.attr("disabled", "disabled");
          } else {
            elem.removeAttr("disabled");
          }
        }
      );
    },
  };
});
