"use strict";

describe('auth module', function() {
  var scope, controller;
  beforeEach(module('myApp.auth'));

  describe('Login controller', function() {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('LoginCtrl', {
        '$scope': scope
      });
    }));
    it('sets the page title', function() {
      expect(scope.title).toBe('Authorization Required');
    });

    it('initializes username variable', function() {
      expect(scope.username).toBeDefined();
    });

    it('initializes password variable', function() {
      expect(scope.password).toBeDefined();
    });
  });
});
