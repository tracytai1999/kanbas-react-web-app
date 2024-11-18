import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  // Conditional links based on user authentication status
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <nav>
      <ul className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
          <li key={link} className="list-group-item border border-0" >
            <Link
              to={`/Kanbas/Account/${link}`}
              className={`nav-link ${pathname.includes(link) ? "active" : "text-danger"}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

