const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const newsRoutes = require("./routes/newsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/newsDB");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/api/news", newsRoutes);

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
