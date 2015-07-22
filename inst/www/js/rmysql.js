//document.write("hello");
$(document).ready(function () {
    $("#submitbutton").on("click", function () {
        //disable the button to prevent multiple clicks
        $("#submitbutton").attr("disabled", "disabled");

        //perform the request
        var req = ocpu.call("rmysql", {},
                // myname : myname
                        function (session) {
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);

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
