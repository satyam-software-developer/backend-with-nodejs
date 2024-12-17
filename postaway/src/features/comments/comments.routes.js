// routes/commentRoutes.js

import express from "express";
const router = express.Router();

// Import comment controller
import { createComment } from "./comments.controller.js";
import { getAllCommentsForPost } from "./comments.controller.js";
import { updateComment } from "./comments.controller.js";
import { deleteComment } from "./comments.controller.js";





// Create a new comment
router.post("/", createComment);

// Get all comments
router.get("/", getAllCommentsForPost);

// Update a comment
router.put("/:id", updateComment);

// Delete a comment
router.delete("/:id", deleteComment);

export default router;
