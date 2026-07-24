import * as XLSX from "xlsx";
import { IBook } from "../types/booking";
import { timeShamsi } from "./date";

export function exportExcel(list: IBook[]) {
  if (!list?.length) return;

  const data = list.map((item) => ({
    "نام": item.name,
    "تور": item.tour,
    "تعداد بزرگسال": item.adults_count,
    "تعداد کودک": item.children_count,
    "شماره تماس": item.phone,
    "کد ملی": item.national_code,
    "تاریخ ثبت": item.created_at ? timeShamsi(item.created_at) : '',
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

  XLSX.writeFile(workbook, "bookings.xlsx");
};