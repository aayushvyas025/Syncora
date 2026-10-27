import Message from "#models/message.model";
import { uploadToCloudinary } from "#utils/cloudinary.util";
import { messageInfoValidation } from "#validations/message.validation";

export const getMessages = async (request, response, next) => {
  try {
    const { _id: senderId } = request.user;
    const { id: receiverId } = request.params;

    if (
      !mongoose.Types.ObjectId.isValid(senderId) ||
      !mongoose.Types.ObjectId.isValid(receiverId)
    ) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid userId" });
    }

    const messages = await Message.find({
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    });

    return response.status(200).json({
      success: true,
      message: "Messages fetch from database",
      messages,
    });
  } catch (error) {
    console.error(`Error, while fetching messages: ${error.message}`);
    next(error);
  }
};

export const sendMessages = async (request, response, next) => {
  try {
    const { _id: senderId } = request.user;
    const { id: receiverId } = request.params;
    const { text, image } = request.body;

    if (
      !mongoose.Types.ObjectId.isValid(senderId) ||
      !mongoose.Types.ObjectId.isValid(receiverId)
    ) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid userId" });
    }

    const { isValid, error } = messageInfoValidation(text, image);

    if (!isValid) {
      return response.status(400).json({ success: false, message: error });
    }

    let secureImageUrl;
    if (image) {
      secureImageUrl = uploadToCloudinary(image);
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: secureImageUrl,
    });

    await newMessage.save();

    return response
      .status(201)
      .json({ success: true, message: "Message created", newMessage });
  } catch (error) {
    console.error(`Error, while sending messages: ${error.message}`);
    next(error);
  }
};
