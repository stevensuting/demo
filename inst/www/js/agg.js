/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {


    function printsummary(mydata) {
        //perform the request
        var req = ocpu.call("printsummary", {
            mydata: mydata
        }, function (session) {
            session.getConsole(function (output) {
                $("#output2 code").text(output);
            });
        }).fail(function () {
            alert("Server error: " + req.responseText);
        });
    }
  
       function agg(mydata) {
        //perform the request
        var req = ocpu.call("agg", {
            mydata: mydata
        }, function (session) {
            session.getConsole(function (output) {
                $("#output2 code").text(output);
            });
        }).fail(function () {
            alert("Server error: " + req.responseText);
        });
    }
    
       $("#submitbutton2").on("click", function () {  
        printsummary(agg(mydata));
    });
    
    
    
    
    
    
    
    
});