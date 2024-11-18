import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments:[],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignment: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, {payload: assignment}) => {
      const newAssignment : any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course:assignment.courseId,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        dueDateString: assignment.dueDateString,
        availableDate: assignment.availableDate,
        availableDateString: assignment.availableDateString
      }
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, {payload: assignmentId}) => {
        state.assignments = state.assignments.filter(
            (assignment: any) => assignment._id !== assignmentId
        );
    },
    updateAssignment: (state, {payload: assignment}) => {
        state.assignments = state.assignments.map((a: any) => 
          a._id === assignment._id ? assignment : a) as any;
    },
    cancelAssignmentUpdate: (state) => {
        state.assignments = initialState.assignments;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, cancelAssignmentUpdate } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;

