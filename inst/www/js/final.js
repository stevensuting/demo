/* global data */

var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);

app.controller("AppController", function ($scope, $http) {
    $scope.loadUsersrefresh = function ()
    {
alert("hiiiiiiiiiiiiiiiii");
//        $.getJSON('./json/data.json', function (data) {
var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';
            var output;
            obj = JSON.parse(text);
$scope.UsersData = obj.employees;
alert($scope.UsersData);
            for (var i in obj.employees) {
                output = obj.employees[i].firstName + " " + obj.employees[i].lastName + "--" +obj.employees[i].joined.month;
                alert(output);
//                $scope.UsersData = output;
//                alert($scope.UsersData);
//                document.write("<div>");
//    for(var j = 0; j < key[i].length; j++)
//    {
//                document.write("<input type='button' class='btn btn-primary dropdown-toggle' value='" + data.users[i].firstName + "' onclick = call('" + data.users[i].firstName + "') />");

//    }
//                document.write("</div>");
            }

//        output+="</ul>";

//         document.getElementById("placeholder").innerHTML=output;
//        });

    }


    function call(aaa)
    {
        alert("asdasd  " + aaa);

    }
});


var hello= rmysql.data;
document.write(data);