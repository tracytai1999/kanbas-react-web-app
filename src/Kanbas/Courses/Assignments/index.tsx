import { BsGripVertical, BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePen } from "react-icons/fa6";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeader from "../Modules/AssignmentHeader";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useParams, useNavigate } from "react-router";
import { deleteAssignment } from './reducer';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(assignments)
    const { cid } = useParams();
    const handleDelete = () => {
        const result = window.confirm("Do you want to proceed to delete the assignment?");
        if (result) {
          console.log("User clicked Yes");
          return true;
        } else {
          console.log("User clicked No");
          return false;
        }
    };

    return (
        <div id="wd-assignments">
            <AssignmentsControls/><br/><br />
            <li className="wd-module list-group-item p-0 mb-3 fs-5 border-gray">
                <div className="wd-title d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
                    <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <AssignmentHeader />
                    </div>
                    <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary me-3">
                        40% of Total
                    </button>
                    <BsPlus className="fs-3" />
                    </div>
                </div>
                {assignments
                    .filter((a:any) => a.course === cid)
                    .map((assignment: any) => (
                        <div className="wd-lesson list-group rounded-0">
                            <li className="list-group-item assignment-item d-flex justify-content-between align-items-center p-3 border-bottom">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-3 fs-4" />
                                    <FaFilePen className="me-2 text-success fs-4" />
                                    <div className="assignment-details">
                                        <Link className="fw-bold ps-0" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment._id}
                                        </Link>
                                        <div className="d-flex align-items-center">
                                            <span className="text-danger">Multiple Modules</span>
                                            <span className="mx-2">|</span>
                                            <span className="text-muted">
                                            <b>Not available until</b> {assignment.availableDateString}
                                            </span>
                                            <span className="mx-2">|</span>
                                            <span className="text-muted">
                                                <b>Due</b> {assignment.dueDateString} | {assignment.points} pts
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                      {currentUser.role === "FACULTY" && (
                                            <FaTrash className="pb-0 me-1 btn-danger"
                                            onClick={() => {handleDelete() ? dispatch(deleteAssignment(assignment._id)) : 
                                                navigate(`/Kanbas/Courses/${cid}/Assignments`);}}/>
                                        )}
                                    </div>
                                    <GreenCheckmark />
                                    <BsThreeDotsVertical className="fs-5" />
                                </div>
                            </li>
                        </div>
                    ))
                }              
            </li>
        </div>
    )
}