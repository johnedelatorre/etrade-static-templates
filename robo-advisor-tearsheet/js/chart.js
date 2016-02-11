
// Charting colors
var chart01 = '#013f01';
var chart02 = '#336150';
var chart03 = '#4a8672';
var chart04 = '#6cc0a5';
var chart05 = '#7bc6ae';
var chart06 = '#98d2c0';
var chart07 = '#b5dfd2';


var chart10 = '#ada4df';

var chart11 = '#b0e2ea';
var chart12 = '#99d3e0';
var chart13 = '#7fc1d3';
var chart14 = '#58a3c4';
var chart15 = '#1d80a3';
var chart16 = '#004e6d';

var chartData = [
       {
        name: 'Large Cap Core',
        y: 40,
        color: chart01,
        id: 'slice-1',
        classname: 'percentage-40',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'Large Cap Growth',
        y: 14,
        color: chart02,
        id: 'slice-2',
        classname: 'percentage-14',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'Large Cap Value',
        y: 14,
        color: chart03,
        id: 'slice-3',
        classname: 'percentage-14',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'S/Mid Growth',
        y: 8,
        color: chart04,
        id: 'slice-4',
        classname: 'percentage-8',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'S/Mid Value',
        y: 8,
        color: chart05,
        id: 'slice-5',
        classname: 'percentage-8',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'Developed Markets',
        y: 15,
        color: chart06,
        id: 'slice-6',
        classname: 'percentage-15',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'Emerging Markets',
        y: 5,
        color: chart07,
        id: 'slice-7',
        classname: 'percentage-5',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'Intermediate <br> Fixed Income',
        y: 12,
        color: chart11,
        id: 'slice-8',
        classname: 'percentage-12',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'Opportunistic <br> Fixed Income',
        y: 6,
        color: chart12,
        id: 'slice-9',
        classname: 'percentage-6',
        dataLabels: {
            enabled: false
        },
    }, {
        name: 'Cash',
        y: 2,
        color: chart10,
        id: 'slice-10',
        classname: 'percentage-2',
        dataLabels: {
            enabled: false
        },
    }
];
//**********************
// ALLOCATIONS CHART 1
//**********************  

$(function () {
    $('#allocations').highcharts({
        chart: {
            type: 'pie',
            backgroundColor: null
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        plotOptions: {
            pie: {
                borderColor: '',
                innerSize: '70%'
            }
        },
        series: [{
                allowPointSelect: true,
                colorByPoint: true,
                states: {
                    hover: {
                        enabled: false,
                        halo: {
                            size: 0
                        }
                    }
                },
                point:{
                    events:{
                        click: function (event) {
                            $('#'+ this.id).next().toggleClass('ease');
                            $('#'+ this.id).parent('.security-item').find('.et-icon-chevron-right').toggleClass('rotate-90');
                        }
                    }
                },
                data: chartData // Change data in this object above
            }]
    });

    // add a class and id attr to bar chart to correspond to the donut chart
    $.each(chartData, function(index, object) {
        $('.animate .percentage').eq(index).addClass(object.classname).attr('id', object.id);
    });
    // add animation class attr's
    $('.chart-bar').on('click', '.security-item', function(e) {
        e.preventDefault();
        $(this).find('.security-detail').toggleClass('ease');
        $(this).find('.et-icon-chevron-right').toggleClass('rotate-90');
    });

    var chart = $('#allocations').highcharts(),
       sliced = false,
            i = 0;
    $('.chart-bar').on('click', '.security-item', function() {
        var selectedSlice = $(this).find('.percentage').attr('id');
    });
});