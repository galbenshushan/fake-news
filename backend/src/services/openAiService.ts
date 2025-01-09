import { callGPT } from "../utils/OpenAi";

export const generateFakeTitle = async (realTitle: string): Promise<string> => {
  const systemContent =
    "You are an AI that generates fake news titles based on real ones. The fake titles should be absurd, bizarre, and exaggerated but still related to the original topic in English only.";
  const userContent = `Generate a bizarre, exaggerated fake news title based on the following real title: "${realTitle}" in English only that won't be bigger than 50 characters`;

  return await callGPT(systemContent, userContent);
};

export const getArticleCategory = async (
  articleDescription: string
): Promise<string> => {
  const systemContent =
    "You are an AI that classifies articles based on their descriptions. The category should be one or two words and related to common topics like Technology, Health, Politics, Entertainment, Sports, etc.";
  const userContent = `Based on the following article description, classify the article into one of the common categories in English only (e.g., Technology, Health, Politics, Entertainment, Sports, etc.): "${articleDescription}". Please respond with only one or two words for the category.`;

  return await callGPT(systemContent, userContent);
};
