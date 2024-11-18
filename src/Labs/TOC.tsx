import { useLocation, Link } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();
  
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link id="wd-a" to="/Labs" className={`nav-link ${pathname === "/Labs" ? "active" : ""}`}>
          Labs
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a1" to="/Labs/Lab1" className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a2" to="/Labs/Lab2" className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a3" to="/Labs/Lab3" className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a4" to="/Labs/Lab4" className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
          Lab 4
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a5" to="/Labs/Lab5" className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
          Lab 5
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-k" to="/Kanbas" className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>
          Kanbas
        </Link>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/tracytai1999/kanbas-react-web-app" className="nav-link">
          React App Repository
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/tracytai1999/kanbas-node-server-app" className="nav-link">
          Node Server Repository
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://kanbas-node-server-app-tracy-d33833a6f927.herokuapp.com/" className="nav-link">
          Heroku Root Server
        </a>
      </li>
    </ul>
  );
}
