/* global data */



var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);

app.controller("AppController", function ($scope, $http) {
    $scope.loadUsersrefresh = function ()
    {
//        alert("cLLING");
            var output;
            obj = JSON.parse(dim_data);
            alert(dim_data);
//            alert(obj);
            

$scope.UsersData = obj;
//alert($scope.UsersData);
            for (var i in obj) {
                output = obj.char;
//                alert(obj.int);
            }
    };
    
    $scope.Clicked = function ()
    {
        buttonname = event.target.name;
        alert(buttonname);
    };
    
});
