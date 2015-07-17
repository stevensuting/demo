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
    
 
 $("#submitbutton").click(function(){
    var req1 = ocpu.call("printsummary", {mydata:mydata}, function(session1){
        var req2 = ocpu.call("agg", {mydata:mydata}, function(session2){
            //retrieve session console (async)
            session2.getConsole(function(output){
                $("#output").text(output);
            });
        });
    });
});
});
 
 /* function printsummary(mydata){
    //perform the request
    var req = ocpu.call("printsummary", {
      mydata : mydata
    }, function(session){
      session.getConsole(function(output){
        $("#output1").text(output);
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
  */
 /* function agg(mydata) {

  var req1 = ocpu.call("agg", {
            mydata: mydata
        }, function(session1) {
            session1.getConsole(function (output){
                $("#output1").text(output);
                document.write("last");
            });
            });
            }
            
$("#submitbutton2").on("click"(function(){ 
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



 /*function agg(mydata) {
        
       var req1 = ocpu.call("agg", {
            mydata: mydata
        }, function(session1) {
            session1.getConsole(function (output){
                $("#output1").text(output);
            });
        }).fail(function () {
            alert("Server error: " + req1.responseText);
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
/*function agg(mydata){
$("#submitbutton2").click(function(){
    var req1 = ocpu.call("agg",{
        mydata:mydata},function(session1){
        session1.getConsole(function(output){
            $("#output").text(output);
             printsummary(agg(mydata));
        });
        });
        
    });
}
});
*/
/*function agg(mydata) {
      document.write("helloo");
        var req1 = ocpu.call("agg", {
            mydata: mydata
        }, function (session1) {
            session1.getConsole(function (output) {
                $("#output").text(output);
            });
        }).fail(function () {
            alert("Server error: " + req1.responseText);
        });
    }
    
  $("#submitbutton2").on("click", function () {  
        printsummary(agg(mydata));
    });

});
*/