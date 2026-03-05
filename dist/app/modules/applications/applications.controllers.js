"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobApplicationController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const applications_services_1 = require("./applications.services");
const createJobApplication = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const createdJobApplication = await applications_services_1.JobApplicationServices.createJobApplication(payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Created Job Application",
        statusCode: 201,
        data: createdJobApplication
    });
});
const getJobApplications = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const jobApplications = await applications_services_1.JobApplicationServices.getJobApplications();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Fetched Job Application",
        statusCode: 200,
        data: jobApplications
    });
});
exports.jobApplicationController = {
    createJobApplication,
    getJobApplications
};
//# sourceMappingURL=applications.controllers.js.map