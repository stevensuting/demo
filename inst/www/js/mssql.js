$(document).ready(function () {

$("submitbutton").click(function(){
    var req = ocpu.call("agg_1",
    function(session){
        session.getConsole(function(output){
            $("#output").text(output);
        });
    }).fail(function () {
            alert("error " + req_agg.responseText);
        });
 


});
});
    
    
