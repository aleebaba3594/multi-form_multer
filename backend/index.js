const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // const pathtoSaveFile = "../frontend/public/images"
    // TODO: we can use above varaible instead of path to make directory (e,g:"../frontend/public/images")
    fs.mkdirSync("../frontend/public/images", { recursive: true });
    cb(null, "../frontend/public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

app.post("/uploads", upload.single("file"), (req, res) => {
  console.log(req.file, "file is here");
  res.send("upload successfully");
});
app.listen(5000, function () {
  console.log("running on port 4000");
});
