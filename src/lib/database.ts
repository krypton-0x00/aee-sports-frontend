import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  
  if (connection.isConnected) {
    console.log("Already Connected To DB.");

    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    connection.isConnected = db.connections[0].readyState; //is a number

    console.log("DB connected sucessfully");
  } catch (error) {
    console.log("Error during Connection to DB.", error);

    process.exit();
  }
}

export default dbConnect;
