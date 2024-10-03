import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";

export default function CourseStatus() {
    return (
      //<div id="wd-course-status" style={{ width: 300}} className="wd list-group d-0 p-3 ">
      <div id="wd-course-status" style={{ width: "300px", transform: 'scale(0.8)'}}>
        <h2>Course Status</h2>
        <div className="d-flex">
            <div className="w-50 pe-1">
            <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
            </div>
            <div className="w-50">
                <button className="btn btn-lg btn-success w-100">
                <FaCircleCheck className="me-2 fs-5" /> Publish </button>
            </div>
        </div><br />
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <BiImport className="me-2 fs-5" /> Import Existing Content </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <LiaFileImportSolid className="me-2 fs-5" /> Choose Home Page </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start ">
            <LiaFileImportSolid className="me-2 fs-5" /> View Course Stream </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start ">
            <LiaFileImportSolid className="me-2 fs-5" /> New Announcement </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start ">
            <LiaFileImportSolid className="me-2 fs-5" /> New Analytics </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start ">
            <LiaFileImportSolid className="me-2 fs-5" /> View Course Notifications </button>
      </div>
  );}
  
  