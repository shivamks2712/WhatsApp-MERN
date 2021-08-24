import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChats.css";
   

function SidebarChats(props){
return(
    <div className="sidebar-chat">
        <Avatar src={props.imageUrl}/>
        <div className="sidebar-chat-info">
            <h4> {props.Name}</h4>
            <p>{props.LastMsg}</p>
        </div>

    </div>
)
}
export default SidebarChats;