"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplication = void 0;
const mongoose_1 = require("mongoose");
const jobApplicationSchema = new mongoose_1.Schema({
    job_id: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: false,
});
exports.JobApplication = (0, mongoose_1.model)("JobApplication", jobApplicationSchema);
//# sourceMappingURL=applications.model.js.map