import { storeUser } from "../controllers/AuthController";
import express from "express";
 const router=express.Router();
router.post('/signup',storeUser);
export default router;