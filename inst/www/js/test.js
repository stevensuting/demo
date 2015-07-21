  $(document).ready(function(){
      $("#submitbutton").on("click", function(){
        //disable the button to prevent multiple clicks
        $("#submitbutton").attr("disabled", "disabled");
        
        //read the value for 'myname'
       // var myname = $("#namefield").val();
        var a =2 ;
        var b =2 ;
        //perform the request
        var req = ocpu.call("sum",{
          a :a,
          b :b
     },function(output){
          $("#output").text(output);
        });
        
        //if R returns an error, alert the error message
        req.fail(function(){
          alert("Server error: " + req.responseText);
        });
        
        //after request complete, re-enable the button 
        req.always(function(){
          $("#submitbutton").removeAttr("disabled");
        });
      });
    });