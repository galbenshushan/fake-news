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
const Date_1 = require("../utils/Date");
dotenv_1.default.config();
const fetchNewsArticles = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedYesterday = (0, Date_1.getOneWeekBeforeFormattedDate)();
    const urlParams = new URLSearchParams({
        from: formattedYesterday,
        sortBy: "popularity",
        apiKey: process.env.NEWS_API_KEY || "",
    });
    if (category) {
        urlParams.append("category", category);
    }
    const url = `https://newsapi.org/v2/top-headlines?${urlParams}`;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = yield response.json();
        const filteredArticles = data.articles
            .filter((article) => !!article.urlToImage)
            .slice(0, 14);
        return filteredArticles;
    }
    catch (error) {
        console.error("Error fetching news articles:", error);
        throw new Error("Error fetching news articles");
    }
});
exports.fetchNewsArticles = fetchNewsArticles;
