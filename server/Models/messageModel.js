const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      requied: true,
    },
  },
  {
    timestamps: {
      createAt: true,
      updateAt: false,
    },
  }
);

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
