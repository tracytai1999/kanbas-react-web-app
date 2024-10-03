import { Link } from "react-router-dom";
export default function Signin() {
  return (
      <div className="container d-flex justify-content-center align-items-center vh-600">
            <div className="card p-4" style={{ maxWidth: "700px", width: "100%" }}>
                <h2 className="mb-4">Signin</h2>
                
                <div className="form-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="username" 
                    />
                </div>
                <div className="form-group mb-4">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="password" 
                    />
                </div>
                
                <Link to="/Kanbas/Dashboard" className="btn btn-primary btn-block w-100 mb-3">
                    Signin
                </Link>
                <Link  id="wd-signup-link" to="/Kanbas/Account/Signup" className="text-decoration-none">Signup</Link>
            </div>
        </div>
);}

