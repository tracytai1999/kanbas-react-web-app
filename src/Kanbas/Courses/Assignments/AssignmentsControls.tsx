import { BsSearch } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

export default function AssignmentsControls() {
    return (
        <div id = "wd-assignment-controls" className="d-flex align-items-center gap-2">
            <div className="input-group" style={{ flexGrow: 1 }}>
                <span className="input-group-text">
                    <BsSearch />
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"/>
            </div>
            <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center">
            <BsPlus/>Group
            </button>
            <button className="btn btn-danger d-flex align-items-center justify-content-center">
            <BsPlus/>Assignment
            </button>
      </div>
    );
}