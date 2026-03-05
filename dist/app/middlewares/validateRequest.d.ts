import { ZodObject } from "zod";
import { NextFunction, Request, Response } from "express";
export declare const validateRequest: (zodSchema: ZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=validateRequest.d.ts.map