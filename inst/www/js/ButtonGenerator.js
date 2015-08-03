/* global data */
var buttonname;
var buttonname1;
var dimen_data;
var char111 = [];
var char222 = [];
var obj;
var obj1;
var obj2;
var data;
var app = angular.module('Demo', ['ui.bootstrap', 'ui.directives']);

app.controller("AppController", function ($scope, $http) {
    $scope.loadUsersrefresh = function ()
    {
        var req = ocpu.call("rmysql_doublelist", {},
                // myname : myname
                        function (session) {
                            //to print in r console whatever returned by r 
                            session.getConsole(function (outtxt) {
                                $("#output").text(outtxt);
                                session.getObject(function (data) {
                                    //data is the object returned by the R function
                                    // copy the object data to dim_data

                                    dim_data = data;
                                    obj = JSON.parse(dim_data);
                                    for (var i in obj) {
                                        if (obj[i].Variable_Type === "character")
                                        {
                                            alert("1  " + obj[i]._row);
                                            char111[i] = obj[i]._row;


                                            //char111 = char111.filter(function(n){ return n !== undefined });

                                        }
                                        else {
                                            alert("0  " + obj[i]._row);
                                            char222[i] = obj[i]._row;


                                            //char222 = char222.filter(function(n){ return n !== undefined });
                                        }
                                    }


//                                    for (var j = 0; j < 2; j++)
//                                    {
//                                        char111 = char111.filter(function (n) {
//                                            return n !== undefined
//                                        });
//                                        char222 = char222.filter(function (n) {
//                                            return n !== undefined
//                                        });
//                                        j++;
//                                    }
//
//
//
//                                    char111 = char111.filter;
//                                    char222 = char222.filter;



                                    //char111 = char111.filter;
                                    //char222 = char222.filter



                                    $scope.UsersData = char111;
                                    $scope.UsersMeasure = char222;
                                    //  alert("first " + $scope.UsersData);
                                    // alert("second " + $scope.UsersMeasure);
                                });
                            });
                        });

            };

    $scope.Clicked = function ()
    {
        buttonname = event.target.name;
        alert(buttonname);
        var dim1 = buttonname;
        alert(dim1);
        var req2 = ocpu.call("getDimension", {
            dimension: dim1
        }, function (session) {
            session.getConsole(function (outtxt) {
                $("#output").text(outtxt);
                session.getObject(function (dimen)
                {
//                    alert(dimen);
                    dimen_data = dimen;
                    alert("dimen_data  " + dimen_data);
                    obj1 = JSON.parse(dimen_data);
////          alert(obj.Variable_Type);
////          alert(obj._row);
//                    alert("OBJdim " + obj1);
//
//                    for (var i in obj1) {
//                        output = obj1[i].Dimension;
//                        alert("output " + output);
//                    }

                });
            });

        });

//writing the Chart data code
        // the button handler
        var chart = $('#container').highcharts();
        /*X-axis values change*/
        var series = [];

        var c = ['1-Jan-2014', '1-Feb-2014', '1-Mar-2014', '1-Apr-2014', '1-May-2014', '1-Jun-2014', '1-Jul-2014', '1-Aug-2014', '1-Sep-2014', '1-Oct-2014', '1-Nov-2014', '1-Dec-2014'];
        Highcharts.charts[0].xAxis[0].update({categories: dimen_data}, true);
    };
//        alert("series value "+series.data);
//        Highcharts.charts[0].xAxis[0].update({categories: series.data}, true);


    $scope.Clicked1 = function ()
    {
        buttonname1 = event.target.name;
        alert(buttonname1 + "  " + buttonname);
        var dim2 = buttonname;
        var dim3 = buttonname1;
        alert(dim2 + "  " + dim3);
        var req = ocpu.call("getMeasure", {
            dimension: dim2,
            measure: dim3
        }, function (session) {
            session.getConsole(function (outtxt) {
                $("#output").text(outtxt);
                session.getObject(function (dimen1)
                {
                    alert(dimen1);
                    dimen_data1 = dimen1;
                    alert("dimen_data measure  " + dimen_data1);
                    obj12 = JSON.parse(dimen_data1);

                });
            });

        });

    };
});

var buttonname333 = null;
var buttonname122 = null;

function checkBtn(event) {
    /*alert(event.target.name);*/
    buttonname333 = event.target.name;
    alert(buttonname333);

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
            color: '#000000'
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
    var a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    $('#sub').click(function () {
        Highcharts.charts[0].xAxis[0].update({categories: a}, true);
    });

//var b=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var b = obj1;
    $('#sub1').click(function () {
        alert(obj1);
        alert("b data  " + b);
        Highcharts.charts[0].xAxis[0].update({categories: obj1.Dimension}, true);
    });

    var c = ["1-Jan-2014", "1-Feb-2014", "1-Mar-2014", "1-Apr-2014'", "1-May-2014", "1-Jun-2014", "1-Jul-2014", "1-Aug-2014", "1-Sep-2014", "1-Oct-2014", "1-Nov-2014", "1-Dec-2014"];
    $('#sub2').click(function () {
        Highcharts.charts[0].xAxis[0].update({categories: c}, true);
    });

    var x = [14.5, 18.2, 1.5, 5.2, 26.5, 23.3, 18.3, 13.9];
    /*Y-axis Value Changes*/
    $('#add').click(function () {
        Highcharts.charts[0].series[0].setData(x, true);
    });
    var y = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
    $('#add1').click(function () {
        Highcharts.charts[0].series[0].setData(y, true);
    });
    var z = [7.0, 9.5, 18.2, 21.5, 26.5, 23.3, 13.9, 9.6];
    $('#add2').click(function () {
        Highcharts.charts[0].series[0].setData(z, true);

    });

});
