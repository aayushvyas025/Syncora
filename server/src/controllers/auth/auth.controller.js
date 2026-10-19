import User from "#models/user.model";
import { generateToken, hashingPassword } from "#utils/auth.util";
import { userInfoValidator } from "#validations/auth.validation";

export async function signupUser(request, response, next) {
  try {
    const { fullname, email, password } = request.body;

    const { isValid, field } = userInfoValidator({ fullname, email, password });

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

    const token = generateToken(newUser._id, response);
    
    
    if (!newUser || !token) {
      return response
      .status(400)
      .json({ success: false, message: "User registration failed" });
    } 
    
    await newUser.save();
   
    return response.status(201).json({success:true, message:'User register successfully', newUser:{
        _id: newUser?._id,
        fullname:newUser?.fullname
    }})

  } catch (error) {
    console.error(`Error while signup: ${error.message}`);
    next(error);
  }
}

export async function loginUser(request, response, next) {}

export async function logoutUser(request, response, next) {}
