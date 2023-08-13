import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

export const dayJS = dayjs;
export { Dayjs } from "dayjs";