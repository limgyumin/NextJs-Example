import moment from "moment";

export const getDateFormat = (date: Date): string => {
  return moment(date).locale("en").format("MMMM D, YYYY");
};
