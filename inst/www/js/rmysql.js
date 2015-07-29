// globally declare the variables 
var data;
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
                         session.getObject(function(data,fj){
        //data is the object returned by the R function
         // copy the object data to dim_data
         document.write("hello"+data);
         
           // dim_data= data;

//alert(dim_data);
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

 
