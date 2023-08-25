import DonutChart from './_component/chart/DonutChart';
import ProgressChartList from './_component/chart/ProgressChartList';
import SmallLineChart from './_component/chart/SmallLineChart';
import CustomToolTip from './_component/tooltip/CustomToolTip';

export default function Home() {  
  return (
    <main className="mt-3">
      <div className='container'>
        <div className="row">
          <div className="col-md-6 justify-content-between py-3 px-4">
            <div className="row background-shadow bg-secondary-subtle py-3 px-4 h-100">
              <div className="weekly-sale-info col-md-6 align-self-center">
                <p className='position-relative'>Weekly Sales
                  <CustomToolTip tooltipContext={"Calculated according to last week's sales"} 
                                  childrenNode={<i className="fa-regular fa-circle-question text-muted ms-2"></i>}/>
                </p>
                <h2 className="text-muted">$47K</h2>
                <span className="badge text-bg-success text-success-emphasis">+3.5%</span>
              </div>
              <div className="col-md-6">
                <ProgressChartList />
              </div>
            </div>
          </div>
          
          <div className="col-md-6 justify-content-between py-3 px-4">
            <div className="row background-shadow bg-secondary-subtle py-3 px-4 h-100">
              <div className="total-order-info col-md-6 align-self-center">
                <p>Total Order</p>
                <h2 className="text-muted">58.4K</h2>
                <span className="badge text-bg-primary text-primary-emphasis"><i className="fa-solid fa-caret-up"></i> 13.6%</span>
              </div>
              <div className='col-md-6'>
                <SmallLineChart/>
              </div>
            </div>
          </div>

          <div className='col-12 py-3 px-4'>
            <div className='row background-shadow bg-secondary-subtle py-3 px-4'>
              <div className="col-md-6">

              </div>
              <div className="col-md-6">
                <DonutChart />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}