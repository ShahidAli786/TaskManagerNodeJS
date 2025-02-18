import { Schema, model, Document, Model } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
  owner: Object; // Reference to User
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Task = model<ITask>("Task", taskSchema);

export default Task;
