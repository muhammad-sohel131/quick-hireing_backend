import { Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { userServices } from "./user.services"
import { JwtPayload } from "jsonwebtoken"

const createUser = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body
    const createdUser = await userServices.createUser(payload)
    
    sendResponse(res, {
        success: true,
        message: "Created Account",
        statusCode: 201,
        data: createdUser
    })
})

const getMe = catchAsync(async (req: Request, res: Response) => {
    const user = req.user as JwtPayload
    const updatedUser = await userServices.getMe(user.userId)
    
    sendResponse(res, {
        success: true,
        message: "Created Rider Account",
        statusCode: 200,
        data: updatedUser
    })
})
export const userController = {
    createUser,
    getMe
}