const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 7000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myfile"), (req, res) => {
  res.send({ msg: "file uploded successfully", file: req.file });
});

//   GET /download → returns a list of all uploaded image filenames.
app.get("/download", (req, res) => {
  fs.readdir("uploads/", (err, files) => {
    if (err) {
      return res.status(500).send({ msg: "Error reading files" });
    }
    res.send({ images: files });
  });
});
// http:localhost:7000/download

// GET /download/:filename → returns a specific image by filename
app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, "uploads", filename);

  if (fs.existsSync(filepath)) {
    res.sendFile(filepath);
  } else {
    res.status(404).send({ msg: "Image not found" });
  }
});

//http://localhost:7000/download/1759733721391.png

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
