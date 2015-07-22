function finale()
{

$.getJSON('data.json', function(data) {
        var output;
        for (var i in data.users) {
            output=data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month;
//        alert(output);
        document.write("<div>");
//    for(var j = 0; j < key[i].length; j++)
//    {
       document.write("<input type='button' value='" + data.users[i].firstName + "' onclick = call('"+data.users[i].firstName+"') />");
       
//    }
    document.write("</div>");
        }

//        output+="</ul>";
        
//         document.getElementById("placeholder").innerHTML=output;
  });
    
}


function call(aaa)
{
    alert("asdasd  "+aaa);
    
}

