import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus style={{ fontSize: "35px" }}/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}

