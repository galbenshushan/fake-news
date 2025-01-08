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
exports.fetchNewsArticles = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fetchNewsArticles = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const urlParams = new URLSearchParams({
        q: "Apple",
        from: "2025-01-07",
        sortBy: "popularity",
        apiKey: process.env.NEWS_API_KEY || "",
    });
    if (category) {
        urlParams.append("category", category);
        urlParams.append("country", "us");
    }
    const url = `https://newsapi.org/v2/${category ? "everything" : "top-headlines"}?${urlParams}`;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = yield response.json();
        return data.articles.slice(0, 10);
    }
    catch (error) {
        console.error("Error fetching news articles:", error);
        throw new Error("Error fetching news articles");
    }
});
exports.fetchNewsArticles = fetchNewsArticles;
