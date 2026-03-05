import { IUser } from "../user/user.interface";
export declare const AuthServices: {
    credentialsLogin: (payload: Partial<IUser>) => Promise<{
        accessToken: string;
        user: {
            _id: string;
            name?: string;
            email: string;
            role?: import("../user/user.interface").Role;
            __v: number;
        };
    }>;
};
//# sourceMappingURL=auth.services.d.ts.map