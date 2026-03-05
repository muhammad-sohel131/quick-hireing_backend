import { IJobApplication } from "./applications.interface";
export declare const JobApplicationServices: {
    createJobApplication: (payload: Partial<IJobApplication>) => Promise<import("mongoose").Document<unknown, {}, IJobApplication, {}, import("mongoose").DefaultSchemaOptions> & IJobApplication & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    getJobApplications: () => Promise<(import("mongoose").Document<unknown, {}, IJobApplication, {}, import("mongoose").DefaultSchemaOptions> & IJobApplication & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
};
//# sourceMappingURL=applications.services.d.ts.map