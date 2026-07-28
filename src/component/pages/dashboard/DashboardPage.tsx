import AppContainer from '@/component/common/AppContainer'
import { Button } from '@/component/common/ui/button';
import { Input } from '@/component/common/ui/input';
import { timeShamsi } from '@/lib/helpers/date';
import { exportExcel } from '@/lib/helpers/excel';
import { createClient } from '@/lib/helpers/supabase';
import { IBook } from '@/lib/types/booking';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts';

function DashboardPage() {
  const [list, setList] = useState<IBook[]>([])
  const [page] = useState(1)
  const router = useRouter()
  const searchParams = useSearchParams()

  const national_code = searchParams.get('national-code')
  const submit = useDebounceCallback((code: string) => {
    router.push(`/dashboard?national-code=${encodeURIComponent(code)}`)
  }, 2000)

  async function fetch() {
    const pageSize = 500
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    try {
      const supabase = await createClient()
      const booking = supabase
        .from("booking")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })

      if (national_code) booking.ilike('national_code', `%${national_code}%`)

      const { data, error } = await booking.range(from, to);

      if (error) throw error
      else setList(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    void fetch()
  }, [national_code])

  useEffect(() => {
    return () => {
      setList([])
    }
  }, [])


  return (
    <div className='flex justify-center'>
      <AppContainer className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between items-center'>
          <Button variant="destructive" className="!w-100px" onClick={() => exportExcel(list)}>خروجی اکسل</Button>
          <div className="">
            <Input placeholder='جستجو کد ملی' maxLength={10} onChange={(e) => submit(e.target.value)} />
          </div>
        </div>
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-[900px] w-full text-right text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-2 whitespace-nowrap">شناسه</th>
                <th className="px-2 py-2 whitespace-nowrap">نام</th>
                <th className="px-2 py-2 whitespace-nowrap">تور</th>
                <th className="px-2 py-2 whitespace-nowrap">تاریخ تولد</th>
                <th className="px-2 py-2 whitespace-nowrap">جنسیت</th>
                <th className="px-2 py-2 whitespace-nowrap">فرزندان همراه</th>
                <th className="px-2 py-2 whitespace-nowrap">شماره تماس</th>
                <th className="px-2 py-2 whitespace-nowrap">شماره تماس اضطراری</th>
                <th className="px-2 py-2 whitespace-nowrap">کد ملی</th>
                <th className="px-2 py-2 whitespace-nowrap">تاریخ ثبت نام</th>
                <th className="px-2 py-2 whitespace-nowrap">سابقه بیماری</th>
                <th className="px-2 py-2 whitespace-nowrap">توضیحات</th>
              </tr>
            </thead>

            <tbody>
              {list?.map((el, key) => (
                <tr
                  key={key}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="px-2 py-2 whitespace-nowrap">{el.id}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.name}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.tour}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{timeShamsi({ date: el.birth_date })}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.gender}</td>
                  <td className="px-2 py-2 flex flex-col gap-2 text-xs">{el.children ? el.children.map((el, key) => (
                    <div className="flex flex-row gap-x-2" key={key}>
                      <span>{el.name} با کد ملی {el.national_code} متولد {timeShamsi({ date: el.birth_date })}</span>
                    </div>
                  )) : null}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.phone}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.phone_emergency}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.national_code}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.created_at ? timeShamsi({ date: el.created_at }) : ""}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.medical_history}</td>
                  <td className="px-2 py-2 whitespace-nowrap">{el.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppContainer>
    </div>
  )
}

export default DashboardPage