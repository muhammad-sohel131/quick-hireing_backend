import { envVars } from "../../config/env";
import bcryptjs from "bcryptjs";
import { User } from "./user.model";
import { IUser } from "./user.interface";
const createUser = async (payload: Partial<IUser>) => {
  const { email, password, role } = payload;

  const hashPassword = await bcryptjs.hash(
    password as string,
    Number(envVars.BCRYPT_SALT_ROUND),
  );

  const user = await User.create({
    email: email as string,
    password: hashPassword as string,
    role: role as string,
  });

  return user;
};

const getMe = async (userId: string) => {
  const updatedUser = await User.findById(userId).select("-password");

  return updatedUser;
};

export const userServices = {
  createUser,
  getMe,
};
