import {
  deleteUserProfile,
  getAllUsers,
  getUserById,
  updateUserProfile,
  userAuthenticated,
} from "#controllers/user/user.controller";
import { protectedRoute } from "#middlewares/auth.middleware";
import express from "express";

const router = express.Router();

router.use(protectedRoute);

router.get("/all", getAllUsers);
router.get('/:id', getUserById)
router.put("/update-profile", updateUserProfile);
router.get("/authenticated", userAuthenticated);
router.delete("/delete-profile", deleteUserProfile);

export default router;
