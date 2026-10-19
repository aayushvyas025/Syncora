import { updateUserProfile } from "#controllers/user/user.controller";
import { protectedRoute } from "#middlewares/auth.middleware";
import express from "express";

const router = express.Router();

router.put("/update-profile", protectedRoute, updateUserProfile);

export default router;
