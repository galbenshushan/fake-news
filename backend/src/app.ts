import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getFakeNews } from "./controllers/fakeNewsController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.get("/fake-news", getFakeNews);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
