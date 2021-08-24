import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./chat.css"
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

function Chat(props){
    
    return(
    <div className="chat">
                           {/*  CHATBOX HEADER */}
            <div className="chat-header">
                <Avatar src="" />
                <div className="chat-header-info">
                <h3>Room Name</h3>
               <p>last seen at...</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                 
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
        </div>
                              {/* CHAT BODY MESSAGES */}
        <div className="chat-body">
            <p className="chat-body-message">
            <span className="chat-name">Monica</span>    
                This is a message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>

            <p className="chat-body-message chat-reciever">
            <span className="chat-name">You</span>    
                Your message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>

            <p className="chat-body-message">
            <span className="chat-name">Monica</span>    
                This is a message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>
            <p className="chat-body-message">
            <span className="chat-name">Monica</span>    
                This is a message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>

            <p className="chat-body-message chat-reciever">
            <span className="chat-name">You</span>    
                Your message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>

            <p className="chat-body-message">
            <span className="chat-name">Monica</span>    
                This is a message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>
            <p className="chat-body-message">
            <span className="chat-name">Monica</span>    
                This is a message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>

            <p className="chat-body-message chat-reciever">
            <span className="chat-name">You</span>    
                Your message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>

            <p className="chat-body-message">
            <span className="chat-name">Monica</span>    
                This is a message
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
            </p>
        </div>
        <div className="chat-footer">
            <IconButton>
            <InsertEmoticon/>
            </IconButton>
            <IconButton>
                        <AttachFile/>
                    </IconButton>
            <form onSubmit>
                <input type="text"  placeholder="Type your message"/>
                <button type="submit">
                     <SendIcon/>
                </button>
            </form>
            <IconButton>
            <MicIcon/>
            </IconButton>

        </div>
    </div>
    )
}
export default Chat;