import {
  updateUserProfile,
  userAuthenticated,
} from "#controllers/user/user.controller";
import { protectedRoute } from "#middlewares/auth.middleware";
import express from "express";

const router = express.Router();

router.put("/update-profile", protectedRoute, updateUserProfile);
router.get("/authenticated", protectedRoute, userAuthenticated);

export default router;
