import { Types } from "mongoose";

export interface IJob {
  _id?: Types.ObjectId;
  title: string;
  company: string;
  companyImageUrl: string;
  location: string;
  category: string;
  description: string;
  createdAt: Date;
}
