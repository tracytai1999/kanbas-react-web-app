import { createSlice } from "@reduxjs/toolkit";
import { enrollments, courses } from "./Database";

const initialState = {
  courses: courses,
  enrollments: enrollments,
  showAllCourses: false,
};

const coursesSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollInCourse: (state, { payload: enrollment }) => {
        const newEnrollment: any = {
          _id: new Date().getTime().toString(),
          user: enrollment.userId,
          course: enrollment.courseId,
        };
        state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollFromCourse: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment.course !== action.payload.courseId || enrollment.user !== action.payload.userId
      );
    },
   
  },
});

export const {
  toggleShowAllCourses,
  enrollInCourse,
  unenrollFromCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;
