'use client'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  import { totalSales } from '@/../raw_data/raw_data';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            // position: 'top' as const,
            display: false,
        },
        tooltip: {
            mode: 'index' as const,
            intersect: false,
            displayColors: false,
            titleMarginBottom: 0,
            callbacks: {
                title: function(context: any){
                    return `${context[0].label}: ${context[0].formattedValue}`;
                },
                label: function() { return '' }
            }
        },
        title: {
            display: true,
            text: 'Total sales' as const,
            font: {
                size: 30,
                weigh: 900
            },
            color: "black",
            padding: {
                bottom: 50
            }
        },
    },
    hover: {
        mode: "index" as const,
        intersect: false
    },
    scales: {
        x: {
            border: {
                display: false
            },
            grid: {
                display: false,
            }
        },
        y: {
            beginAtZero: true,
            border: {
                display: false
            },
            ticks: {
                // forces step size to be 30 units
                stepSize: 30,
                // padding: 30
            }
        }
    },
    elements:{
        point:{
            // borderWidth: 0,
            // radius: 10,
            backgroundColor: 'transparent' as const,
        }
    },
};

const labels = totalSales.map(a => a.month);

export const data = {
  labels,
  datasets: [
    {
        // label: "",
        data: totalSales.map(a => a.amount),
        borderColor: '#0d6efd',
        lineTension: 0,
        pointHoverRadius: 5,
        pointRadius: 5,
    },
  ],
};

const LineChart = () => {
    return ( 
        <div className="py-3 h-100">
            <Line options={options} data={data} />
        </div>
    );
}
 
export default LineChart;