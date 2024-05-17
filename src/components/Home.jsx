import React from 'react'
import "./home.scss"
import Widget from "../components/Widget"
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const Home = () => {

  const widgeItem = [
        "March 13 2024: File Expiring: Idaho Quartely Report - Q1. DynamicCMSFile",
        "March 14 2024: File Expiring: CT_20231231 .DynamicCMSFile",
        "March 15 2024: File Expiring: California Annual Report 20240315.docx",
        "March 20 2024: File Expiring: ILLINOIS_20231231.DynamicCMSFile",
        "March 21 2024: File Expiring: NEVADA_20231231.DynamicCMSFile",
        "Marrch 29 2024: File Expiring: Washington Quartely Report - Q1.DynamicCMSFile",
        "March 31 2024: File Expiring: Evanston Business Licence_03312024[1].pdf",
        "March 31 2024: File Expiring: MA 20240331.DynamicCMSFile"
  ]
  const widgetMessage = [
    
      "Aug 17 2023 13:55PM: Hey, load new Safeguard policies",
      "Aug 04 2023 3:16PM: New Templates for licences are available. Select instructions from Dynamic Reports",
      "Aug 17 2023 13:55PM: Hey, load new Safeguard policies",
      "Aug 04 2023 3:16PM: New Templates for licences are available. Select instructions from Dynamic Reports"
    
  ];

  const widgetEvents = [
    {eventName:"Outside File Remediation",count:12},
    {eventName:"Outside File Expired", count:74},
    {eventName:"Outside File Expiring", count:27},
    {eventName:"Outside File Remediation",count:12},
    {eventName:"Outside File Expired", count:74},
    {eventName:"Outside File Expiring", count:27},
    {eventName:"Outside File Remediation",count:12},
    {eventName:"Outside File Expired", count:74},
    {eventName:"Outside File Expiring", count:27},
    {eventName:"Outside File Remediation",count:12},
    {eventName:"Outside File Expired", count:74},
    {eventName:"Outside File Expiring", count:27}
  ]

  const widgetApps = [
   { appName:"Open ALLGATE Complaints",count:11},
    {appName:"Open Allgate-ARC Complaints and Disputes",count:1},
    { appName:"Open ALLGATE Complaints",count:11},
    {appName:"Open Allgate-ARC Complaints and Disputes",count:1}
  ]
;  
  return (
    <div className='dash'>
        <div className="headers">
        <h4 className='titles'>Good afternoon John!</h4>
        <hr/>
        <div className="sort">
        <h5 className="title">What would you like to do?

        <select name="" id="" style={{ padding: '0.09rem', border: '1px solid gray', borderRadius: '0.375rem',  }}>
              <option value=""></option>
              <option value="">activity1</option>
              <option value="">activity2</option>
            </select>
        
        </h5>
        </div>
        </div>
        <hr/>
        <div className="cards">
          <div className="row">
        <Widget title={"Calender Events For The next 31 Days"}
        scrollbarContent={ <PerfectScrollbar style={{ width: "100%", height: 250 }}>
         <ul>
        {widgeItem.map((item, i) => (<li className='events' key={`item_${i}`}>{ item }</li>))}
      </ul>
      </PerfectScrollbar>}

        /> 
        <Widget title={"Recent Company Messages"} search={ <input type='text' placeholder='Enter a new company message and press Enter' style={{ padding: "10px",width:"90%", color:"gray" }}/>} 
        list={
          <ul>
             {widgetMessage.map((item, i) => (<li className='events' key={`item_${i}`}>{ item }</li>))}
           </ul>
        }/>
          </div>
          <div className="row">
        <Widget title={"Current File Events"} list={
          <ul>
             {widgetEvents.map((item, i) => (<li className='events' key={`item_${i}`}>{ item.eventName }   {item.count}</li>))}
           </ul>
        }/>
        <Widget title={"Current Open Applications"} list =
        {<ul>
        {widgetApps.map((item, i) => (<li className='events' key={`item_${i}`}>{ item.appName } {item.count}</li>))}
      </ul>}
        />
          </div>
        </div>
    </div>
  )
}

export default Home