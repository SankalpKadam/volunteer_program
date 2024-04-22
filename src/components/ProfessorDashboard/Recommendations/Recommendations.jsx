import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../universalComponents/Navbar/Navbar'
import './Recommendations.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Recommendations = () => {
    const [selectedValue, setSelectedValue] = useState("Click to select student");
    const [professorName, setProfessorName] = useState("");
    const [recommendationText, setRecommendationText] = useState("");
    const [selectedId, setSelectedId] = useState(0);
    const loggedInProfessor = useSelector((state)=>state.userData)
    const dropDownref = useRef();
    function toggleDropDown(params) {
        dropDownref.current.classList.toggle("showDropDown")
    }
    function generateLetter(e) {
        e.preventDefault();
        if (selectedValue!="Click to select student" && professorName && recommendationText) {
            axios.post(process.env.REACT_APP_API_URL+'/recommend',{
                'professor_name':professorName,
                'graduate_id':selectedId,
                'professor_id':loggedInProfessor.id,
                'recommendation_text':recommendationText
            }).then((response) =>{
                // console.log(response); 
            }).catch((err)=>console.log(err))
            setSelectedValue("Click to select student")
            setProfessorName("")
            setRecommendationText("")
            setSelectedId(0)
        }
        else{
            alert("Fill all the details");
        }
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
        },
        {
            text:"Chat",
            link:"/professorhome/chat"
        }
    ]
    const [studentList, setStudentList] = useState([])
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_URL+'/volunteerstudents',{
            params:{
                'id':loggedInProfessor.id
            }
        }).then((response)=>{
            setStudentList(response.data.students);
        })
    },[])
    return (
        <div className='recommendation'>
            <Navbar items={menuItems.reverse()} />
            <div className="recommendation__data">
                <div className="recommendation__title">Recommendation Form</div>
                <form className="recommendation__form">
                    <label htmlFor="" className='recommendation__label'>
                        <span className='recommendation__inputSpan'>Professor Name</span>
                        <input type="text" name="" pattern="^[A-Za-z\s]*$" id="name" className='recommendation__input' value={professorName} onChange={(e)=>setProfessorName(e.target.value)}/>
                    </label>
                    <label htmlFor="" className='recommendation__label'>
                        <span className='recommendation__inputSpan'>Recommendation Text</span>
                        <textarea name="taskDetails" id="taskDetails" value={recommendationText} onChange={(e)=>setRecommendationText(e.target.value)}></textarea>
                    </label>
                    <label htmlFor="" className='recommendation__label'>
                        <span className='submit__spanStyle'>Recommendation For</span>
                        <input type="text" id="proftaskmanagementdate" className='proftaskmanagement__input' placeholder='Click to Select student' onClick={toggleDropDown} value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}/>
                        <div className="dropdown" ref={dropDownref}>
                            {
                                studentList.map((student, index) => <p className='dropdown__item' key={index} id={student.id} onClick={() => { setSelectedId(student.id);setSelectedValue(student.student_name); toggleDropDown() }}>{student.student_name}</p>)
                            }
                        </div>
                    </label>
                    <button className='submitreport__submitBtn' onClick={generateLetter}>Generate Letter</button>

                </form>
            </div>
        </div>
    )
}

export default Recommendations
