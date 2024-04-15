import React, { useEffect, useState } from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import { useSelector } from 'react-redux'
import './Chat.css'
import SidebarDetail from '../universalComponents/SidebarDetail/SidebarDetail'
import axios from 'axios'
const Chat = () => {
    const isLoggedIn = useSelector((state) => state.userData);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const menuItems = isLoggedIn.type == "student"?[
        {
            text: "Home",
            link: "/studenthome"
        },
        {
            text: "Calendar",
            link: "/studenthome/calendar"
        },
        {
            text: "Submit Reports",
            link: "/studenthome/submitreport"
        },
        {
            text: "Your Tasks",
            link: "/studenthome/tasks"
        },
        {
            text: "Logout",
            link: "/logout"
        },
        {
            text:"Chat",
            link:"/studenthome/chat"
        }
    ]:[
        {
            text: "Home",
            link: "/professorhome"
        },
        {
            text: "Recommendations",
            link: "/professorhome/recommend"
        },
        {
            text: "Reports",
            link: "/professorhome/report"
        },
        {
            text:"Tasks",
            link:"/professorhome/tasks"
        },
        {
            text: "Logout",
            link: "/logout"
        },
        {
            text:"Chat",
            link:"/professorhome/chat"
        }
    ]
    useEffect(()=>{
        axios.get('http://localhost:5000/getmessages',{params:{
            id:isLoggedIn.id
        }}).then((response)=>console.log(response))
    },[])
    const sendMessage = () => {
        // Here you would send the new message to the backend and update the messages state
        // For simplicity, let's just add it locally
        setMessages([...messages, { id: messages.length + 1, userId: 1, content: newMessage, timestamp: new Date().toISOString() }]);
        setNewMessage('');
    };
    return (
        <div className='taskmanagement'>
            <Navbar items={menuItems.reverse()} />
            <div className="studentdashboard__data">
                <div className="studentdashboard__metrics">

                    <div className="studentdashboard__title">Chat</div>
                    <div className="studentdashboard__secondaryTitle">
                        Recipient : {"Sankalp Kadam"}
                    </div>
                    <div className="taskmanagement__taskList">
                        <div className="chatApp">
                            <div className="message-container">
                                {messages.map(message => (
                                    <div key={message.id} className={`message ${message.userId === 1 ? 'sent' : 'received'}`}>
                                        {message.content}
                                    </div>
                                ))}
                            </div>
                            <div className="input-container">
                                <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Type your message..." />
                                <button onClick={sendMessage}>Send</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='studentdashboard__deadline'>
                    <div className='studentdashboard__secondaryTitle'>
                        Users
                    </div>
                    <div className="taskmanagement__taskList">
                        {
                            ["Sankalp Kadam","Purva Ingle","Rajeswari Jeevanrao"].map((deadline, index) => <SidebarDetail title={deadline}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
