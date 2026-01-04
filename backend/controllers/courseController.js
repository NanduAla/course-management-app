const db = require("../config/db");

exports.createCourse = (req, res) => {
  const { courseName, description, instructor } = req.body;

  db.run(
    "INSERT INTO courses (courseName, description, instructor) VALUES (?, ?, ?)",
    [courseName, description, instructor],
    () => res.status(201).json({ message: "Course created" })
  );
};

exports.getCourses = (req, res) => {
  db.all("SELECT * FROM courses", [], (err, rows) => {
    res.json(rows);
  });
};

exports.updateCourse = (req, res) => {
  const { id } = req.params;
  const { courseName, description, instructor } = req.body;

  db.run(
    "UPDATE courses SET courseName=?, description=?, instructor=? WHERE id=?",
    [courseName, description, instructor, id],
    () => res.json({ message: "Course updated" })
  );
};

exports.deleteCourse = (req, res) => {
  db.run(
    "DELETE FROM courses WHERE id=?",
    [req.params.id],
    () => res.json({ message: "Course deleted" })
  );
};
