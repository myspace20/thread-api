import { Request, Response } from "express";
import { SessionService } from "../../services/SessionService";
import { JWTService } from "../../services/JWTService";
import configs from "../../../config/database/default";


export async function sessionPost(req:Request, res:Response){
    const session = await SessionService.login(req.body)
    const tokenData = {id:session.session.id, userId:session.existingUser.id}
    const accessToken = JWTService.sign(
        tokenData,
        configs.keys.accessTokenPrivateKey,
        configs.accessTokenSigningOptions
      );
      const refreshToken = JWTService.sign(
        tokenData,
        configs.keys.refreshTokenPrivateKey,
        configs.refreshTokenSigningOptions
      );
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: true,
        maxAge: 300000,
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: true,
        maxAge: 3.154e10,
      });
    res.send('login successful')
}

export async function sessionPatch(req:Request, res:Response) {
    res.cookie("accessToken", "", {
        maxAge: 0,
      });
      res.cookie("refreshToken", "", {
        maxAge: 0,
      });
      const user = res.locals.user;
      await SessionService.inValidateSession(user.id);
      res.status(204).send(`logout successful`);
}