import colors from "colors";
import "dotenv/config";
import { app } from "./app";
import dbConnect from "./utils/dbConnect";

const port: string | number = process.env.PORT || 5000;
const startServer = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log(colors.yellow.bold(`Server is running on port ${port}`));
      dbConnect();
    });
  } catch (error) {
    console.log(`Server error: ${error}`);
  }
};
startServer();
