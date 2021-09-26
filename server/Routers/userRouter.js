const { Router } = require("express");
const userController = require("../Controllers/userController");
const router = Router();

router.post("/register", userController.signup);
router.post("/login", userController.signin);
router.get("/signout", userController.signout);

module.exports = router;
