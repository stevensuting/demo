/* global data */
var buttonname;
var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);

app.controller("AppController", function ($scope, $http) {
    $scope.loadUsersrefresh = function ()
    {
var req = ocpu.call("rmysql_temp",{},
                // myname : myname
                        function (session) {
                            //to print in r console whatever returned by r 
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);
                         session.getObject(function(data){
        //data is the object returned by the R function
         // copy the object data to dim_data
         
          dim_data= data;

alert("first "+dim_data);
     });
      
     
     });

                            //if R returns an error, alert the error message
                            req.fail(function () {
                                alert("Server error: " + req.responseText);
                            });

                        });
            var output;
            obj = JSON.parse(dim_data);
            alert("second "+dim_data);

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
