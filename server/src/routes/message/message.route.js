import express from "express"
import { protectedRoute } from "#middlewares/auth.middleware";

const router = express.Router(); 

router.use(protectedRoute); 



export default router; 