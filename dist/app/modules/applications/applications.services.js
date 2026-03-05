"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplicationServices = void 0;
const applications_model_1 = require("./applications.model");
const createJobApplication = async (payload) => {
    const jobApplication = await applications_model_1.JobApplication.create(payload);
    return jobApplication;
};
const getJobApplications = async () => {
    const jobApplications = await applications_model_1.JobApplication.find();
    return jobApplications;
};
exports.JobApplicationServices = {
    createJobApplication,
    getJobApplications
};
//# sourceMappingURL=applications.services.js.map