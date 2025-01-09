import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

require("dayjs/locale/en");
require("dayjs/locale/fr");

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

dayjs.tz.setDefault("UTC");
dayjs.locale("en");

export const calculateEndDate = (durationValue: string): Date => {
  const value = parseFloat(durationValue)
  const now = dayJS()
  
  if (durationValue.startsWith("0.")) {
    return now.add(value * 10, "hour").toDate()
  }
  
  return now.add(value, "day").toDate()
}

export const dayJS = dayjs;
export { Dayjs } from "dayjs";