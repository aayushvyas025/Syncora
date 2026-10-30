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
router.get("/authenticated", userAuthenticated);
router.put("/update-profile", updateUserProfile);
router.delete("/delete/:id", deleteUserProfile);
router.get('/:id', getUserById)

export default router;
