import express from "express";
import cors from "cors"; 
import "dotenv/config"

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({extended:true, limit:'10mb'}));


// app.use('/auth', )

export default app;
