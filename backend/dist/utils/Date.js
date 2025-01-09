"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneWeekBeforeFormattedDate = void 0;
const date_fns_1 = require("date-fns");
const getOneWeekBeforeFormattedDate = () => {
    const formattedOneWeekBefore = (0, date_fns_1.format)((0, date_fns_1.subDays)(new Date(), 7), "yyyy-MM-dd");
    return formattedOneWeekBefore;
};
exports.getOneWeekBeforeFormattedDate = getOneWeekBeforeFormattedDate;
