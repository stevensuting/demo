/* global data */

var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);

app.controller("AppController", function ($scope, $http) {
    $scope.loadUsersrefresh = function ()
    {

            var output;
            obj = JSON.parse(dim_data);

$scope.UsersData = obj;

            for (var i in obj) {
                output = obj.char;

            }

    };
   
});
