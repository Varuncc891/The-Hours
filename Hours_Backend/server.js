const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());

connectDB();

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));