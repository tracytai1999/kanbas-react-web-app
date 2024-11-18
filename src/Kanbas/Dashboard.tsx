import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowAllCourses, enrollInCourse, unenrollFromCourse } from "./coursesReducer";

export default function Dashboard(
{ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, fetchCourses }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; fetchCourses: () => void})
 {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isStudent = currentUser.role === "STUDENT";
  const  enrollments  = useSelector((state: any) => state.coursesReducer.enrollments);
  const {showAllCourses} = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const handleToggleEnrollmentView = () => {
    dispatch(toggleShowAllCourses());
  };

  const handleEnroll = (courseId: any) => {
    dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: any) => {
    dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
  };
  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id &&
        enrollment.course === course._id));
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <div>
          <h5>New Course
              <button className="btn btn-primary float-end "
                id="wd-add-new-course-click"
                onClick={addNewCourse} > Add </button>
              <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">Update</button>
          </h5><br />
              <input defaultValue={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
              <textarea defaultValue={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
          <hr />
        </div>
    )}

    {isStudent && (
        <button className="btn btn-primary float-end mb-3" onClick={handleToggleEnrollmentView}>
          {showAllCourses ? "View Enrollments" : "All Courses"}
        </button>
    )}


      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <div className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.image} width="100%" height={160} alt="course_image"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <div className="d-flex">
                      <Link to={`/Kanbas/Courses/${course._id}/Home`}className="btn btn-primary">
                        Go
                      </Link>
                      {currentUser.role === "FACULTY" && (
                        <div className="float-end ms-auto">
                          <button onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                        </div>
                      )}
                      {isStudent && (
                        enrollments.some((e: { course: any; user: any; }) => e.course === course._id && e.user === currentUser._id) ? (
                          <button
                            onClick={() => handleUnenroll(course._id)}
                            className="btn btn-danger ms-2 float-end ms-auto"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEnroll(course._id)}
                            className="btn btn-success ms-2 float-end ms-auto"
                          >
                            Enroll
                          </button>
                        )
                      )}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);}

