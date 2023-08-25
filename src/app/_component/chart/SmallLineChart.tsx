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
  
  import { totalOrder } from '@/../raw_data/raw_data';

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
            intersect: false
        },
        // title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        // },
    },
    hover: {
        mode: "nearest" as const,
        intersect: false
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        }
    },
    elements:{
        point:{
            borderWidth: 0,
            radius: 10,
            backgroundColor: 'rgba(0,0,0,0)',
        }
    },
};

const labels = totalOrder.map(a => `Week ${a.week}`);

export const data = {
  labels,
  datasets: [
    {
        // label: "",
        data: totalOrder.map(a => a.data),
        borderColor: '#0d6efd',
        lineTension: 0.4,
        pointHoverRadius: 0,
        pointRadius: 0,
    },
  ],
};

const SmallLineChart = () => {
    return ( 
        <div className="py-3">
            <Line options={options} data={data} />
        </div>
    );
}
 
export default SmallLineChart;