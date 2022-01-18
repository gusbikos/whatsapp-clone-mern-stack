import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat-header'>
                <Avatar />

                <div className='chat-headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className='chat-headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

            <div className='chat-body'>
                <p>

                    <span className='chat-name'>Gus</span>
                    This is a message
                    <span className='chat-timeStamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Chat
