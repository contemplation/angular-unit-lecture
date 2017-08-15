"use strict";

describe('auth module', function() {

  beforeEach(module('myApp.auth'));

  describe('Login Factory', function() {

      var $httpBackend, loginFactory;
      beforeEach(inject(function(_$httpBackend_, _loginFactory_) {
        $httpBackend = _$httpBackend_;
        loginFactory = _loginFactory_;
      }));

      it('should have "auth" method', function(){
        expect(loginFactory.auth).toBeDefined();
      });

      it('should return false on auth failure', function(){
        $httpBackend.whenPOST('/auth').respond(401);
        var authResult = loginFactory.auth('testName', 'testPass');
        $httpBackend.flush();
        authResult.then(function(result){
          expect(result).toBeFalsy();
        });
      });

      it('should return true on auth success', function(){
        $httpBackend.whenPOST('/auth').respond(200);
        var authResult = loginFactory.auth('testName', 'testPass');
        $httpBackend.flush();
        authResult.then(function(result){
          expect(result).toBeTruthy();
        });
      });

      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

  });

});
