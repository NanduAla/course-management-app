const express = require("express");
const cors = require("cors");

require("./models/userModel");
require("./models/courseModel");

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
