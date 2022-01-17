import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1> i am sidebar</h1>
            <div className='sidebear-header'>
                <div className='sidebar-headerRight'>
                    <DonutLargeIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
