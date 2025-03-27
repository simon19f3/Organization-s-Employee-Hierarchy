 import { configureStore  } from "@reduxjs/toolkit";
 import postsSlice from "./slices/postsSlice";
 import employeeSlice from "./slices/employees";
 import profilesSlice from "./slices/profileHandler"
 export const store=configureStore({
    reducer:{
      posts:postsSlice,
      employees:employeeSlice,
      profile:profilesSlice,
    }
 })