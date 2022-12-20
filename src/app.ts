import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import path from "path";
import dbConnect from "./utils/dbConnect";
import log from "./utils/logger";
const app: Application = express();
/* middleware  */
app.use(cors());
app.use(express.json());

// connect to database
try {
  dbConnect();
} catch (error) {
  log.error(`Database error: ${error}`);
}
// set the view engine to ejs
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

/* here will be all the imports routes */
import productRoute from "./routes/v1/productRoute";
import testRoute from "./routes/v1/test";

/* here will be the all the routes */
app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

/* Here is the User Routes */
app.use("/api/v1/test", testRoute);
app.use("/api/v1/products", productRoute);

// 404 response
app.all("*", (req: Request, res: Response) => {
  res.status(404).send({
    message: "Not Found",
    status: 404,
  });
});
export { app };
