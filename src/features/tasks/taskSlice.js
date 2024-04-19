import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        Tasks: [
        ],
        statuschanged: false,
        currentReport: {
            accomplishments:"",
            content: "",
            graduate_id: "",
            id: "",
            justification: "",
            professor_id: "",
            report_path: "",
            submission_date: "",
            title:""
        },
        messages:[
        ],
        chatWith:{
            id:""
        }
    },
    reducers: {
        setCompleted: (state, action) => {
            // state.Tasks[action.payload.id].status=true
            state.statuschanged = action.payload.status
        },
        setCurrentReport:(state,action)=>{
            state.currentReport.accomplishments=action.payload.accomplishments;
            state.currentReport.content=action.payload.content;
            state.currentReport.graduate_id=action.payload.graduate_id;
            state.currentReport.id=action.payload.id;
            state.currentReport.justification=action.payload.justification;
            state.currentReport.professor_id=action.payload.professor_id;
            state.currentReport.report_path=action.payload.report_path;
            state.currentReport.submission_date=action.payload.submission_date;
            state.currentReport.title=action.payload.title;

        },
        addTask: (state, action) => {
            state.Tasks.push(
                // {
                //     id: `${action.payload.id}`,
                //     title: action.payload.title,
                //     description: action.payload.description,
                //     deadline: action.payload.deadline,
                //     priority: "Low",
                //     status: false
                // }
                action.payload
            )
        },
        setMessages :(state,action)=>{
            // console.log(action.payload);
            state.messages.push(action.payload)
        },
        clearMessages:(state, action)=>{
            state.messages = []
        },
        setChatWith:(state, action)=>{
            state.chatWith.id = action.payload.id
        }
    }
})
export const { setCompleted, addTask, setCurrentReport, setMessages, clearMessages, setChatWith } = taskSlice.actions;
export default taskSlice.reducer