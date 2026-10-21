import express from "express";
import { protectedRoute } from "#middlewares/auth.middleware";
import {
  getMessages,
  sendMessages,
} from "#controllers/message/message.controller";

const router = express.Router();

router.use(protectedRoute);

router.get("/:id", getMessages);
router.post("/create/:id", sendMessages);

export default router;
