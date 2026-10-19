import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      trim: true,
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      trim: true,
      required: true,
    },
    text: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true, versionKey: false },
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
