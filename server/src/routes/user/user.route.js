import {
  deleteUserProfile,
  getAllUsers,
  updateUserProfile,
  userAuthenticated,
} from "#controllers/user/user.controller";
import { protectedRoute } from "#middlewares/auth.middleware";
import express from "express";

const router = express.Router();

router.use(protectedRoute);

router.get("/all", getAllUsers);
router.put("/update-profile", updateUserProfile);
router.get("/authenticated", userAuthenticated);
router.delete("/delete-profile", deleteUserProfile);

export default router;
