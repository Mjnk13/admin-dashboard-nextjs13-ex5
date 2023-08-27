import DonutChart from './_component/chart/DonutChart';
import LineChart from './_component/chart/LineChart';
import ProgressChartList from './_component/chart/ProgressChartList';
import SmallLineChart from './_component/chart/SmallLineChart';
import CustomToolTip from './_component/tooltip/CustomToolTip';
import { marketShare } from '@/../raw_data/raw_data';

export default function Home() {
  let totalShare = 0;
  marketShare.map((eachCompany) => {
      totalShare += eachCompany.share;
  });

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
              <div className="col-md-6 align-self-center pe-5">
                <h2 className='mb-3 fw-bold'>Market Share</h2>
                <div className="market-share-info">
                  {marketShare.map((eachCompany) => (
                    <div className='d-flex flex-wrap justify-content-between' key={`market-share-${eachCompany.company}`}>
                      <div className='d-flex'>
                        <i className="fa-solid fa-circle me-2" style={{color: eachCompany.color}}></i>
                        <p className='m-0'>{eachCompany.company}</p>
                      </div>
                      <p className='m-0'>{`${(eachCompany.share / totalShare * 100).toFixed(2)}%`}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <DonutChart />
              </div>
            </div>
          </div>

          <div className='col-12 py-3 px-4'>
            <div className='background-shadow bg-secondary-subtle py-3 px-4'>
                <div className="chart-box">
                    <LineChart/>
                </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}