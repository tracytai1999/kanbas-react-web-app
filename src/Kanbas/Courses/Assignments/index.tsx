import { BsGripVertical, BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePen } from "react-icons/fa6";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeader from "../Modules/AssignmentHeader";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useParams, useNavigate } from "react-router";
import { deleteAssignment, setAssignment } from './reducer';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import * as assignmentClient from "./client";
import * as coursesClient from "../client";
import { useCallback, useEffect, useState } from "react";

export default function Assignments() {
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    console.log("Initial Redux State:", assignments);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    const removeAssignment = async (assignmentId: string) => {
        await assignmentClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };
    const fetchAssignments = useCallback(async () => {
        console.log("fetchAssignments called");
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        console.log("API Response:", assignments); // Log API response
        dispatch(setAssignment(assignments));
    }, [cid, dispatch]); // Memoize to ensure a stable reference
    
    useEffect(() => {
        console.log("useEffect triggered");
        fetchAssignments();
    }, [fetchAssignments]); 
    return (
        <div id="wd-assignments">
            <AssignmentsControls/><br/><br />
            <li className="wd-assignment list-group-item p-0 mb-3 fs-5 border-gray">
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
                {console.log("Assignments in Render:", assignments)} {/* Check value in render */}
                {assignments && assignments.map((assignment: any) => (
                        <div key={assignment._id} className="wd-lesson list-group rounded-0" >
                            <li className="list-group-item assignment-item d-flex justify-content-between align-items-center p-3 border-bottom">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-3 fs-4" />
                                    <FaFilePen className="me-2 text-success fs-4" />
                                    <div className="assignment-details">
                                        <Link className="fw-bold ps-0" to={`/Kanbas/Courses/${cid}/assignments/${assignment._id}`}>
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
                                            onClick={() => {handleDelete() ? removeAssignment(assignment._id) : 
                                                navigate(`/Kanbas/Courses/${cid}/assignments`);}}/>
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