import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

function Datepicker({ onChange, value }: { value: string | number | null, onChange(timestamp: string): void }) {
    return <DatePicker
        calendar={persian}
        locale={persian_fa}
        className="w-full"
        containerClassName="w-full"
        value={value || ""}
        onChange={(date) => {
            if (date) onChange(new Date(date.toDate().getTime()).toISOString())
        }}
        placeholder="تاریخ را انتخاب کنید"
        style={{
            border: "none",
            background: "none",
            outline: "none",
            boxShadow: "none"
        }}
    />
}

export default Datepicker