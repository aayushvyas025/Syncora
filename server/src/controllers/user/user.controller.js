import mongoose from "mongoose";

export const updateUserProfile = (request, response, next) => {
  try {
    const { userId } = request.user;
    const { profilePic } = request.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid userId" });
    }

    if (typeof profilePic !== "string" || !profilePic.trim()) {
      return response
        .status(400)
        .json({ success: false, message: "Profile pic required" });
    }

    
  } catch (error) {
    console.error(`Error, while updating user profile: ${error.message}`);
    next(error);
  }
};
