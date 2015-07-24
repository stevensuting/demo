//document.write("hello");
var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);

app.controller("AppController", function ($scope, $http) {
var data;
 var dim_data
 
$scope.loaddatarefresh = function () {
        //disable the button to prevent multiple clicks
//        $("#submitbutton").attr("disabled", "disabled");

        //perform the request
        var req = ocpu.call("rmysql", {},
                // myname : myname
                        function (session) {
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);
                         session.getObject(function(data){
        //data is the object returned by the R function
         
            dim_data= data;
alert(dim_data);
     });

                            //if R returns an error, alert the error message
                            req.fail(function () {
                                alert("Server error: " + req.responseText);
                            });

                            //after request complete, re-enable the button 
                            req.always(function () {
                                $("#submitbutton").removeAttr("disabled");
                            });
                        });
            });
};
});
 