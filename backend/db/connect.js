import Mongoose from "mongoose";
import chalk from "chalk";

const url = "mongodb://127.0.0.1:27017/backend";
// The log connection success will not show if async is provided.
export const connectDB = async () => {
    try {
        console.log("🔌 Connecting to MongoDB...");
        await Mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(chalk.green("✅ MongoDB Connection Successful."));
    } catch (error) {
        throw new Error("🛑 MongoDB Connection Failed.", error);
    }
};
