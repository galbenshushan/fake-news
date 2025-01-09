"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleCategory = exports.generateFakeTitle = void 0;
const OpenAi_1 = require("../utils/OpenAi");
const generateFakeTitle = (realTitle) => __awaiter(void 0, void 0, void 0, function* () {
    const systemContent = "You are an AI that generates fake news titles based on real ones. The fake titles should be absurd, bizarre, and exaggerated but still related to the original topic in English only.";
    const userContent = `Generate a bizarre, exaggerated fake news title based on the following real title: "${realTitle}" in English only that won't be bigger than 40 characters`;
    return yield (0, OpenAi_1.callGPT)(systemContent, userContent);
});
exports.generateFakeTitle = generateFakeTitle;
const getArticleCategory = (articleDescription) => __awaiter(void 0, void 0, void 0, function* () {
    const systemContent = "You are an AI that classifies articles based on their descriptions. The category should be one or two words and related to common topics like Technology, Health, Politics, Entertainment, Sports, etc.";
    const userContent = `Based on the following article description, classify the article into one of the common categories in English only (e.g., Technology, Health, Politics, Entertainment, Sports, etc.): "${articleDescription}". Please respond with only one or two words for the category.`;
    return yield (0, OpenAi_1.callGPT)(systemContent, userContent);
});
exports.getArticleCategory = getArticleCategory;
