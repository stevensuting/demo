/* global data */
var buttonname;
var dimen;
var char111 = [];
var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);

app.controller("AppController", function ($scope, $http) {
    $scope.loadUsersrefresh = function ()
    {
var req = ocpu.call("rmysql_doublelist",{},
                // myname : myname
                        function (session) {
                            //to print in r console whatever returned by r 
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);
                         session.getObject(function(data){
        //data is the object returned by the R function
         // copy the object data to dim_data
         
          dim_data= data;
          
          obj=JSON.parse(dim_data);
//          alert(obj.Variable_Type);
//          alert(obj._row);
//$scope.UsersData = obj;
for (var i in obj) {
   // if(obj.Variable_Type="cha
  
//                output = obj[i].Variable_Type;
////                alert(obj.Variable_Type);
//                alert(output);
                if(obj[i].Variable_Type ==="character")
                {
                   
                    alert("1  "+obj[i]._row);
                  char111[i] = obj[i]._row; 
//                  alert(char111.join(''));
                            
                  
                }
                else{
                    alert("0  "+obj[i]._row);
                }
            }
            char11=rtrim(char111,',');
            alert("value== "+ char11);
            $scope.UsersData = char11;
alert("first "+$scope.UsersData);
     });
//     $scope.UsersData = JSON.parse(dim_data);
     });

                            //if R returns an error, alert the error message
//                            req.fail(function () {
//                                alert("Server error: " + req.responseText);
//                            });
//$scope.UsersData = JSON.parse(dim_data);
                        });
//            var output;
//            obj = JSON.parse(dim_data);
//            alert("second"+dim_data);

//$scope.UsersData = JSON.parse(dim_data);
//alert($scope.UsersData);
//            for (var i in obj) {
//                output = obj.char;
////                alert(obj.int);
//            }
    };
    
    $scope.Clicked = function ()
    {
        buttonname = event.target.name;
        alert(buttonname);
        var dim = buttonname;
        var req = ocpu.call("getaggrdata", {
                        dim: dim
                    }, function (session) {
                        session.getConsole(function(outtxt){
                            $("#output1").text(outtxt);
                            session.getObject(function(dimen)
                            {
                                dimen_data= dimen;
          
          obj1=JSON.parse(dimen_data);
//          alert(obj.Variable_Type);
//          alert(obj._row);

for (var j in obj1) {
                output = obj1[j]._row;
//                alert(obj._row);
                alert(output);
            }

                            });
                        });
                       
                    });
        
        
        
    };
    
});

