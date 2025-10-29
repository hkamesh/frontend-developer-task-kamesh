import { Request, Response } from "express";
import Task from "../models/Task";

interface AuthRequest extends Request {
  user?: { id: string; role: string };
}

export const getTasks = async (req: AuthRequest, res: Response) => {
  const filter = req.user?.role === "admin" ? {} : { user: req.user?.id };
  const tasks = await Task.find(filter);
  res.json(tasks);
};

export const createTask = async (req: AuthRequest, res: Response) => {
  const { title, description } = req.body;
  const task = await Task.create({ user: req.user?.id, title, description });
  res.status(201).json(task);
};

export const updateTask = async (req: AuthRequest, res: Response) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (req.user?.role !== "admin" && task.user.toString() !== req.user?.id)
    return res.status(403).json({ message: "Not authorized" });

  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteTask = async (req: AuthRequest, res: Response) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (req.user?.role !== "admin" && task.user.toString() !== req.user?.id)
    return res.status(403).json({ message: "Not authorized" });

  await task.deleteOne();
  res.json({ message: "Task deleted" });
};
