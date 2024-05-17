import React from 'react'
import "./header.scss"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = () => {
  return (
    <div className='header'>
        <div className="header_left">
            <img src="https://i0.wp.com/savannahdatasolutionslimited.com/wp-content/uploads/2022/02/latest-logo-RESIZED-e1646299158419.png?fit=760%2C859&ssl=1" className='logo' alt="logo" />
        </div>
        <div className="header_right">
            <div className="items">
                <div className="item">
                    <h4>John Solutions</h4>
            </div>
            <div className="item">
                <DarkModeOutlinedIcon className='icon'/>
            </div>
            </div>
            <div className="items">
            <h3 className="user">John</h3>
            <div className="item">
                <NotificationsNoneIcon className='iccon'/>
                <h6 className="sum">59</h6>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Header