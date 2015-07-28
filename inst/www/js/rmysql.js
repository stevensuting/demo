// globally declare the variables 
/*var data;
 var dim_data;
 $(document).ready(function () {
     // on click call this function
    $("#submitbutton").on("click", function () {
        //disable the button to prevent multiple clicks
        $("#submitbutton").attr("disabled", "disabled");
                //perform the request
        var req = ocpu.call("rmysql",{},
                // myname : myname
                        function (session) {
                            //to print in r console whatever returned by r 
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);
                         session.getObject(function(data){
        //data is the object returned by the R function
         // copy the object data to dim_data
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
});
});
 
*/


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global data */

$(document).ready(function () {
    // on click of the button call this function
    $("#submitbutton").on("click", function () {
        //disable the button to prevent multiple clicks
        $("#submitbutton").attr("disabled", "disabled");

        //perform the request
        var req = ocpu.call("rmysql", {},
                // myname : myname
                        function (session) {
        // to prinnt the data in r console at where the the id has been assinged
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);
                                session.getObject(function(data){
        //data is the object returned by the R function
       // pass the data object to call function & invoke function call
        call (data);
    });
                                

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
});
// defintion of function call
function call (data)
{
    // to print what the object data returned by r function 
    document.write("hello the sum is" + data);
}