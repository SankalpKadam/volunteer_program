import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        Tasks: [
            {
                id: "0",
                title: "Create Demo",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-20",
                priority: "High",
                status: false
            },
            {
                id: "1",
                title: "Finalize presentation",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-22",
                priority: "Mid",
                status: false
            },
            {
                id: "2",
                title: "Submit presentation",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-25",
                priority: "High",
                status: false
            },
            {
                id: "3",
                title: "Demo Task",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-07",
                priority: "Low",
                status: true
            },
            {
                id: "4",
                title: "Test app",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-15",
                priority: "Low",
                status: false
            },
            {
                id: "5",
                title: "Find sources",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-02",
                priority: "High",
                status: true
            },
            {
                id: "6",
                title: "Fix bugs",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-08",
                priority: "High",
                status: true
            },
            {
                id: "7",
                title: "Read papers",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-06",
                priority: "High",
                status: true
            },
            {
                id: "8",
                title: "Write content",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline: "2024-03-04",
                priority: "High",
                status: true
            }
        ],
        statuschanged: false,
        currentReport: {
            "accomplishments":"",
            "content": "",
            "graduate_id": "",
            "id": "",
            "justification": "",
            "professor_id": "",
            "report_path": "",
            "submission_date": "",
            "title":""
        }
    },
    reducers: {
        setCompleted: (state, action) => {
            // state.Tasks[action.payload.id].status=true
            state.statuschanged = action.payload.status
        },
        setCurrentReport:(state,action)=>{
            state.currentReport.accomplishments=action.payload.accomplishments,
            state.currentReport.content=action.payload.content
            state.currentReport.graduate_id=action.payload.graduate_id,
            state.currentReport.id=action.payload.id,
            state.currentReport.justification=action.payload.justification,
            state.currentReport.professor_id=action.payload.professor_id,
            state.currentReport.report_path=action.payload.report_path,
            state.currentReport.submission_date=action.payload.submission_date,
            state.currentReport.title=action.payload.title

        },
        addTask: (state, action) => {
            state.Tasks.push(
                {
                    id: `${action.payload.id}`,
                    title: action.payload.title,
                    description: action.payload.description,
                    deadline: action.payload.deadline,
                    priority: "Low",
                    status: false
                }
            )
        }
    }
})
export const { setCompleted, addTask, setCurrentReport } = taskSlice.actions;
export default taskSlice.reducer