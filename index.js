import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = 9000;

app.get("/test", (req, res) => {
  console.log("hitting server on /test path");
  res.json({ message: "Hello from Express test app" });
});

app.get("/hello", (req, res) => {
  console.log("hitting server on / path");
  res.json({ message: "Hello from Express app ok" });
});

app.listen(port, () => {
  console.log(`starting server on ${port}`);
});
