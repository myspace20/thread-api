import { Request, Response } from "express";
import { UserService } from "../../services/UserService";


export async function userPost(req:Request, res:Response){
    const user = await UserService.signUp(req.body)
    res.send(user)
}