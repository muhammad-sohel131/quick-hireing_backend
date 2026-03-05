"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const jobs_services_1 = require("./jobs.services");
const createJob = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const createdJob = await jobs_services_1.JobServices.createJob(payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Created Job",
        statusCode: 201,
        data: createdJob
    });
});
const getJobs = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const jobs = await jobs_services_1.JobServices.getJobs();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Jobs Fetched successfully.",
        statusCode: 200,
        data: jobs
    });
});
const deleteJobById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const job = await jobs_services_1.JobServices.deleteJobById(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Job is deleted successfully.",
        statusCode: 200,
        data: job
    });
});
const getJobById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const job = await jobs_services_1.JobServices.getJobById(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Job Fetched successfully.",
        statusCode: 200,
        data: job
    });
});
exports.jobController = {
    createJob,
    getJobById,
    deleteJobById,
    getJobs,
};
//# sourceMappingURL=jobs.controllers.js.map