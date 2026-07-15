import express from "express";
import {
    createNote,
    getNotes,
    updateNote,
    deleteNote
} from "../controllers/note.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/notes", authMiddleware, createNote);
router.get("/notes", authMiddleware, getNotes);
router.put("/notes/:id", authMiddleware, updateNote);
router.delete("/notes/:id", authMiddleware, deleteNote);

export default router;