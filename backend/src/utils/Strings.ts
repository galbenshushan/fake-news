export const getFormattedString = (str: string) => {
  return str?.trim().replace(/^"|"$/g, "");
};
