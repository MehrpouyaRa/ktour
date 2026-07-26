import * as XLSX from "xlsx";
import { IBook } from "../types/booking";
import { timeShamsi } from "./date";

export function exportExcel(list: IBook[]) {
  if (!list?.length) return;

  const data = list.map((item) => ({
    "نام": item.name,
    "تور": item.tour,
    "تاریخ تولد": timeShamsi({ date: item.birth_date }),
    "جنسیت": item.gender,
    "فرزندان همراه": item.children?.length
      ? item.children
        .map(
          (child, index) =>
            `${index + 1}. ${child.name} | کد ملی: ${child.national_code} | تاریخ تولد: ${timeShamsi({ date: child.birth_date })}`
        )
        .join("\n")
      : "",
    "شماره تماس": item.phone,
    "شماره تماس اضطراری": item.phone_emergency,
    "کد ملی": item.national_code,
    "تاریخ ثبت": item.created_at ? timeShamsi({ date: item.created_at }) : '',
    "سابقه بیماری": item.medical_history,
    "توضیحات": item.description,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  Object.keys(worksheet).forEach((cell) => {
    if (cell.startsWith("!")) return;

    worksheet[cell].s = {
      alignment: {
        wrapText: true,
        vertical: "top",
      },
    };
  });

  // تنظیم ارتفاع ردیف‌ها
  worksheet["!rows"] = data.map((item) => {
    const children = item["فرزندان همراه"] || "";
    const lines = children.split("\n").length;

    return {
      hpx: Math.max(25, lines * 20),
    };
  });

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

  XLSX.writeFile(workbook, "bookings.xlsx");
};