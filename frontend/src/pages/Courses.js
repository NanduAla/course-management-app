import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { logout } from "../services/auth";

function Courses() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    courseName: "",
    description: "",
    instructor: "",
  });

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchCourses();
  }, [navigate]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addCourse = async e => {
    e.preventDefault();
    try {
      await API.post("/courses", form);
      setForm({ courseName: "", description: "", instructor: "" });
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCourse = async id => {
    try {
      await API.delete(`/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Courses</h2>

      {/* Logout button OUTSIDE form */}
      <button
        style={{ background: "#555", marginBottom: "15px" }}
        onClick={() => logout(navigate)}
      >
        Logout
      </button>

      <form onSubmit={addCourse}>
        <input
          name="courseName"
          placeholder="Course Name"
          value={form.courseName}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="instructor"
          placeholder="Instructor"
          value={form.instructor}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Course</button>
      </form>

      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.courseName} - {course.instructor}
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
