import { subDays, format } from "date-fns";

export const getOneWeekBeforeFormattedDate = (): string => {
  const formattedOneWeekBefore = format(subDays(new Date(), 7), "yyyy-MM-dd");
  return formattedOneWeekBefore;
};
