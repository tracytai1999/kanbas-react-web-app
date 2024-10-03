import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5610/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5610 Web Develop
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/700/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5700 Networking
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5520/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5520 Mobile App
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5500/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5500 CS Foundation
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5500/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6220 Data Mining
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5008/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5008 Data Algorithm
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5009/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5009 CS Recitation
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5004/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5004 OOD
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
