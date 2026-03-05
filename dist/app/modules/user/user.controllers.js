"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const user_services_1 = require("./user.services");
const createUser = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const createdUser = await user_services_1.userServices.createUser(payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Created Account",
        statusCode: 201,
        data: createdUser
    });
});
const getMe = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const updatedUser = await user_services_1.userServices.getMe(user.userId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Created Rider Account",
        statusCode: 200,
        data: updatedUser
    });
});
exports.userController = {
    createUser,
    getMe
};
//# sourceMappingURL=user.controllers.js.map