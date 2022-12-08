const express = require("express");
const cors = require("cors");
const colors = require("colors")
const connectDB = require('./config/db');
const userRoutes = require('./routes/UserRoutes');
const dotenv = require("dotenv");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user',userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log("server started".yellow.bold));
