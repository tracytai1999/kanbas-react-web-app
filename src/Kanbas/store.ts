import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer"
import coursesReducer from "./coursesReducer"

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    coursesReducer,
  },
});
export default store;

