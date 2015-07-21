/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $("#submitbutton").on("click", function () {
        //disable the button to prevent multiple clicks
        $("#submitbutton").attr("disabled", "disabled");

        //perform the request
        var req = ocpu.call("sum", {},
                // myname : myname
                        function (session) {
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);
                                session.getObject(function(data){
        //data is the object returned by the R function
        alert("hello " + data);
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