import { JobApplication } from "./applications.model";
import { IJobApplication } from "./applications.interface";

const createJobApplication = async (payload: Partial<IJobApplication>) => {
  const jobApplication = await JobApplication.create(payload);
  return jobApplication;
};

export const JobApplicationServices = {
  createJobApplication
};
