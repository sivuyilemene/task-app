require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// eslint-disable-next-line no-unused-vars
const { PrismaClient } = require("../generated/prisma");

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.get("api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
