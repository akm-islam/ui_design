import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['fJanuary', 'Ffebruary', 'fMarch', 'fApril', 'fMay', 'fJune', 'fJuly','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      fill: true,
      lineTension: 0.2,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [.015, 0, .080, .2, .56, .35, .01,.015, .59, .080, .81, .56, .35, .40,.015, .59, .080, .81, .56, .35, .40]
    }
  ]
};

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Line 
        data={data}
        width={100}
        height={50} 
        options={{
          onResize:null,
          responsive:true,
          maintainAspectRatio: true,
          legend:{
            display:false,
          },
          title:{
            display:true,
            text:"Attribute 1",
            
          },
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            },
            display:false
        }],
        yAxes: [{
            gridLines: {
                display:false
            },
            display:false   
        }]
    },  
        }
        }
        />
      </div>
    );
  }
};
