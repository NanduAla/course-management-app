import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav style={navStyle}>
  <Link to="/" style={linkStyle}>Register</Link>
  <Link to="/login" style={linkStyle}>Login</Link>
  <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
  <Link to="/courses" style={linkStyle}>Courses</Link>
</nav>


      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  padding: "15px",
  background: "#1976d2",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
};

export default App;
