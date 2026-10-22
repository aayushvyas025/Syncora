import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import appRoutes from "#routes/index.route";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.ORIGIN || "http://localhost:5173",
      credentials: true,
    }),
  );
}

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use("/api", appRoutes);

app.use((error, request, response, next) => {
  console.log(error.message);
  response
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
});

export default app;
