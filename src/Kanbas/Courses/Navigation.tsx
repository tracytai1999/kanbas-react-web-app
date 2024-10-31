import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../Database";
import ProtectedRoute from "../Account/ProtectedRoute";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  db.courses.find((course) => course._id === cid);

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <ProtectedRoute>
        <Link key={index} to={`/Kanbas/Courses/${cid}/${link}`} className={`list-group-item border-0 border
              ${pathname.includes(link) ? "active" : "text-danger"}`}>
          {link}
        </Link>
        </ProtectedRoute>
      ))}
    </div>
);}


