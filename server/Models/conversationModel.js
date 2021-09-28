const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    conversationName: {
      type: String,
      required: true,
    },
    members: {
      type: Array,
    },
  },
  {
    timestamps: {
      createAt: true,
      updateAt: false,
    },
  }
);

const Conversation = mongoose.model("conversation", conversationSchema);
module.exports = Conversation;
