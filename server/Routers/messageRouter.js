const { Router } = require("express");
const messageController = require("../Controllers/messageController");
const router = Router();

router.post("/addmessage", messageController.addMessage);
router.get("/getmessage/:conversationId", messageController.getMessage);

module.exports = router;
