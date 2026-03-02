import { IJob } from "./jobs.interface";
import Job from "./jobs.model";
import { Types } from "mongoose";

const createJob = async (payload: Partial<IJob>) => {
  const job = await Job.create(payload);
  return job;
};

const getJobs = async() => {
    const jobs = Job.find()
    return jobs;
}
const getJobById = async (id: string) => {
  const job = await Job.findById(id);

  return job;
};
const deleteJobById = async (id: string) => {
  const job = await Job.findByIdAndDelete(id);

  return job;
};
export const JobServices = {
  createJob,
  getJobById,
  getJobs,
  deleteJobById
};
