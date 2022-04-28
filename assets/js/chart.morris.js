$(document).ready(function(){lineChart();donutChart();pieChart();$(window).resize(function(){window.lineChart.redraw();window.donutChart.redraw();window.pieChart.redraw();});});function lineChart(){
window.lineChart=Morris.Line({element:'line-chart',
data:[{y:'2020',a:50,b:40},{y:'2021',a:55,b:55},{y:'2022',a:100,b:80}],xkey:'y',ykeys:['a','b'],labels:['Series A','Series B'],lineColors:['#61C8E7','#cdc6c6'],lineWidth:'3px',resize:true,redraw:true});}
function donutChart()
{window.donutChart=Morris.Donut({element:'donut-chart',
data:[{label:"Quarto básico",value:50},
{label:"Quarto Simples",value:25},
{label:"Quarto com Varanda",value:5},
{label:"Quarto Duplo",value:10},
{label:"Quarto de Luxo",value:10},],
backgroundColor:'#f2f5fa',labelColor:'#5B80F5',
colors:['#5BF5C4','#61C8E7','#5EAFFF','#5B80F5','#5EFFFA'],
resize:true,redraw:true});}
function pieChart(){var paper=Raphael("pie-chart");
paper.piechart(100,100,90,[18.373,18.686,2.867,23.991,9.592,0.213],
    {legend:["Windows/Windows Live","Server/Tools","Online Services","Business","Entertainment/Devices","Unallocated/Other"]});}