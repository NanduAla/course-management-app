import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
  e.preventDefault();
  try {
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
// 🔥 redirect
  } catch (error) {
    alert(error.response?.data?.message || "Invalid credentials");
  }
};


  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
    

      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;
