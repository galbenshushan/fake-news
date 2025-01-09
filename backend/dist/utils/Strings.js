"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedString = void 0;
const getFormattedString = (str) => {
    return str === null || str === void 0 ? void 0 : str.trim().replace(/^"|"$/g, "");
};
exports.getFormattedString = getFormattedString;
