import express, { Request, Response } from "express";
import { generateFakeTitle } from "../services/openAiService";

const router = express.Router();

router.get("/generate-fake-news", async (req: Request, res: Response) => {
  const { realTitle } = req.query;

  if (typeof realTitle !== "string") {
    return res
      .status(400)
      .json({ message: "Real title is required and must be a string" });
  }

  try {
    const fakeTitle = await generateFakeTitle(realTitle);
    return res.json({ realTitle, fakeTitle });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error generating fake news title" });
  }
});

export default router;
