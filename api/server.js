import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import DbConnection from "./database/connection.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello!!!");
// });

app.listen(PORT, () => {
    DbConnection();
    console.log(`Server running on port ${PORT}`)
});