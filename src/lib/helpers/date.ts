import dayjs from "dayjs";
import jalaliday from "jalaliday";

export const timeShamsi = (date: string) => {
    dayjs.extend(jalaliday);
    return dayjs(date)
        .calendar("jalali")
        .locale("fa")
        .format("HH:mm YYYY/MM/DD");
}