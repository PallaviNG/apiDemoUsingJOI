const router = require("express").Router();

const apiController = require("../controller/apiController");
const JOIValidation = require("../middleware/JOIValidator");

router.get("/", apiController.apiHome);

router.get("/get-student-list", apiController.getStudentList);

router.post("/save-new-student", JOIValidation.saveNewStudentValidation, apiController.saveNewStudent);

module.exports = router;