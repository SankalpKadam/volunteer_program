import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name:"taskSlice",
    initialState:{
        Tasks:[
            {
                id:"0",
                title:"Create Demo",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/20/24",
                priority:"High",
                status:false
            },
            {
                id:"1",
                title:"Finalize presentation",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/22/24",
                priority:"Mid",
                status:false
            },
            {
                id:"2",
                title:"Submit presentation",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/25/24",
                priority:"High",
                status:false
            },
            {
                id:"3",
                title:"Demo Task",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/07/24",
                priority:"Low",
                status:true
            },
            {
                id:"4",
                title:"Test app",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/15/24",
                priority:"Low",
                status:false
            },
            {
                id:"5",
                title:"Find sources",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/02/24",
                priority:"High",
                status:true
            },
            {
                id:"6",
                title:"Fix bugs",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/08/24",
                priority:"High",
                status:true
            },
            {
                id:"7",
                title:"Read papers",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/06/24",
                priority:"High",
                status:true
            },
            {
                id:"8",
                title:"Write content",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nibh, tempor vitae felis vitae, faucibus pretium massa. Nunc quis eros placerat, faucibus odio eget, scelerisque diam. Curabitur posuere laoreet elit, id gravida ligula efficitur vel. Sed non metus gravida, faucibus ipsum at, consequat sem.",
                deadline:"03/04/24",
                priority:"High",
                status:true
            }
        ]
    },
    reducers:{
        setCompleted:(state,action)=>{
            state.Tasks[action.payload.id].status=true
        }
    }
})
export const {setCompleted} = taskSlice.actions;
export default taskSlice.reducer