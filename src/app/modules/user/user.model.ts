import { model, Schema } from "mongoose";
import { IUser, Role } from "./user.interface";


const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: Role,
        default: Role.ADMIN
    },

}, {
    toJSON: {
      transform: (_doc, ret: any) => {
        delete ret.password; 
        return ret;
      },
    },
    toObject: {
      transform: (_doc, ret: any) => {
        delete ret.password;
        return ret;
      },
    },
  })

export const User = model<IUser>('User', userSchema)