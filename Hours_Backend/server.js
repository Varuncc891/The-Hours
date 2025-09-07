const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");
require('dotenv').config();

const app = express();

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());

connectDB();

app.get("/api/news", async (req, res) => {
  try {
    const { category, pageNum = 1 } = req.query;
    
    const validCategories = ["general", "world", "nation", "business", "technology", "entertainment", "sports", "science", "health"];
    const newsCategory = validCategories.includes(category) ? category : "general";
    
    const url = `https://gnews.io/api/v4/top-headlines?category=${newsCategory}&lang=en&country=in&max=10&page=${pageNum}&apikey=${process.env.GNEWS_KEY}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Server news fetch error:", error);
    res.status(500).json({ 
      error: "Failed to fetch news",
      message: error.message 
    });
  }
});

app.use("/", router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
