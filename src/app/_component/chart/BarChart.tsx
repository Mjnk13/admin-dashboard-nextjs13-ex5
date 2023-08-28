'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { TopProducts } from '@/../raw_data/raw_data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const plugins = [
  {
    id: "legendMargin",
    beforeInit(chart: any, legend: any, options: any) {
      const fitValue = chart.legend.fit;

      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        return this.height += 20;
      }
    }
  }
]

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'start' as const,
      labels: {
        usePointStyle: true
      }
    },
    title: {
      display: true,
      text: 'Top Products',
      align: 'start' as const,
      font: {
        size: 30,
        weigh: 900
      },
      color: "black",
    },
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
            stepSize: 20,
            padding: 25
        },
    }
  },
};

const years = Object.keys(TopProducts);
const productByYears = Object.values(TopProducts);
const labels = Object.keys(Object.values(TopProducts)[0]);
const backgroundColor = ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)'];

export const data = {
  labels,
  datasets: productByYears.map((item, index) => {
    return {
      label: years[index],
      data: Object.values(item),
      backgroundColor: backgroundColor[index],
      barThickness: 30,
      borderWidth: 5,
      borderColor: 'rgba(0, 0, 0, 0)',
      borderRadius: 15
    }
  })
};

const BarChart = () => {
    return ( 
        <div className="chart-box position-relative">
          <Bar options={options} data={data} plugins={plugins} />
        </div>
    );
}
 
export default BarChart;