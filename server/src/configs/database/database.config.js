import mongoose from "mongoose";

const configDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) throw new Error("Error, mongo-uri required");
    const database = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Database connected successfully, mongodb host-name: ${database.connection.host}`,
    );
  } catch (error) {
    console.error(`Error, while configure database: ${error.message}`);
    process.exit(1);
  }
};

export default configDatabase;
