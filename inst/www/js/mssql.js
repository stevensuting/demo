









$("submitbutton").click(function(){
    var req = ocpu.call("mssql",
    function(session){
        session.getConsole(function(output){
            $("#output").text(output);
        });
        });
    });
