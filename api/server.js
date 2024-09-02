import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import DbConnection from "./database/connection.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    DbConnection();
    console.log(`Server running on port ${PORT}`)
});