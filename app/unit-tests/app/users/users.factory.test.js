"use strict";

describe('Users module', function() {

    beforeEach(module('myApp.users'));

    describe('Users Factory', function() {

        var UsersService, $httpBackend;
        beforeEach(inject(function(_$httpBackend_, _UsersService_) {
            $httpBackend = _$httpBackend_;
            UsersService = _UsersService_;
        }));

        it('should have "getUsers" method', function(){
            expect(UsersService.getUsers).toBeDefined();
        });

        it('"getUsers" method should return users', function(){
            var mockUsers = [{"name": "Bob"}, {"name": "Alice"}];
            $httpBackend.expectGET(/^.*users$/).respond(200, mockUsers);
            UsersService.getUsers().then(function(response){
                expect(response.data).toEqual(mockUsers);
            });
            $httpBackend.flush();
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });

});
