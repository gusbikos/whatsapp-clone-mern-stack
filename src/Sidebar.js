import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar src='https://avatars.githubusercontent.com/u/70536063?v=4' />
                
                <div className='sidebar-headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            <div className='sidebar-search'>
                <div className='sidebar-searchContainer'>
                    <SearchOutlined />
                        <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>

            <div className='sidebar-chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
