import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome to Course Management System</p>

      <button onClick={() => navigate("/courses")}>
        Go to Courses
      </button>
    </div>
  );
}

export default Dashboard;
