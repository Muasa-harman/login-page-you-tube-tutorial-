import React from 'react'
import "./dashboard.scss"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'

const Dashboard = () => {
  return (
    <div className='home'>
        <Header/>
        <div className="dashboard">
            <Sidebar/>
            <Home/>
        </div>
    </div>
  )
}

export default Dashboard