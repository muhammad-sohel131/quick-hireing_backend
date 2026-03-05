import mongoose from "mongoose";
import { IGenericErrorResponse } from "../interfaces/error.types";
export declare const errorFormatter: {
    handleCastError: (err: mongoose.Error.CastError) => IGenericErrorResponse;
    handleDuplicateError: (err: any) => IGenericErrorResponse;
    handleValidationError: (err: any) => IGenericErrorResponse;
    handleZodError: (err: any) => IGenericErrorResponse;
};
//# sourceMappingURL=errorFormatters.d.ts.map