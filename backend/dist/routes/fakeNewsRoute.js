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
const express_1 = __importDefault(require("express"));
const openAiService_1 = require("../services/openAiService");
const router = express_1.default.Router();
router.get("/generate-fake-news", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { realTitle } = req.query;
    if (typeof realTitle !== "string") {
        return res
            .status(400)
            .json({ message: "Real title is required and must be a string" });
    }
    try {
        const fakeTitle = yield (0, openAiService_1.generateFakeTitle)(realTitle);
        return res.json({ realTitle, fakeTitle });
    }
    catch (error) {
        return res
            .status(500)
            .json({ message: "Error generating fake news title" });
    }
}));
exports.default = router;
