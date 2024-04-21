import React, { useEffect, useState } from 'react'
import Navbar from '../universalComponents/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import './Chat.css'
import SidebarDetail from '../universalComponents/SidebarDetail/SidebarDetail'
import axios from 'axios'
import { clearMessages, setMessages } from '../../features/tasks/taskSlice'
const Chat = () => {
    const isLoggedIn = useSelector((state) => state.userData);
    const messages = useSelector((state) => state.taskData.messages);
    const [newMessage, setNewMessage] = useState('');
    const [studentList, setStudentList] = useState([]);
    const selectedUser = useSelector((state) => state.taskData.chatWith);
    const dispatch = useDispatch();
    const menuItems = isLoggedIn.type == "student" ? [
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
            text: "Chat",
            link: "/studenthome/chat"
        }
    ] : [
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
            text: "Tasks",
            link: "/professorhome/tasks"
        },
        {
            text: "Logout",
            link: "/logout"
        },
        {
            text: "Chat",
            link: "/professorhome/chat"
        }
    ]
    useEffect(() => {

        axios.get(process.env.REACT_APP_API_URL + '/allusers', {
            params: {
                id: isLoggedIn.id,
                type: isLoggedIn.type
            }
        }).then((response) => {
            setStudentList(response.data.users);
        })
    }, [])
    const sendMessage = () => {
        if (newMessage) {
            axios.post(process.env.REACT_APP_CHAT_API_URL + 'savemessage', {
                'sender_id': isLoggedIn.id,
                'receiver_id': selectedUser.id,
                'message': newMessage
            }).then((response) => {
                if (response.status == 200) {
                    axios.get(process.env.REACT_APP_CHAT_API_URL + 'getmessages', {
                        params: {
                            userid: selectedUser.id,
                            senderid: isLoggedIn.id
                        }
                    }).then((response) => {
                        if (response.status == 200) {
                            dispatch(clearMessages())
                            response.data.map((message) => { dispatch(setMessages({ message })) })
                        }
                        else {
                            console.log(response);
                        }
                    }).catch((err) => console.log(err))
                }
            }).catch((err) => console.log(err))
            setNewMessage('');
        }
        else {
            alert("Fill in the message")
            setNewMessage('');
        }
    };
    return (
        <div className='taskmanagement'>
            <Navbar items={menuItems.reverse()} />
            <div className="studentdashboard__data">
                <div className="studentdashboard__metrics">

                    <div className="studentdashboard__title">Chat</div>
                    <div className="studentdashboard__secondaryTitle">
                        Recipient : {selectedUser.name}
                    </div>
                    <div className="taskmanagement__taskList">
                        <div className="chatApp">
                            <div className="message-container">
                                {messages.map(message => (
                                    <div key={message.message.chatid} className={`message ${message.message.senderid === isLoggedIn.id ? 'sent' : 'received'}`}>
                                        {message.message.text}
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
                            studentList.map((deadline, index) => <SidebarDetail title={deadline.student_name || deadline.professor_name} report={false} id={deadline.id} key={deadline.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
