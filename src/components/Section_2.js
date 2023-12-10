
import './common.css';
import React, { useState } from 'react';
import { AreaChart, Area, Tooltip } from "recharts";



function Section_2() {


  const data1 = [{ name: "Page A", uv: 2000, pv: 2400, amt: 2400 }, { name: "Page B", uv: 3000, pv: 1398, amt: 2210 }, { name: "Page C", uv: 2000, pv: 9800, amt: 2290 }, { name: "Page D", uv: 2780, pv: 3908, amt: 2000 }];
  const data2 = [{ name: "Page A", uv: 3000, pv: 2400, amt: 2500 }, { name: "Page B", uv: 4000, pv: 1398, amt: 2310 }, { name: "Page C", uv: 3000, pv: 9800, amt: 2390 }, { name: "Page D", uv: 2780, pv: 3908, amt: 2300 }];
  const data3 = [{ name: "Page A", uv: 3500, pv: 2400, amt: 2600 }, { name: "Page B", uv: 2500, pv: 1398, amt: 2410 }, { name: "Page C", uv: 4000, pv: 9800, amt: 2490 }, { name: "Page D", uv: 2780, pv: 3908, amt: 2500 }];
  const data4 = [{ name: "Page A", uv: 2500, pv: 2400, amt: 2700 }, { name: "Page B", uv: 3000, pv: 1398, amt: 2510 }, { name: "Page C", uv: 4000, pv: 9800, amt: 2590 }, { name: "Page D", uv: 2780, pv: 3908, amt: 2700 }];


  const [activeTab, setActiveTab] = useState('day');

  const openTab = (tabname) => {
    const tablinks = document.querySelectorAll('.tab-links');
    const tabcontents = document.querySelectorAll('.tab-contents');

    tablinks.forEach((tablink) => {
      tablink.classList.remove('active-link');
    });

    tabcontents.forEach((tabcontent) => {
      tabcontent.classList.remove('active-tab');
    });

    document.getElementById(tabname).classList.add('active-tab');
    setActiveTab(tabname);
  };

  return (

    <div>
      <div className="tab-titles">
        <p className={`tab-links ${activeTab === 'day' && 'active-link'}`} onClick={() => openTab('day')}>Day</p>
        <p className={`tab-links ${activeTab === 'week' && 'active-link'}`} onClick={() => openTab('week')}>Week</p>
        <p className={`tab-links ${activeTab === 'month' && 'active-link'}`} onClick={() => openTab('month')}>Month</p>
        <p className={`tab-links ${activeTab === 'year' && 'active-link'}`} onClick={() => openTab('year')}>Year</p>
      </div>
      <div className={`tab-contents ${activeTab === 'day' && 'active-tab'}`} id="day">
        <div className="tab_inner_content">
          <div className="row align_items_center justify_content_space_between">
            <p className="lower">Lower:<span className="price">$4.895</span></p>
            <p className="higher">Higher:$<span className="price">6.857</span></p>
          </div>
          <div className='container chart_container'>
            <AreaChart width={270} height={160} data={data1} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <Area type="monotone" dataKey="uv" stroke="#FF8F17" fill="#ff8f1733" strokeWidth={2} />
            </AreaChart>
            <p className='tooltip'>1 BTC = $7.264</p>
          </div>
        </div>
      </div>
      <div className={`tab-contents ${activeTab === 'week' && 'active-tab'}`} id="week">
        <div className="tab_inner_content">
          <div className="row align_items_center justify_content_space_between">
            <p className="lower">Lower:<span className="price">$5.895</span></p>
            <p className="higher">Higher:$<span className="price">7.857</span></p>
          </div>
          <div className='container chart_container'>
            <AreaChart width={270} height={160} data={data2} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <Area type="monotone" dataKey="uv" stroke="#FF8F17" fill="#ff8f1733" strokeWidth={2} />
            </AreaChart>
            <p className='tooltip'>1 BTC = $7.689</p>
          </div>
        </div>
      </div>
      <div className={`tab-contents ${activeTab === 'month' && 'active-tab'}`} id="month">
        <div className="tab_inner_content">
          <div className="row align_items_center justify_content_space_between">
            <p className="lower">Lower:<span className="price">$6.895</span></p>
            <p className="higher">Higher:$<span className="price">8.857</span></p>
          </div>
          <div className='container chart_container'>
            <AreaChart width={270} height={160} data={data3} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <Area type="monotone" dataKey="uv" stroke="#FF8F17" fill="#ff8f1733" strokeWidth={2} />
            </AreaChart>
            <p className='tooltip'>1 BTC = $5.698</p>
          </div>
        </div>
      </div>
      <div className={`tab-contents ${activeTab === 'year' && 'active-tab'}`} id="year">
        <div className="tab_inner_content">
          <div className="row align_items_center justify_content_space_between">
            <p className="lower">Lower:<span className="price">$7.895</span></p>
            <p className="higher">Higher:$<span className="price">9.857</span></p>
          </div>
          <div className='container chart_container'>
            <AreaChart width={270} height={160} data={data4} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <Area type="monotone" dataKey="uv" stroke="#FF8F17" fill="#ff8f1733" strokeWidth={2} />
            </AreaChart>
            <p className='tooltip'>1 BTC = $5.483</p>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Section_2;