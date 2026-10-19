import User from "#models/user.model";
import { uploadToCloudinary } from "#utils/cloudinary.util";
import mongoose from "mongoose";

export const updateUserProfile = async (request, response, next) => {
  try {
    const { _id: userId } = request.user;
    const { profilePic } = request.body;

    const defaultOptions = {
      new: true,
      runValidators: true,
    };

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

    const secureImageUrl = await uploadToCloudinary(profilePic);

    const updatedUser = await User.findById(
      userId,
      {
        profilePic: secureImageUrl,
      },
      defaultOptions,
    );

    return response.status(200).json({
      success: true,
      message: "User profile updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.error(`Error, while updating user profile: ${error.message}`);
    next(error);
  }
};

export const userAuthenticated = async (request, response, next) => {
  try {
    const user = request.user;
    return response.status(200).json({
      success: true,
      message: "User authenticated",
      authUser: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.error(
      `Error, while checking user authentication: ${error.message}`,
    );
    next(error);
  }
};
