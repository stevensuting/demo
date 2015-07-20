/* global mydata, outtxt */

$(document).ready(function(){
  
  function uploadcsv(file, header){
    //disable the button during upload
    $("#submitbutton").attr("disabled", "disabled");        
    
    //perform the request
        var req_printsummary = ocpu.call("readcsv", {
      file : file,
      header : header
    }, function(session){
      //on success call printsummary()
      //on success call agg()
      printsummary(session);
       req_printsummary.fail(function(){
      alert("Server error: " + req.responseText);
    });
    
    //after request complete, re-enable the button 
    req_printsummary.always(function(){
      $("#submitbutton").removeAttr("disabled");
  });
      
    });
    }
    function uploadcsv1(file, header){
    //disable the button during upload
    
     $("#submitbutton1").attr("disabled", "disabled"); 
    //perform the request
        var req_agg = ocpu.call("readcsv", {
      file : file,
      header : header
    }, function(session){
      //on success call printsummary()
      //on success call agg()
     
      agg(session);
    });
    }
    //if printsummary returns an error, alert the error message
   
  //if agg returns an error, alert the error message
  req_agg.fail(function(){
      alert("Server error: " + req.responseText);
    });
    
    //after request complete, re-enable the button 
    req_agg.always(function(){
      $("#submitbutton1").removeAttr("disabled");
  });
  }

/*$("$submitbutton").click(function(){
    var req = ocpu.call("agg",{
        mydata : mydata},function(session){
        session.getConsole(function(output){
            $("#output").text(output);
        });
        });
    });
});
*/
function printsummary(mydata){
    
    var  req_printsummary = ocpu.call("printsummary", {
      mydata : mydata
    },function(session){
      session.getConsole(function(output){
        $("#output").text(output);
      });
    }).fail(function(){
      alert("error " +  req_printsummary.responseText);
    });        
  }
  
  $("#submitbutton").on("click", function(){
    
    
    var myheader = $("#header").val() == "true";
    var myfile = $("#csvfile")[0].files[0];
    
    if(!myfile){
      alert("No file selected.");
      return;
    }
    
    uploadcsv(myfile, myheader);        
  });


function agg(mydata){
    
    var  req_agg = ocpu.call("agg", {
      mydata : mydata
    },function(session){
      session.getConsole(function(output){
        $("#output_agg").text(output);
      });
    }).fail(function(){
      alert("error " +  req_agg.responseText);
    });        
  }
  
  $("#submitbutton1").on("click", function(){
    
    
    var myheader = $("#header").val() == "true";
    var myfile = $("#csvfile")[0].files[0];
    
    if(!myfile){
      alert("No file selected.");
      return;
    }
    
    uploadcsv1(myfile, myheader);        
  });
});

           
            
     


 
/* $("#submitbutton").click(function(){
    var req1 = ocpu.call("printsummary", {mydata:mydata}, function(session1){
        var req2 = ocpu.call("agg", {mydata:mydata}, function(session2){
            //retrieve session console (async)
            session2.getConsole(function(output){
                $("#output").text(output);
            });
        });
    });
});
});*/
 
  /*function printsummary(mydata){
    //perform the request
    var req = ocpu.call("printsummary", {
      mydata : mydata
    }, function(session){
      session.getConsole(function(output){
        $("#output").text(output);
      });
      var req1 = ocpu.call("agg",{
          mydata : mydata
      }, function(session1){
          session.getConsole(function(output){
              $("#output").text(Output)      
      });
    }).fail(function(){
      alert("Server error: " + req.responseText);
    });        
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
  }
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