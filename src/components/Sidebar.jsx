import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanIcon from '@mui/icons-material/Lan';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Link } from 'react-router-dom';
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="center">
            <ul>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <LogoutIcon className='icons'/>
                    <span>Logout</span>
                </li>        
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <HelpOutlineIcon className='icon'/>
                    <span>Help</span>
                </li>
                </Link>
                <Link to="/logou" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <PersonOutlineIcon className='icon'/>
                    <span>System Administration</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <MailOutlineIcon className='icon'/>
                    <span>Mailbox</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <SummarizeIcon className='icon'/>
                    <span>Dynamic Reports</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <DisplaySettingsIcon className='icon'/>
                    <span>Display Access</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <CalendarMonthIcon className='icon'/>
                    <span>Calender</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <LanIcon className='icon'/>
                    <span>View Network</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <ArticleIcon/>
                    <span>Our Documents</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <CoPresentIcon/>
                    <span>Third Party Management</span>
                </li>
                </Link>
                <Link to="/logout" style={{textDecoration: "none", color: "gray"}}>
                <li>
                    <PlayArrowIcon className='icon'/>
                    <span>Form Application</span>
                </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar