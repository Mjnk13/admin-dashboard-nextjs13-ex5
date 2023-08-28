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
    Chart,
    LabelItem,
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

export const plugins = [
    {
        id: "scalePadding",
        beforeDatasetsDraw(chart: Chart, args: { cancelable: true }, options: any) {
            const { ctx, data, scales: {x, y} } = chart;

            x.getLabelItems().map((label: LabelItem, index: number) => {
                label.options.textBaseline = "middle";
                label.textOffset = 5 + 20
            });
        }
    }
];

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
                    return `${month[context[0].dataIndex]}: ${context[0].formattedValue}`;
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
            },
            afterFit: function(context: any) {
                context.height += 20
            }
        },
        y: {
            beginAtZero: true,
            border: {
                display: false,
                dash: [8,4],
            },
            ticks: {
                // forces step size to be 30 units
                stepSize: 30,
                padding: 25
            },
        }
    },
    elements:{
        point:{
            // borderWidth: 0,
            // radius: 10,
            backgroundColor: '#e2e3e5' as const,
        }
    },
};

const month = totalSales.map(a => a.month);
const labels = month.map(a => a.substring(0,3));

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
            <Line options={options} data={data} plugins={plugins} />
        </div>
    );
}
 
export default LineChart;