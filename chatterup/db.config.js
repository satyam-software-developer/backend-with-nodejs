import mongoose from "mongoose";
// Database url added in .env
const baseUrl = process.env.DB_URL || "0.0.0.0:27017";

// Connect to the database
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://${baseUrl}/chatterup`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};
