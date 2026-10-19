import User from "#models/user.model";
import { verifyToken } from "#utils/auth.util";

export const protectedRoute = async (request, response, next) => {
  try {
    const token = request.cookies.JWT_TOKEN;

    if (!token) {
      return response.status(401).json({
        success: false,
        message: "Un-authorized - no token provided",
      });
    }

    const verifiedToken = verifyToken(token);

    if (!verifiedToken) {
      return response
        .status(401)
        .json({ success: false, message: "Un-authorized - invalid token" });
    }

    const verifiedUser = await User.findById(verifiedToken.userId).select(
      "-password",
    );

    request.user = verifiedUser;

    next();
  } catch (error) {
    console.error(`Error, un-authorized protected route: ${error.message}`);
    next(error);
  }
};
