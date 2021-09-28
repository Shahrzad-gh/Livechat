const { Router } = require("express");
const conversationController = require("../Controllers/conversationController");
const router = Router();

router.post("/createconversation", conversationController.newConversation);
router.get("/getconversation/:userId", conversationController.getConversation);

module.exports = router;
