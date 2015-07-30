/* global data */
var buttonname;
var dimen;
var char111 = [];
var char222 = [];
var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);

app.controller("AppController", function ($scope, $http) {
    $scope.loadUsersrefresh = function ()
    {
        var req = ocpu.call("rmysql_doublelist", {},
                // myname : myname
                        function (session) {
                            //to print in r console whatever returned by r 
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);
                                session.getObject(function (data) {
                                    //data is the object returned by the R function
                                    // copy the object data to dim_data

                                    dim_data = data;
                                    obj = JSON.parse(dim_data);
                                    for (var i in obj) {
                                        if (obj[i].Variable_Type === "character")
                                        {
                                            alert("1  " + obj[i]._row);
                                            char111[i] = obj[i]._row;
                                        }
                                        else {
                                            alert("0  " + obj[i]._row);
                                            char222[i] = obj[i]._row;
                                        }
                                    }
                                    $scope.UsersData = char111;
                                    $scope.UsersMeasure = char222;
                                    alert("first " + $scope.UsersData);
                                    alert("second " + $scope.UsersMeasure);
                                });
                            });
                        });

            };

    $scope.Clicked = function ()
    {
        buttonname = event.target.name;
//        alert(buttonname);
        var dim = buttonname;
        alert(dim);
        var req = ocpu.call("getDim", {
            dim: dim
        }, function (session) {
            session.getConsole(function (outtxt) {
                $("#output1").text(outtxt);
                session.getObject(function (dimen)
                {
//                    alert(dimen);
                    dimen_data = dimen;
//                    alert(dimen_data);
                    obj1 = JSON.parse(dimen_data);
//          alert(obj.Variable_Type);
//          alert(obj._row);
                    alert("OBJ "+obj1);

                    for (var j in obj1) {
                        output = obj1[j].Dimension;

                        alert("output "+output);
                    }

                });
            });

        });

//writing the Chart data code

    };

});

