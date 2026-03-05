import { Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { JobApplicationServices } from "./applications.services"

const createJobApplication = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body
    const createdJobApplication = await JobApplicationServices.createJobApplication(payload)
    
    sendResponse(res, {
        success: true,
        message: "Created Job Application",
        statusCode: 201,
        data: createdJobApplication
    })
})
const getJobApplications = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body
    const jobApplications = await JobApplicationServices.getJobApplications()
    
    sendResponse(res, {
        success: true,
        message: "Fetched Job Application",
        statusCode: 200,
        data: jobApplications
    })
})

export const jobApplicationController = {
    createJobApplication,
    getJobApplications
}