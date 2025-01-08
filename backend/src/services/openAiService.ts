import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export const generateFakeTitle = async (realTitle: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an AI that generates fake news titles based on real ones. The fake titles should be absurd, bizarre, and exaggerated but still related to the original topic in english only",
        },
        {
          role: "user",
          content: `Generate a bizarre, exaggerated fake news title based on the following real title: "${realTitle}"`,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 50,
    });

    const fakeTitle =
      response.choices[0]?.message?.content?.trim() ?? "Default fake title";
    return fakeTitle;
  } catch (error) {
    console.error("Error generating fake title:", error);
    throw new Error("Error generating fake title");
  }
};
