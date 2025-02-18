// controllers/taskController.ts
import { Request, Response } from "express";
import Task from "../models/Task";
import { CustomRequest } from "../middleware/auth";

// Create a new task
export const createTask = async (req: CustomRequest, res: Response) => {
  try {
    const task = new Task({
      ...req.body,
      owner: req.user?._id,
    });
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Get all tasks of the logged-in user
export const getTasks = async (req: CustomRequest, res: Response) => {
  try {
    const tasks = await Task.find({ owner: req?.user?._id });
    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
};

// Get a specific task by ID
export const getTaskById = async (req: CustomRequest, res: any) => {
  try {
    const _id = req.params.id;
    const task = await Task.findOne({ _id, owner: req?.user?._id });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
};

// Update a task by ID
export const updateTask = async (req: CustomRequest, res: any) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const task = await Task.findOne({ _id, owner: req?.user?._id });
    if (!task) {
      return res.status(404).send();
    }
    updates.forEach((update) => ((task as any)[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Delete a task by ID
export const deleteTask = async (req: CustomRequest, res: any) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOneAndDelete({ _id, owner: req?.user?._id });
    if (!task) {
      return res.status(404).send();
    }
    res.send({ data: task, message: "Task Deleted!" });
  } catch (e) {
    res.status(500).send();
  }
};
