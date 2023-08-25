'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { marketShare } from '@/../raw_data/raw_data';

ChartJS.register(ArcElement, Tooltip, Legend);

export const plugins = [
    {
        id: "textCenterDonut",
        beforeDatasetsDraw(chart: Chart, args: { cancelable: true }, options: any){
            const { ctx, data } = chart;
    
            ctx.save();
            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;
            ctx.font = "bold 50px sans-serif";
            ctx.fillStyle = "#000000";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            
            ctx.fillText(
                `text`, xCoor, yCoor
            );
        }
    }
]

export const options = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: 100,
    plugins: {
        legend: {
            display: false,
        },
    }
}

export const data = {
  labels: marketShare.map(a => a.company),
  datasets: [
    {
    //   label: '# of Votes',
      data: marketShare.map(a => a.share),
      backgroundColor: [
        '#2c7be5',
        '#27bcfd',
        '#1b83b0',
        '#0f4a63',
      ],
      borderWidth: 1,
      offset: 10
    },
  ],
};

const DonutChart = () => {
    return ( 
        <div className="py-3 chart-box">
            <Doughnut data={data} options={options} plugins={plugins}/>
        </div>
    );
}
 
export default DonutChart;