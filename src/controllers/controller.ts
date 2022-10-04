import { Request, Response } from "express";

/* for get all the users */
export const getAllUsers = async (req: Request, res: Response) => {
  res.send("get all users");
};
