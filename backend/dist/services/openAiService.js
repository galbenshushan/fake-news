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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFakeTitle = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPEN_AI_KEY,
});
const generateFakeTitle = (realTitle) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const response = yield openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an AI that generates fake news titles based on real ones. The fake titles should be absurd, bizarre, and exaggerated but still related to the original topic in english only",
                },
                {
                    role: "user",
                    content: `Generate a bizarre, exaggerated fake news title based on the following real title: "${realTitle}"`,
                },
            ],
            model: "gpt-3.5-turbo",
            max_tokens: 50,
        });
        const fakeTitle = (_d = (_c = (_b = (_a = response.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.trim()) !== null && _d !== void 0 ? _d : "Default fake title";
        return fakeTitle;
    }
    catch (error) {
        console.error("Error generating fake title:", error);
        throw new Error("Error generating fake title");
    }
});
exports.generateFakeTitle = generateFakeTitle;
