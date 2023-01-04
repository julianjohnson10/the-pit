import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [auth, setauth] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("auth");
    if (loggedInUser) {
      setauth(loggedInUser);
    }
  }, []);

  if (!auth) {
    return <Navigate replace to="/dashboard" />;
  } else {
    return (
      <div>
        <p>Welcome to your dashboard</p>
      </div>
    );
  }
};

export default Dashboard;
