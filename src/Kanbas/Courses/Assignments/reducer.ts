import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
  assignment: {
    _id: "",
    title: "New Assignment",
    course:"",
    description: "New Description",
    points: 100,
    dueDate: "",
    dueDateString: "",
    availableDate: "",
    availableDateString: ""
  }
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
  },
    deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
            (assignment) => assignment._id !== action.payload
        );
    },
    updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
            if (assignment._id === action.payload._id) {
                return action.payload;
            } else {
                return assignment;
            }
        });
    },
    setAssignment: (state, action) => {
        state.assignment = action.payload;
    },
    cancelAssignmentUpdate: (state, action) => {
        state.assignment = initialState.assignment;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, cancelAssignmentUpdate } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;

