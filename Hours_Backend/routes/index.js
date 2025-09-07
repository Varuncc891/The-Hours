const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const { authenticateToken } = require("../middleware/auth");

router.use("/", authRoutes);

router.get("/home", authenticateToken, (req, res) => {
  res.json({ 
    message: `Welcome user ${req.user.userId}`,
  });
});

module.exports = router;