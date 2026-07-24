"use client"
import React from 'react'
import LocationOnOutlineIcon from '@iconify-react/material-symbols-light/location-on-outline';
import ArOnYouOutlineIcon from '@iconify-react/material-symbols-light/ar-on-you-outline';
import VerifiedUserOutlineIcon from '@iconify-react/material-symbols-light/verified-user-outline';

const options = [
    {
        icon: VerifiedUserOutlineIcon,
        title: "سفر ایمن",
        caption: "و ارام"
    },
    {
        icon: LocationOnOutlineIcon,
        title: "خدمات رفاهی",
        caption: "و پشتیبانی"
    },
    {
        icon: ArOnYouOutlineIcon,
        title: "همراهی مطمئن",
        caption: "در تمام مسیر"
    },
]

function HeroIcons() {
    return (
        <div className="flex flex-row justify-center md:justify-start gap-2 md:gap-9 w-[300px] m-auto mt-4 md:m-0 md:w-auto">
            {options.map((el, key) => (
                <div key={key} className="flex flex-col w-1/3 md:w-auto text-center justify-center">
                    <el.icon className='w-10 md:w-12 m-auto mb-2' />
                    <p className='text-sm md:text-lg font-medium leading-4 md:leading-6'>{el.title}</p>
                    <p className='text-sm md:text-md text-gray-600'>{el.caption}</p>
                </div>
            ))}
        </div>
    )
}

export default HeroIcons