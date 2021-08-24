import React from "react";
import Chat from "./chat/Chat";
import Sidebar from "./sidebar/Sidebar";
import "./App.css"

function App(){
    return <div className="app">
       <div className="app_body">
        <Sidebar/>
        <Chat/>
    </div>
  </div>
}
export default App