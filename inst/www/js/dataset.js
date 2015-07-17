/* global mydata, outtxt */

$(document).ready(function(){
  
  function uploadcsv(file, header){
    //disable the button during upload
    $("#submitbutton").attr("disabled", "disabled");        
    
    //perform the request
    var req = ocpu.call("readcsv", {
      file : file,
      header : header
    }, function(session){
      //on success call printsummary()
      printsummary(session);
    });
    
    //if R returns an error, alert the error message
    req.fail(function(){
      alert("Server error: " + req.responseText);
    });
    
    //after request complete, re-enable the button 
    req.always(function(){
      $("#submitbutton").removeAttr("disabled")
  });
  }
    
 
  function printsummary(mydata){
    //perform the request
    var req = ocpu.call("printsummary", {
      mydata : mydata
    }, function(session){
      session.getConsole(function(output){
        $("#output").text(output);
      });
    }).fail(function(){
      alert("Server error: " + req.responseText);
    });        
  }
  
  $("#submitbutton").on("click", function(){
    
    //arguments
    var myheader = $("#header").val() == "true";
    var myfile = $("#csvfile")[0].files[0];
    
    if(!myfile){
      alert("No file selected.");
      return;
    }
    
    uploadcsv(myfile, myheader);        
  });
  
$("#submitbutton2").click(function(){
   
var req1 = ocpu.call("agg", {
            mydata: mydata
        }, function (session1) {
            session1.getConsole(function (outtxt){
                $("#output1").text(outtxt);
                document.write("last");
            });
            });
            });
            });



 /*function agg(mydata) {
        //perform the request
       var req = ocpu.call("agg", {
            mydata: mydata
        }, function (session) {
            session.getConsole(function (output){
                $("#output code").text(output);
            });
        }).fail(function () {
            alert("Server error: " + req.responseText);
        });
    }
    
  $("#submitbutton2").on("click", function () {  
        
        var myheader = $("#header").val() == "true";
    var myfile = $("#csvfile")[0].files[0];
    
    if(!myfile){
      alert("No file selected.");
      return;
    }
    
    uploadcsv(myfile, myheader);
    });

});
 

*/

