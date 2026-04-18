<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const {
    addSchool,
    listSchools,
} = require("../controllers/schoolController");

router.post("/addSchool", addSchool);
router.get("/listSchools", listSchools);

=======
const express = require("express");
const router = express.Router();
const {
    addSchool,
    listSchools,
} = require("../controllers/schoolController");

router.post("/addSchool", addSchool);
router.get("/listSchools", listSchools);

>>>>>>> e2b204578e629e19cfc39851e5ce964848844056
module.exports = router;