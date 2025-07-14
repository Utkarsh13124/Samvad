import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();  // creating app instance
const server = createServer(app);  // 
const io = connectToSocket(server); // 
import dotenv from "dotenv";
dotenv.config();

app.set("port", process.env.PORT || 8000); // setting port from environment variable. it is king of local storage.
app.use(cors()); // to handle cross origin error
app.use(express.json({ limit: "40kb" })); // to handle payload
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);
// app.use("/api/v2/users", newUserRoutes);  for version updates

const start = async () => {
  app.set("mongo_user", "utkarshp579");

  const connectionDb = await mongoose.connect(
    `mongodb+srv://utkarshp579:${process.env.DB_PASS}@cluster0.zgvaqp1.mongodb.net/`
  );

  console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {    // app.get("port")  --> is fetching from app 
    console.log("LISTENIN ON PORT 8000");
  });
};

start();





// app.get("/home", (req, res) => {
//     res.send("Hello World!");
//     console.log("Home page");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

