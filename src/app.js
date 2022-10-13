const express = require("express");
const cors = require("cors");

const userRouter = require("./routers/user.router");
const nftRouter = require("./routers/nft.router");
const path = require("path");

const port = process.env.PORT;
require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.use(userRouter);
app.use(nftRouter);

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
