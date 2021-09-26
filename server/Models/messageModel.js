const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_avatar: {
      type: String,
      required: false,
    },
    message_text: {
      type: String,
      requied: true,
    },
  },
  {
    Timestamps: {
      createAt: true,
      updateAt: false,
    },
  }
);

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
