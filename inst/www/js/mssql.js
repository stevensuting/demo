/*$(document).ready(function () {
$("submitbutton").click(function(){
    var req_agg = ocpu.call("agg_1",
    function(session){
        session.getConsole(function(output){
            $("#output").text(output);
        });
    }).fail(function () {
            alert("error " + req_agg.responseText);
        }); 
});
});
*/

  $(document).ready(function(){
      $("#submitbutton").on("click", function(){
        //disable the button to prevent multiple clicks
        $("#submitbutton").attr("disabled", "disabled");
        
        //read the value for 'myname'
       // var myname = $("#namefield").val();
        
        //perform the request
        var req = ocpu.call("sum", {
          myname : myname
        }, function(output){
          $("#output").text(output.message);
        });
        
        //if R returns an error, alert the error message
        req.fail(function(){
          alert("Server error: " + req.responseText);
        });
        
        //after request complete, re-enable the button 
        req.always(function(){
          $("#submitbutton").removeAttr("disabled")
        });
      });
    });