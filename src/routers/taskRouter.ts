// routes/taskRoutes.ts
import express, { Request, Response } from "express";
import auth, { CustomRequest } from "../middleware/auth";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController";

const router = express.Router();

// Create a new task
router.post("/tasks", auth, createTask);

// Get all tasks of the logged-in user
router.get("/tasks", auth, getTasks);

// Get a specific task by ID
router.get("/tasks/:id", auth, getTaskById);

// Update a task by ID
router.put("/tasks/:id", auth, updateTask);

// Delete a task by ID
router.delete("/tasks/:id", auth, deleteTask);

export default router;
