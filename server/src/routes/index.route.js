import express from "express";
import authRoutes from "#routes/auth/auth.route";
import userRoutes from "#routes/user/user.route";
import messageRoutes from "#routes/message/message.route";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/message", messageRoutes)

export default router;
