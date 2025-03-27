import { createSlice,PayloadAction } from "@reduxjs/toolkit";
const initialState:any=[{ name: "ceo", parent: null,image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.", children: [] },
{name:"simon",parent:null,image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children:[]},
{ name: "coo", parent: "ceo",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children: []  },
{ name: "cto", parent: "ceo",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children: [] },
{ name: "cfo", parent: "ceo",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children: []},
{ name: "hr", parent: "ceo" ,image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children: []},
{ name: "chef", parent: "cfo",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children: [] },
{ name: "internal", parent: "cfo",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children: []  },
{ name: "iinternal", parent: "hr",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children: [] },
{ name: "internaliii", parent: "internal",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"hello everyone my name is simon assfaw i am the ceo of this company and project manager temporarly. i have a five year experiance on leadrship and two years as a ceo.",children: [] },]
const employeeSlice=createSlice({
    name:"employees",
    initialState,
    reducers:{
        addB:(state,action:PayloadAction<any>)=>{
            const {name,parent,children}=action.payload;
            state.push({name,parent,children})
        },
        deleteB:(state,action:PayloadAction<any>)=>{
            const employeeName=action.payload;
             
            return state.filter((employee:any)=>employee.name!==employeeName)
        },
        update:(state,action:PayloadAction<any>)=>{
            const {employeeName,updatedName}=action.payload;
            const employeeIndex=state.findIndex((employee:any)=>employee.name==employeeName);
            state[employeeIndex].name = updatedName;
    
            return state;
        },
        deleTwo:(state,action:PayloadAction<any>)=>{
            const employeeName=action.payload;
            const employeeIndex=state.findIndex((employee:any)=>employee.name==employeeName); 
                return state.forEach((employee:any)=>{
                    if (employee.parent == state[employeeIndex].name) {
                      employee.parent=state[employeeIndex].parent
                    } 
                    
                  });
        },
        updateFamily:(state,action:PayloadAction<any>)=>{
            const {employeeName,updatedName}=action.payload;
            return state.forEach((employee:any)=>{
                if (employee.parent == employeeName) {
                  employee.parent=updatedName;
                }} 
            )}
                
        
        
        }
});
export const {addB,update,deleteB,deleTwo,updateFamily}=employeeSlice.actions;
export default employeeSlice.reducer;