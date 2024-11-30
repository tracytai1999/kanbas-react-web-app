import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/table";
import * as userClient from "../Account/client";
import * as courseClient from "./client"
import { FaPlus } from "react-icons/fa";
export default function Users() {
  const { cid } = useParams<{ cid: string }>();
  if (!cid) {
    throw new Error("Course ID is required but not found.");
  }
 const [users, setUsers] = useState<any[]>([]);
 const [role, setRole] = useState("");
 const filterUsersByRole = async (role: string) => {
   setRole(role);
   if (role) {
     const users = await userClient.findUsersByRole(role);
     setUsers(users);
   } else {
     fetchUsers();
   }
 };
 const [name, setName] = useState("");
 const filterUsersByName = async (name: string) => {
   setName(name);
   if (name) {
     const users = await userClient.findUsersByPartialName(name);
     setUsers(users);
   } else {
     fetchUsers();
   }
 };
 const { uid } = useParams();
 const fetchUsers = async () => {
    try {
      console.log("Fetching users...");
      const users = await courseClient.findUsersForCourse(cid);
      console.log(cid)
      console.log("Fetched users:", users); // Log the response
      setUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error); // Log any errors
    }
  };
  const createUser = async () => {
    const user = await userClient.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };
 useEffect(() => {
    console.log("useEffect called"); // Debugging
   fetchUsers();
 }, [uid]);
 console.log("Users component rendered"); // Debugging log
 return (
   <div>
      <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
      </button>
     <h3>Users</h3>
     <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
             className="form-control float-start w-25 me-2 wd-filter-by-name" />
     <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} />
   </div>
);}

