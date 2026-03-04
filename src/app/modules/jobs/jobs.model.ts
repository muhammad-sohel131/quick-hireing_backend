import mongoose, { Model, Schema } from "mongoose";
import { IJob } from "./jobs.interface";

const JobSchema = new Schema<IJob>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    companyImageUrl: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: [String],
      required: true,
      enum: [
        "Design",
        "Marketing",
        "Business",
        "Technology",
        "Engineering",
        "Finance",
        "Human Resource",
      ],
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

const Job: Model<IJob> =
  mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;
