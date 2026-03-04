import { Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { JwtPayload } from "jsonwebtoken"
import { JobServices } from "./jobs.services"

const createJob = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body
    const createdJob = await JobServices.createJob(payload)
    
    sendResponse(res, {
        success: true,
        message: "Created Job",
        statusCode: 201,
        data: createdJob
    })
})
const getJobs = catchAsync(async (req: Request, res: Response) => {
    const jobs = await JobServices.getJobs()
    
    sendResponse(res, {
        success: true,
        message: "Jobs Fetched successfully.",
        statusCode: 200,
        data: jobs
    })
})

const deleteJobById= catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const job = await JobServices.deleteJobById(id as string)
    
    sendResponse(res, {
        success: true,
        message: "Job is deleted successfully.",
        statusCode: 200,
        data: job
    })
})

const getJobById = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const job = await JobServices.getJobById(id as string)
    
    sendResponse(res, {
        success: true,
        message: "Job Fetched successfully.",
        statusCode: 200,
        data: job
    })
})
export const jobController = {
    createJob,
    getJobById,
    deleteJobById,
    getJobs,
}