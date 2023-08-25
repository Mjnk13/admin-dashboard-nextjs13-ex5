'use client'

import ProgressBar from 'react-bootstrap/ProgressBar';
import { weeklySales } from '@/../raw_data/raw_data';
import CustomToolTip from '../tooltip/CustomToolTip';

const ProgressChartList = () => {
    return (
        <div className="weekly-sales-progress-list">
            {weeklySales.data.map((dataByDay) => (
                <CustomToolTip placement="top" key={`weekly-sales-${dataByDay.dayOfWeek}`}
                childrenNode={<ProgressBar className='my-3' style={{height: "0.75rem"}}
                    now={dataByDay.amount / weeklySales.amountCap * 100} />} 
                    tooltipContext={`${dataByDay.dayOfWeek}: ${dataByDay.amount}`}/>
            ))}
        </div>
    );
}
 
export default ProgressChartList;