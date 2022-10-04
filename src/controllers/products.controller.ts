import { Request, Response } from "express";

// post data
const createProduct = async (req: Request, res: Response) => {
  res.send(
    "It's working! Yayyy"
  );
};

export const productsRouter = { createProduct };
