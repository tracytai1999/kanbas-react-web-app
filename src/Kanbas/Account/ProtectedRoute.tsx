import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (!currentUser) {
    // If no user is signed in, navigate to the Signin page
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
  return children;
}

