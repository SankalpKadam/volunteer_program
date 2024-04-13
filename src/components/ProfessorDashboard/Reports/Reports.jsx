import React, { useEffect, useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import SidebarDetail from '../../universalComponents/SidebarDetail/SidebarDetail'
import './Reports.css'
import { Link, useNavigate } from 'react-router-dom'
import AICheck from '../AI Check/AICheck'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setCurrentReport } from '../../../features/tasks/taskSlice'
const Reports = () => {
    const [feedback, setFeedback] = useState("")
    const [openAIReport, setOpenAIReport] = useState(false)
    const currentReport = useSelector((state)=>state.taskData.currentReport);
    const [score, setScore] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function closeDialog() {
        setOpenAIReport(false)
    }
    const menuItems = [
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
        }
    ]
    // const deadlines = [
    //     {
    //         title: "ask1234",
    //         secondaryDetail: "View"
    //     },
    //     {
    //         title: "ssk2320",
    //         secondaryDetail: "View"
    //     },
    //     {
    //         title: "avr4321",
    //         secondaryDetail: "View"
    //     },
    //     {
    //         title: "xyz4567",
    //         secondaryDetail: "View"
    //     }
    // ]
    const [deadlines, setDeadlines] = useState([]);
    const loggedInProfessor = useSelector((state)=>state.userData);
    function sendFeedback(e){
        if (feedback){
            e.preventDefault()
            axios.post(process.env.REACT_APP_API_URL+'/feedback',{
                'id':currentReport.id,
                'feedback':feedback
            }).then((response)=>{
                console.log(response);
                if (response.data.status != 200){
                    alert("Feedback not submitted")
                }
                else{

                    alert("Feedback submitted")
                }
            }).catch((err)=>console.log(err))
            setFeedback("")
        }
        else{
            alert("Fill all details")
        }
    }
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_URL+"/getreports",{
            params:{
                "id":loggedInProfessor.id
            }
        }).then((response)=>{
            setDeadlines(response.data.reports);
            console.log(response.data.reports[0]);
            dispatch(setCurrentReport({...response.data.reports[0]}))
        })
    },[])
    return (
        <div className='reports'>
            <Navbar items={menuItems.reverse()} />
            <div className="reports__data">
                <div className="reports__metrics">
                    <div className="reports__title">Review Report</div>
                    <div className="reports__reportData">Report ID: {currentReport.title}</div>
                    <div className="reports__secondaryTitle">
                        Summary
                    </div>
                    <div className="reports__secondaryData">
                    {currentReport.accomplishments}
                    </div>
                    <div className="reports__secondaryTitle">
                        Justification of Hours
                    </div>
                    <div className="reports__secondaryData">
                    {currentReport.justification}
                    </div>
                    <div className="reports__secondaryTitle">
                        Report
                    </div>
                    <button className='submitreport__submitBtn' onClick={()=>navigate("/professorhome/reportviewer")}>View Report</button>
                    <Link className='reports__aiCheck' onClick={()=>{
                        setOpenAIReport(true)

                    async function run(text) {
                        try {
                            const response = await axios.post(
                                'https://api.sapling.ai/api/v1/aidetect',
                                {
                                    key: 'BHSKBQHICWRZZ9M1JOA112CX7JE7SP01',
                                    text,
                                },
                            );
                            const {status, data} = response;
                            console.log({status});
                            console.log(data.score*100);
                            setScore(data.score*100)
                        } catch (err) {
                            const { msg } = err.response.data;
                            console.log({err: msg});
                        }
                    }
                    
                    run(currentReport.content);
                    }}>Do AI anti-cheating check</Link>
                    {openAIReport && <div>There is a <b>{score}%</b> chance that this report is written using AI agents</div>}
                    <div className='reports__secondaryTitle'>
                        Feedback
                    </div>
                    <textarea name="feedback" id="feedback" value={feedback} onChange={(e)=>setFeedback(e.target.value)}></textarea>
                    <button className='submitreport__submitBtn' onClick={sendFeedback}>Submit</button>

                </div>
                <div className='reports__deadline'>
                    <div className='reports__secondaryTitle'>
                        Submitted Reports
                    </div>
                    {
                        deadlines.map((deadline, index) => <SidebarDetail title={deadline.title} secondaryDetail={deadline.secondaryDetail} key={index} id={deadline.id}/>)
                    }
                </div>
            </div>
           {/* {openAIReport && <div className='aireport'>
                    <AICheck/>
                    <button className='submitreport__submitBtn' onClick={closeDialog}>Close</button>
            </div>} */}
        </div>
    )
}

export default Reports
