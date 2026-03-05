import { IJob } from "./jobs.interface";
import { Types } from "mongoose";
export declare const JobServices: {
    createJob: (payload: Partial<IJob>) => Promise<import("mongoose").Document<unknown, {}, IJob, {}, import("mongoose").DefaultSchemaOptions> & IJob & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    getJobById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IJob, {}, import("mongoose").DefaultSchemaOptions> & IJob & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getJobs: () => Promise<(import("mongoose").Document<unknown, {}, IJob, {}, import("mongoose").DefaultSchemaOptions> & IJob & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    deleteJobById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IJob, {}, import("mongoose").DefaultSchemaOptions> & IJob & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=jobs.services.d.ts.map