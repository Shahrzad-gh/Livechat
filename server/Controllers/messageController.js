const Message = require("../Models/messageModel");

module.exports.addMessage = async (req, res) => {
  const { conversationId, senderId, text } = req.body;
  try {
    const message = await Message.create({ conversationId, senderId, text });
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error });
  }
};
module.exports.getMessage = async (req, res) => {
  const { conversationId } = req.params;
  try {
    const messages = await Message.find({ conversationId });
    res.status(201).json({ messages });
  } catch (error) {
    res.status(400).json({ err });
  }
};
