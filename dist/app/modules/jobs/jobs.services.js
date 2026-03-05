"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobServices = void 0;
const jobs_model_1 = __importDefault(require("./jobs.model"));
const createJob = async (payload) => {
    const job = await jobs_model_1.default.create(payload);
    return job;
};
const getJobs = async () => {
    const jobs = jobs_model_1.default.find();
    return jobs;
};
const getJobById = async (id) => {
    const job = await jobs_model_1.default.findById(id);
    return job;
};
const deleteJobById = async (id) => {
    const job = await jobs_model_1.default.findByIdAndDelete(id);
    return job;
};
exports.JobServices = {
    createJob,
    getJobById,
    getJobs,
    deleteJobById,
};
//# sourceMappingURL=jobs.services.js.map