$(function () { 
    Highcharts.setOptions({
      colors: ['#0077cc'],
      chart: {
          style: {
              fontFamily: 'sans-serif',
              color: '#fff'
          }
      }
  });  
    $('#container2').highcharts({
          chart: {
              type: 'column',
              backgroundColor: 'rgb(0, 0, 0, 0)'
          },
          title: {
              text: '',
              style: {  
                color: ''
              }
          },
          xAxis: {
              tickWidth: 0,
              labels: {
                style: {
                    color: '#000000',
                   }
                },
              categories: ['0 – 14 <span style="color:#0077cc;"> anni </span>', '15 – 28 <span style="color:#0077cc;"> anni </span>', '29 – 42 <span style="color:#0077cc;"> anni </span>', '43 – 56 <span style="color:#0077cc;"> anni </span>', '57 – 70 <span style="color:#0077cc;"> anni </span>', '71 – 84 <span style="color:#0077cc;"> anni </span>', ' > 85 <span style="color:#0077cc;"> anni </span>']
              
              
          },
          yAxis: {
             gridLineWidth: .5,
                gridLineDashStyle: '',
                gridLineColor: '#0077cc',
             title: {
                  text: '',
                  style: {
                    color: '#000000'
                   }
              },
              labels: {
                formatter: function() {
                          return '%'+Highcharts.numberFormat(this.value, 0, '', '');
                      },
                style: {
                    color: '#000000',
                   }
                }
              },
          legend: {
              enabled: false,
          },
          credits: {
              enabled: false
          },
          tooltip: {
             valuePrefix: '%'
          },
          plotOptions: {
                column: {
                    borderRadius: 2,
               pointPadding: 0,
                    groupPadding: 0.1
              } 
              },
          series: [{
              name: 'Sopravvivenza del',
              data: [5, 55, 8, 89, 13, 34, 21]
          }]
      });
  });