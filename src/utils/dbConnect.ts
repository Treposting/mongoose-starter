import colors from "colors";
import mongoose from "mongoose";
import log from "./logger";
const MONGO_URL = process.env.MONGO_URI || "";
const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URL);
    log.info(colors.green.bold(`Database connection is successful 🛢`));
  } catch (error) {
    log.error(colors.red.bold(`Database connection error: ${error}`));
  }
};
export default dbConnect;
