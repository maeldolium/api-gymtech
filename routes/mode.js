import express from "express";
import { getMode, setMode } from "../controllers/modeController.js";

const router = express.Router();

router.get("/", getMode); // Pour l'ESP
router.post("/", setMode); // Pour le site admin

export default router;
