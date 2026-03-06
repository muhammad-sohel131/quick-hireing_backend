import { Response } from "express";
import { envVars } from "../config/env";

export interface AuthTokens {
  accessToken?: string;
}

export const setAuthCookie = (res: Response, tokenInfo: AuthTokens) => {
  if (tokenInfo.accessToken) {
    const isProduction = envVars.ENVAIRONMENT === 'production';
    console.log(envVars.ENVAIRONMENT)
    res.cookie("accessToken", tokenInfo.accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' as const : 'lax' as const,
      maxAge: 24 * 60 * 60 * 1000,
      path: '/',
    });
  }
};
