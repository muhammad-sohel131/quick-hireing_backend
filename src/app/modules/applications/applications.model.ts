import { model, Schema } from "mongoose";
import { IJobApplication } from "./applications.interface";

const jobApplicationSchema = new Schema<IJobApplication>(
  {
    job_id: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    resume_link: {
      type: String,
      required: true,
    },
    cover_note: {
      type: String,
      default: "",
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

export const JobApplication = model<IJobApplication>(
  "JobApplication",
  jobApplicationSchema
);