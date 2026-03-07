import { JobApplication } from "./applications.model";
import { IJobApplication } from "./applications.interface";

const createJobApplication = async (payload: Partial<IJobApplication>) => {
  const jobApplication = await JobApplication.create(payload);
  return jobApplication;
};
const getJobApplications = async () => {
  const jobApplications = await JobApplication.find().populate("job_id");
  return jobApplications;
};
export const JobApplicationServices = {
  createJobApplication,
  getJobApplications
};
