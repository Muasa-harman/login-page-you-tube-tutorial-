import express from "express";
import { Register, signin } from "../controller/user.js";



const router = express.Router()

router.post("/register",Register);
router.post("/login",signin);

export default router;