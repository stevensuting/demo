var buttonname = null;
var buttonname1 = null;

function checkBtn(event) {
    /*alert(event.target.name);*/
    buttonname = event.target.name;
    alert(buttonname);

    var options = {
        chart: {
            renderTo: 'container'

        },
        xAxis: {
            categories: []
        },
        yAxis: {
        },
        series: []
    };

    var category = [];
    var sample = [];
//        $.getJSON("Copy of data.json", function(json) {
//      /*$.getJSON("https://public.opencpu.org/ocpu/library/MASS/data/bacteria/json", function(json) {*/
//    	  alert(json.length);
//        	for (var i = 0; i < json.length; i++) {
//        		/*alert(' name=' + json[i].y+" data= "+ json[i].week);*/
//        		/*category[i]=json[i].y;
//        		sample[i]=json[i].week;
//        		options.xAxis.categories = json[i].y['data'];
//    			options.series[0] = sample[i];*/
//    			
//        		if(buttonname==='City')
//        			{
//        			alert(' name=' + json[i].name+" data= "+ json[i].data);
//        			category[i]=json[i].data;
//        			options.series[0] = json[i];
//        			}
//        		/*if(buttonname1=='Order Quantity')
//    			{
//    			alert(' name=' + json[i].name+" data= "+ json[i].data);
//    			category[i]=json[i].data;
//    			}*/
//        		/*alert(' name=' + json[i].data);*/
//        	    
//        	}
//        			/*alert(category);
//        			alert(sample);*/
//        	
//        	/*options.xAxis.categories = json[0]['data'];*/
//            
//            /*options.series[1] = json[2];*/
//            chart = new Highcharts.Chart(options);
//        });
    /*}*/
    /*else if(buttonname=="Helena Bonham Carter")
     {
     alert("i'm in else if");
     $.getJSON("Copy of data.json", function(json) {
     options.xAxis.categories = json[0]['data'];
     options.series[0] = json[2];
     options.series[1] = json[2];
     chart = new Highcharts.Chart(options);
     });
     }*/
}


$(function () {

    var category = [];
    var data = [];
    $.getJSON("Copy of data.json", function (json) {
        for (var i = 0; i < json.length; i++) {
            category[i] = json[i].name;
            data[i] = json[i].data;
        }
        for (i = 0; i < category.length; i++)
        {
            alert(category[i] + " : " + data[i]);
        }
    });


    $('#container').highcharts({
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            lineWidth: 2,
            lineColor: '#F33',
            id: 'temperature-axis'
        },
        series: [{
                name: 'Temperature',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                color: '#F33'
            }]
    });

    // the button handler
    var chart = $('#container').highcharts();

    var charttype = null;
    $('#chartType').change(function () {
        chart.series[0].update({
            type: this.value
        });
        charttype = this.value;

    });

    //alert(charttype);

    $('#swap').click(function () {

        if (chart.inverted === true)
        {
            chart.inverted = false;
            chart.xAxis[0].update({}, true);
            chart.yAxis[0].update({}, true);
            chart.series[0].update({
                type: 'column'
            });
        }

        else
        {
            chart.inverted = true;
            chart.xAxis[0].update({}, false);
            chart.yAxis[0].update({}, false);
            chart.series[0].update({
                type: 'column'
            });
        }

    });

    /*X-axis values change*/
    $('#sub').click(function () {
        /*chart.get('temperature-axis').remove();*/
        /*if (Highcharts.charts[0].xAxis[0].categories[0] == 'Jan')
         {
         */    Highcharts.charts[0].xAxis[0].update({categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}, true);
        /*}
         else
         {
         Highcharts.charts[0].xAxis[0].update({categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}, true);
         }*/
    });


    $('#sub1').click(function () {

        Highcharts.charts[0].xAxis[0].update({categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}, true);

    });

    $('#sub2').click(function () {

        Highcharts.charts[0].xAxis[0].update({categories: ['1-Jan-2014', '1-Feb-2014', '1-Mar-2014', '1-Apr-2014', '1-May-2014', '1-Jun-2014', '1-Jul-2014', '1-Aug-2014', '1-Sep-2014', '1-Oct-2014', '1-Nov-2014', '1-Dec-2014']}, true);

    });
    /*Y-axis Value Changes*/
    $('#add').click(function () {
        /*chart.get('temperature-axis').remove();*/
        /*var seriesLength = chart.series.length;
         for(var i = seriesLength -1; i > -1; i--) {
         chart.series[i].remove();
         chart.yAxis[i].remove();
         }
         /*chart.addAxis({ // Secondary yAxis
         id: 'rainfall-axis',
         title: {
         text: 'Rainfall'
         },
         lineWidth: 2,
         lineColor: '#08F',
         //opposite: true
         });
         $(document).ready(function() {
         $.getJSON("Copy of data.json", function(json) {
         options.xAxis.categories = json[0]['data'];
         options.series[0] = json[1];
         options.series[1] = json[2];
         alert(options.json[1]);
         chart = new Highcharts.Chart(options);
         });
         });
         chart.addSeries({
         name: 'Rainfall',
         type: charttype,
         type: 'column',
         color: '#08F',
         inverted: true,
         yAxis: 'rainfall-axis',
         data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
         });*/

        /*var options = {
         
         chart: {
         
         renderTo: 'container'
         
         },
         
         xAxis: {
         categories: []
         },
         yAxis: {
         },
         
         series: []
         }
         alert("hiii");
         $.getJSON("Copy of data.json", function(json) {
         options.xAxis.categories = json[0]['data'];
         options.series[0] = json[1];
         options.series[1] = json[2];
         chart = new Highcharts.Chart(options);
         });
         */
    });


    $('#add1').click(function () {
        /*var options = {
         chart: {
         renderTo: 'container'
         },
         xAxis: {
         categories: []
         },
         yAxis: {
         },
         series: []
         }
         $.getJSON("Copy of data.json", function(json) {
         
         options.xAxis.categories = json[0]['data'];
         options.series[0] = json[1];
         options.series[0] = json[2];
         chart = new Highcharts.Chart(options);
         });*/
    });


    $('#add2').click(function () {
        /*chart.get('rainfall-axis1').remove();*/
        var seriesLength = chart.series.length;
        for (var i = seriesLength - 1; i > -1; i--) {
            chart.series[i].remove();
            chart.yAxis[i].remove();
        }
        chart.addAxis({// Secondary yAxis
            id: 'temperature-axis1',
            title: {
                text: 'temperature-axis1'
            }
            /*lineWidth: 2,
             lineColor: '#F33',*/
        });
        chart.addSeries({
            name: 'temperature-axis1',
            type: charttype,
            /*type: 'line',
             color: '#F33',*/
            inverted: true,
            yAxis: 'temperature-axis1',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        });

    });

});



