import { createSlice,PayloadAction } from "@reduxjs/toolkit";
const initialState:any=[{ name: "CEO", parent: null,image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our CEO plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.", children: [] },

{ name: "COO", parent: "CEO",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our COO plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",children: []  },
{ name: "CFO", parent: "CEO",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our CFO plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",children: [] },
{ name: "CTO", parent: "CEO",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our CTO plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",children: []},
{ name: "HR", parent: "CEO" ,image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our HR plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",children: []},
{ name: "BackEnd Lead", parent: "CTO",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our BackEnd Lead plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",children: [] },
{ name: "FrontEnd Lead", parent: "CTO",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our FrontEnd Leadplays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",children: []  },
{ name: "DevOps Engineer", parent: "HR",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our DevOps Engineer plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",children: [] },
{ name: "UI Design", parent: "DevOps Engineer",image:"https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",description:"Our UI Design plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",children: [] },]
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