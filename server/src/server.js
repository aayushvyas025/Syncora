import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import configDatabase from "#configs/database/database.config";
import appRoutes from "#routes/index.route";
import { server, app } from "#configs/socket/socket.config";

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.ORIGIN || "http://localhost:5173",
      credentials: true,
    }),
  );
}

app.use("/api", appRoutes);

app.use((error, request, response, next) => {
  console.log(error.message);
  response
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
});

async function mainServer() {
    const port = process.env.PORT;
  try {
    await configDatabase(); 
    server.listen(port,() => {
        console.log(`Server is up and running successfully`)
    })
  } catch (error) {
    console.error(`Error, while setup server: ${error.message}`);
  }
}

mainServer(); 
