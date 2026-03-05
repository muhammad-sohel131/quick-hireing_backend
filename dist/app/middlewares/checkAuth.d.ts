import { Request, Response, NextFunction } from "express";
export declare const checkAuth: (...roles: string[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=checkAuth.d.ts.map