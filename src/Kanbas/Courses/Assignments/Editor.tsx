import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { aid } = useParams();
    
    const assignment = db.assignments.find((assignment) =>
        assignment._id === aid);

    return(
        <div id="wd-assignment-editor" className="p-4">
            <div className="mb-4">
                <label htmlFor="wd-name">
                    <h5>Assignment Name</h5>
                </label>
                <input value={assignment?._id}
                    type="text"
                    id="wd-name"
                    className="form-control"/>
            </div>

            <div className="mb-4 p-3 border" style={{ whiteSpace: 'pre-wrap' }}>
                <p>
                    {assignment?.description}
                </p>
            </div>

            <div className="grouped-sections p-3 mb-4">

                <div className="row mb-3 align-items-center">
                    <div className="col-3">
                        <label htmlFor="wd-points"><h6>Points</h6></label>
                    </div>
                    <div className="col-9">
                        <input type="number" id="wd-points" className="form-control" value={assignment?.points} />
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <div className="col-3">
                        <label htmlFor="wd-group"><h6>Assignment Group</h6></label>
                    </div>
                    <div className="col-9">
                        <select id="wd-group" className="form-select">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <div className="col-3">
                        <label htmlFor="wd-display-grade-as"><h6>Display Grade As</h6></label>
                    </div>
                    <div className="col-9">
                        <select id="wd-display-grade-as" className="form-select">
                            <option value="Percentage">Percentage</option>
                            <option value="Grade Point">Grade Point</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <div className="col-md-3 text-left">
                        <label htmlFor="wd-submission-type" className="form-label"><h6>Submission Type</h6></label>
                    </div>
                    <div className="col-md-9">
                        <div className="form-control">
                            <select id="wd-submission-type" className="form-select">
                                <option value="Online">Online</option>
                            </select>
                            <div className="ms-3 w-50">
                                <br/>
                                <h6><b>Online Entry Options</b></h6>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-chkbox-text" />
                                    <label className="form-check-label" htmlFor="wd-chkbox-text">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                                    <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-3 text-left">
                        <label htmlFor="wd-submission-type" className="form-label"><h6>Assign</h6></label>
                    </div>
                    <div className="col-md-9">
                        <div className="form-control">
                            <br/>
                            <label htmlFor="wd-submission-type" className="form-label"><h6><b>Assign To</b></h6></label>
                            <div className="col-9">
                                <input type="text" id="wd-assign-to" className="form-control" value="Everyone" />
                            </div>
                            <br/>
                            <div className="col-3">
                                <label htmlFor="wd-due-date"><h6><b>Due</b></h6></label>
                            </div>
                            <div className="col-9">
                                <input type="datetime-local" id="wd-due-date" className="form-control" value={assignment?.dueDate} />
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                                    <div className="input-group">
                                        <input type="datetime-local" id="wd-due-date" className="form-control" value={assignment?.availableDate} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                                    <div className="input-group">
                                        <input type="datetime-local" id="wd-due-date" className="form-control" value={assignment?.dueDate} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-end mt-4">
                    <button id="wd-cancel" className="btn btn-light border me-2">Cancel</button>
                    <button id="wd-save" className="btn btn-danger">Save</button>
                </div>
            </div>
        </div>
    )
}