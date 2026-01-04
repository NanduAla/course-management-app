const express = require("express");
const auth = require("../middlewares/authMiddleware");
const controller = require("../controllers/courseController");

const router = express.Router();

router.post("/", auth, controller.createCourse);
router.get("/", auth, controller.getCourses);
router.put("/:id", auth, controller.updateCourse);
router.delete("/:id", auth, controller.deleteCourse);

module.exports = router;
