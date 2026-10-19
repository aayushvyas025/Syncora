import User from "#models/user.model";
import {
  clearTokenCookie,
  generateToken,
  hashingPassword,
  passwordChecker,
} from "#utils/auth.util";
import {
  userCredValidator,
  userInfoValidator,
} from "#validations/auth.validation";

export async function signupUser(request, response, next) {
  try {
    const { fullname, email, password } = request.body;

    const { isValid, field } = userInfoValidator(fullname, email, password);

    if (!isValid) {
      return response.status(400).json({ success: false, message: field });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return response
        .status(409)
        .json({ success: false, message: "User already exist in Database" });
    }

    const hashedPassword = await hashingPassword(password);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    if (!newUser) {
      return response
        .status(400)
        .json({ success: false, message: "User registration failed" });
    }

    generateToken(newUser._id, response);

    return response.status(201).json({
      success: true,
      message: "User register successfully",
      newUser: {
        _id: newUser?._id,
        fullname: newUser?.fullname,
        email: newUser?.email,
        profilePic: newUser?.profilePic,
      },
    });
  } catch (error) {
    console.error(`Error while signup: ${error.message}`);
    next(error);
  }
}

export async function loginUser(request, response, next) {
  try {
    const { email, password } = request.body;

    const { isValid, field } = userCredValidator(email, password);

    if (!isValid) {
      return response.status(400).json({ success: false, message: field });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const validPassword = await passwordChecker(password, user.password);

    if (!validPassword) {
      return response.status(400).json({ success: false, message: "Invalid " });
    }

    generateToken(user._id, response);

    response.status(200).json({
      success: true,
      message: "User logged-in successfully",
      loginUser: {
        fullname: user.fullname,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.error(`Error, while login user: ${error.message}`);
    next(error);
  }
}

export async function logoutUser(request, response, next) {
  try {
    clearTokenCookie(response);
    return response
      .status(200)
      .json({ success: true, message: "User logout successfully" });
  } catch (error) {
    console.error(`Error, while user logout: ${error.message}`);
    next(error);
  }
}
