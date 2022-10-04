import { Request, Response } from "express";

const getAllTest = (req: Request, res: Response) => {
  res.send({ message: "getAllTest", status: 200 });
};

const createTest = (req: Request, res: Response) => {
  res.send({
    message: "createTest",
    status: 200,
    body: req.body,
  });
};

export const testRouter = { getAllTest, createTest };
