import { Response } from "express";
import { envVars } from "../config/env";

export interface AuthTokens {
  accessToken?: string;
}

export const setAuthCookie = (res: Response, tokenInfo: AuthTokens) => {
  if (tokenInfo.accessToken) {
    res.cookie("accessToken", tokenInfo.accessToken, {
       httpOnly: true,
            secure: envVars.ENVAIRONMENT === 'production', 
            sameSite: envVars.ENVAIRONMENT === 'production' ? 'none' : 'lax',
            maxAge: 24 * 60 * 60 * 1000, 
            path: '/',
    });
  }
};
