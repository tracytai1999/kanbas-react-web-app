import { Link } from "react-router-dom";
import React, { useState } from 'react';
export default function Profile() {
  const [birthday, setBirthday] = useState('');
    const [role, setRole] = useState('User');


  return (
    <div id="wd-profile-screen">
      <div className="container d-flex justify-content-center align-items-center vh-600">
            <div style={{ maxWidth: "700px", width: "100%" }}>
                <h2 className="mb-4">Profile</h2>

                <div className="form-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="username"
                        defaultValue="alice" 
                    />
                </div>

                <div className="form-group mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="password"
                        defaultValue="123" 
                    />
                </div>

                <div className="form-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="First Name"
                        defaultValue="Alice" 
                    />
                </div>

                <div className="form-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Last Name"
                        defaultValue="Wonderland" 
                    />
                </div>

                <div className="form-group mb-3">
                    <input 
                        type="date" 
                        id="birthday" 
                        className="form-control" 
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)} 
                    />
                </div>

                <div className="form-group mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="email"
                        defaultValue="alice@wonderland.com" 
                    />
                </div>

                <div className="form-group mb-4">
                    <select 
                        id="role" 
                        className="form-select" 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                    </select>
                </div>

                <Link to="/Kanbas/Account/Signin" className="btn btn-primary btn-block w-100 mb-3">
                    Signup
                </Link>
            </div>
        </div>
    </div>
);}

