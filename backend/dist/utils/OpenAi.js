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
exports.callGPT = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
const openAi_1 = require("../enums/openAi");
const openAi_2 = require("../consts/openAi");
const Strings_1 = require("./Strings");
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPEN_AI_KEY,
});
const callGPT = (systemContent, userContent) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const response = yield openai.chat.completions.create({
            messages: [
                {
                    role: openAi_1.Roles.SYSTEM,
                    content: systemContent,
                },
                {
                    role: openAi_1.Roles.USER,
                    content: userContent,
                },
            ],
            model: openAi_2.gptModel,
            max_tokens: openAi_2.maxToken,
        });
        const result = (0, Strings_1.getFormattedString)((_c = (_b = (_a = response.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) !== null && _c !== void 0 ? _c : "Default response");
        return result.trim();
    }
    catch (error) {
        console.error("Error calling GPT:", error);
        throw new Error("Error calling GPT");
    }
});
exports.callGPT = callGPT;
