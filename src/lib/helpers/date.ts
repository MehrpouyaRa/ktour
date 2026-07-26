import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export const timeShamsi = ({ date }: { date: string | number }) => {
    if (!date) return
    return dayjs(date)
        .calendar("jalali")
        .locale("fa")
        .format("YYYY/MM/DD");
};