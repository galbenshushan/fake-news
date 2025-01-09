import OpenAI from "openai";
import dotenv from "dotenv";
import { Roles } from "../enums/openAi";
import { gptModel, maxToken } from "../consts/openAi";
import { getFormattedString } from "./Strings";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export const callGPT = async (
  systemContent: string,
  userContent: string
): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: Roles.SYSTEM,
          content: systemContent,
        },
        {
          role: Roles.USER,
          content: userContent,
        },
      ],
      model: gptModel,
      max_tokens: maxToken,
    });

    const result = getFormattedString(
      response.choices[0]?.message?.content ?? "Default response"
    );
    return result.trim();
  } catch (error) {
    console.error("Error calling GPT:", error);
    throw new Error("Error calling GPT");
  }
};