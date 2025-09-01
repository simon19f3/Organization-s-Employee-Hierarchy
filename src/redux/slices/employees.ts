import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interface for Employee
interface Employee {
  name: string;
  parent: string | null;
  image: string;
  description: string;
  children: Employee[];
}

// Define initial state with explicit type
const initialState: Employee[] = [
  {
    name: "CEO",
    parent: null,
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our CEO plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
  {
    name: "COO",
    parent: "CEO",
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our COO plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
  {
    name: "CFO",
    parent: "CEO",
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our CFO plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
  {
    name: "CTO",
    parent: "CEO",
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our CTO plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
  {
    name: "HR",
    parent: "CEO",
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our HR plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
  {
    name: "BackEnd Lead",
    parent: "CTO",
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our BackEnd Lead plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
  {
    name: "FrontEnd Lead",
    parent: "CTO",
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our FrontEnd Lead plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
  {
    name: "DevOps Engineer",
    parent: "HR",
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our DevOps Engineer plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
  {
    name: "UI Design",
    parent: "DevOps Engineer",
    image: "https://as1.ftcdn.net/jpg/01/80/80/28/1000_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
    description: "Our UI Design plays a vital role in driving innovation and success. With a shared commitment to excellence, our team members bring diverse skills, dedication, and passion to their work, contributing to our mission of transforming the future through collaboration and creativity.",
    children: [],
  },
];

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addB: (state, action: PayloadAction<Employee>) => {
      state.push(action.payload);
    },
    deleteB: (state, action: PayloadAction<string>) => {
      const employeeName = action.payload;
      return state.filter((employee: Employee) => employee.name !== employeeName);
    },
    update: (state, action: PayloadAction<{ employeeName: string; updatedName: string }>) => {
      const { employeeName, updatedName } = action.payload;
      const employeeIndex = state.findIndex((employee: Employee) => employee.name === employeeName);
      if (employeeIndex !== -1) {
        state[employeeIndex].name = updatedName;
      }
      return state;
    },
    deleTwo: (state, action: PayloadAction<string>) => {
      const employeeName = action.payload;
      const employeeIndex = state.findIndex((employee: Employee) => employee.name === employeeName);
      if (employeeIndex !== -1) {
        const parent = state[employeeIndex].parent;
        return state.map((employee: Employee) => {
          if (employee.parent === employeeName) {
            return { ...employee, parent };
          }
          return employee;
        });
      }
      return state;
    },
    updateFamily: (state, action: PayloadAction<{ employeeName: string; updatedName: string }>) => {
      const { employeeName, updatedName } = action.payload;
      return state.map((employee: Employee) => {
        if (employee.parent === employeeName) {
          return { ...employee, parent: updatedName };
        }
        return employee;
      });
    },
  },
});

export const { addB, update, deleteB, deleTwo, updateFamily } = employeeSlice.actions;
export default employeeSlice.reducer;