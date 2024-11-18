import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`  
    const [module, setModule] = useState({
        id: "ABC", title: "TestModule",
        description: "This is a test module, woohoo", course: "CS5610",
    }) 
      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
        <h3 id="wd-working-with-objects">Working With Objects / Assignments</h3>
            <h4>Retrieving Objects</h4>
                <a id="wd-retrieve-assignments" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/assignment`}>
                    Get Assignment
                </a><hr/>
            <h4>Retrieving Properties</h4>
                <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                    Get Title
                </a><hr/>
            <h4>Modifying Properties</h4>
                <a id="wd-update-assignment-title"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                    Update Title
                </a>
                <input className="form-control w-75" id="wd-assignment-title"
                    defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })}/>
                <hr />
                <a id="wd-update-assignment-score"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                    Update Score
                </a>
                <input className="form-control w-75" id="wd-assignment-score"
                    defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })}/>
                <hr />
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="wd-assignment-completed"
                        onChange={() => setAssignment({ ...assignment, completed: true })}
                    />
                    <label className="form-check-label" htmlFor="wd-assignment-completed">
                        Mark as Completed
                    </label>
                    <a id="wd-update-assignment-completed"
                        className="btn btn-primary float-end"
                        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                        Update Completed
                    </a>
                </div><hr/>
        <h3 id="wd-working-with-objects">Working With Objects / Modules</h3>
            <h4>Retrieving Objects</h4>
                <a id="wd-retrieve-modules" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/module`}>
                    Get Module
                </a><hr />
            <h4>Retrieving Properties</h4>
                <a id="wd-retrieve-module-title" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/module/title`}>
                    Get Module Title
                </a><hr/>
            <h4>Modifying Properties</h4>
                <a id="wd-update-module-title"
                    className="btn btn-primary float-end"
                    href={`${MODULE_API_URL}/title/${module.title}`}>
                    Update Module Title
                </a>
                <input className="form-control w-75" id="wd-module-title"
                    defaultValue={module.title} onChange={(e) =>
                    setModule({ ...module, title: e.target.value })}/>
                <hr />
                <a id="wd-update-module-description"
                    className="btn btn-primary float-end"
                    href={`${MODULE_API_URL}/description/${module.description}`}>
                    Update Module Description
                </a>
                <input className="form-control w-75" id="wd-module-description"
                    defaultValue={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })}/>
                <hr />
    </div>
);}

