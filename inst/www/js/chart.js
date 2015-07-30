var buttonname = null;
var buttonname1 = null;
//var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);
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
            type: this.value,
            color : '#000000'
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
    var a=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    $('#sub').click(function () {
            Highcharts.charts[0].xAxis[0].update({categories: a}, true);
    });

var b=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $('#sub1').click(function () {
        Highcharts.charts[0].xAxis[0].update({categories: b}, true);
    });

var c=['1-Jan-2014', '1-Feb-2014', '1-Mar-2014', '1-Apr-2014', '1-May-2014', '1-Jun-2014', '1-Jul-2014', '1-Aug-2014', '1-Sep-2014', '1-Oct-2014', '1-Nov-2014', '1-Dec-2014'];
    $('#sub2').click(function () {
        Highcharts.charts[0].xAxis[0].update({categories: c}, true);
    });

var x=[14.5, 18.2, 1.5, 5.2, 26.5, 23.3, 18.3, 13.9];
    /*Y-axis Value Changes*/
    $('#add').click(function () {
        Highcharts.charts[0].series[0].setData(x,true);
    });
var y=[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
    $('#add1').click(function () {
        Highcharts.charts[0].series[0].setData(y,true);
    });
var z=[7.0, 9.5, 18.2, 21.5,  26.5, 23.3, 13.9, 9.6];
    $('#add2').click(function () {
        Highcharts.charts[0].series[0].setData(z,true);
        
    });

});



