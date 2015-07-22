/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global mydata, outtxt, req_agg */

$(document).ready(function () {

    function uploadcsvprintsummary(file, header) {
        //disable the button during upload
        $("#submitbutton").attr("disabled", "disabled");

        //perform the request
        var req_printsummary = ocpu.call("readcsv", {
            file: file,
            header: header
        }, function (session) {
session.getConsole(function (output) {
                $("#output").text(output);
                 session.getObject(function(file){
        //data is the object returned by the R function
        //alert("hello" + data);
        call (file);
    });            //on success call printsummary()
            
           
            
            req_printsummary.fail(function () {
                alert("Server error: " + req_printsummary.responseText);
            });

            //after request complete, re-enable the button 
            req_printsummary.always(function () {
                $("#submitbutton").removeAttr("disabled");
            });

        });
    });
    }
  /*  function uploadcsvagg(file, header) {
        //disable the button during upload

        $("#submitbutton1").attr("disabled", "disabled");
        //perform the request
        var req_agg = ocpu.call("readcsv", {
            file: file,
            header: header
        }, function (session) {
            
            //on success call agg()

            agg(session);
        
        //if agg returns an error, alert the error message
        req_agg.fail(function () {
            alert("Server error: " + req_agg.responseText);
        });

        //after request complete, re-enable the button 
        req_agg.always(function () {
            $("#submitbutton1").removeAttr("disabled");
        });
    });
    }
*/
  
  function printsummary(mydata) {

        var req_printsummary = ocpu.call("printsummary", {
            mydata: mydata
        }, function (session) {
            session.getConsole(function (output) {
                $("#output").text(output);
                 
   
            });
        }).fail(function () {
            alert("error " + req_printsummary.responseText);
        });
    }

    $("#submitbutton").on("click", function () {


        var myheader = $("#header").val() == "true";
        var myfile = $("#csvfile")[0].files[0];

        if (!myfile) {
            alert("No file selected.");
            return;
        }

        uploadcsvprintsummary(myfile, myheader);
    });


       
});



  /*function call (file)
{
    document.write("hello the data is" + file);
}
*/

 function callprint (data)
{
    document.write("hello the data is" + data);
}
