import User from "#models/user.model";
import { uploadToCloudinary } from "#utils/cloudinary.util";
import { request } from "express";
import mongoose from "mongoose";

export const getAllUsers = async (request, response, next) => {
  try {
    const { _id: authId } = request.user;
    const users = await User.find({ _id: { $ne: authId } }).sort({
      createdAt: -1,
    });

    if (!users) {
      return response
        .status(404)
        .json({ success: false, message: "Users not found" });
    }

    return response.status(200).json({
      success: true,
      message:
        users.length > 0 ? `${users.length} Users fetched` : `No user found`,
    });
  } catch (error) {
    console.error(`Error, while fetching user: ${error.message}`);
    next(error);
  }
};

export const getUserById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const user = await User.findById(id);

    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return (
      response.status(200),
      json({ success: true, message: "User fetch from database" })
    );
  } catch (error) {
    console.error(`Error, while fetching user: ${error.message}`);
    next(error);
  }
};

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

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profilePic: secureImageUrl,
      },
      defaultOptions,
    );

    return response.status(200).json({
      success: true,
      message: "User profile updated",
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

export const deleteUserProfile = async (request, response, next) => {
  try {
    const { _id: userId } = request.user;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid userId" });
    }

    await User.findByIdAndDelete(userId);

    return response
      .status(200)
      .json({ success: true, message: "User deleted from database" });
  } catch (error) {
    console.error(`Error, while deleting user: ${error.message}`);
    next(error);
  }
};
