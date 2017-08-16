(function(angular) {
    'use strict';

    describe('users module', function () {
        var $httpBackend, scope, controller;
        beforeEach(module('myApp.users'));

        describe('Users controller', function () {
            beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
                $httpBackend = _$httpBackend_;
                scope = $rootScope.$new();
                controller = $controller('UsersCtrl', {
                    '$scope': scope
                });
            }));
            it('should set the page title', function () {
                $httpBackend.whenGET(/^.*users$/).respond(200);
                $httpBackend.flush();
                expect(scope.title).toBe('USER LIST');
            });

            it('should set users', inject(function($httpBackend) {
                var mockUsers = [{"name": "Bob"}, {"name": "Alice"}];
                $httpBackend.expectGET(/^.*users$/).respond(200, mockUsers);
                $httpBackend.flush();
                expect(scope.users).toEqual(mockUsers);
            }));

            it('should broadcast error if user list cannot be loaded', inject(function($httpBackend) {
                $httpBackend.expectGET(/^.*users$/).respond(500);
                spyOn(scope, '$broadcast');
                $httpBackend.flush();
                expect(scope.$broadcast).toHaveBeenCalledWith('error', 'Failed to load user list');
            }));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });
        });
    });
})(angular);