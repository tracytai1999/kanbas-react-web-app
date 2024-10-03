import { BsGripVertical, BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePen } from "react-icons/fa6";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentHeader from "../Modules/AssignmentHeader";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
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

                <div className="wd-lesson list-group rounded-0">
                    <li className="list-group-item assignment-item d-flex justify-content-between align-items-center p-3 border-bottom">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-3 fs-4" />
                            <FaFilePen className="me-2 text-success fs-4" />
                            <div className="assignment-details">
                                <a className="d-flex align-items-center wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                    <span className="fw-bold">A1</span>
                                </a>
                                <div className="d-flex align-items-center">
                                    <span className="text-danger">Multiple Modules</span>
                                    <span className="mx-2">|</span>
                                    <span className="text-muted">
                                    <b>Not available until</b> May 6 at 12:00am
                                    </span>
                                    <span className="mx-2">|</span>
                                    <span className="text-muted">
                                        <b>Due</b> May 13 at 11:59pm | 100 pts
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <GreenCheckmark />
                            <BsThreeDotsVertical className="fs-5" />
                        </div>
                    </li>
                </div>

                <div className="wd-lesson list-group rounded-0">
                    <li className="list-group-item assignment-item d-flex justify-content-between align-items-center p-3 border-bottom">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-3 fs-4" />
                            <FaFilePen className="me-2 text-success fs-4" />
                            <div className="assignment-details">
                                <a className="d-flex align-items-center wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                    <span className="fw-bold">A2</span>
                                </a>
                                <div className="d-flex align-items-center">
                                    <span className="text-danger">Multiple Modules</span>
                                    <span className="mx-2">|</span>
                                    <span className="text-muted">
                                    <b>Not available until</b> May 13 at 12:00am
                                    </span>
                                    <span className="mx-2">|</span>
                                    <span className="text-muted">
                                        <b>Due</b> May 20 at 11:59pm | 100 pts
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <GreenCheckmark />
                            <BsThreeDotsVertical className="fs-5" />
                        </div>
                    </li>
                </div>

                <div className="wd-lesson list-group rounded-0">
                    <li className="list-group-item assignment-item d-flex justify-content-between align-items-center p-3 border-bottom">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-3 fs-4" />
                            <FaFilePen className="me-2 text-success fs-4" />
                            <div className="assignment-details">
                                <a className="d-flex align-items-center wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                    <span className="fw-bold">A3</span>
                                </a>
                                <div className="d-flex align-items-center">
                                    <span className="text-danger">Multiple Modules</span>
                                    <span className="mx-2">|</span>
                                    <span className="text-muted">
                                    <b>Not available until</b> May 20 at 12:00am
                                    </span>
                                    <span className="mx-2">|</span>
                                    <span className="text-muted">
                                        <b>Due</b> May 27 at 11:59pm | 100 pts
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <GreenCheckmark />
                            <BsThreeDotsVertical className="fs-5" />
                        </div>
                    </li>
                </div>
            </li>
        </div>
    )
}