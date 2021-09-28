const Conversation = require("../Models/conversationModel");

module.exports.newConversation = async (req, res) => {
  const { senderId, receiverId, conversationName } = req.body;
  try {
    const conversation = await Conversation.create({
      members: [senderId, receiverId],
      conversationName,
    });
    res.status(201).json({ conversation });
  } catch (error) {
    res.status(400).json({ err });
  }
};

module.exports.getConversation = async (req, res) => {
  const { userId } = req.params;
  try {
    const conversation = await Conversation.find({
      members: { $in: [userId] },
    });
    res.status(201).json({ conversation });
  } catch (error) {
    res.status(400).json({ err });
  }
};
