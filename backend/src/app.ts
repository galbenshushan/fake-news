import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getFakeNews, getTotalNews } from "./controllers/fakeNewsController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:3001" }));

app.get("/total-fake-news", getTotalNews);
app.post("/fake-news", getFakeNews);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
