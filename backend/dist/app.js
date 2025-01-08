"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const fakeNewsController_1 = require("./controllers/fakeNewsController");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: "http://localhost:3001",
}));
app.get("/fake-news", fakeNewsController_1.getFakeNews);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
