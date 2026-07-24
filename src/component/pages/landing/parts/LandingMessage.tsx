"use client"
import AppContainer from '@/component/common/AppContainer'
import React from 'react'
import FormatQuoteRoundedIcon from '@iconify-react/material-symbols-light/format-quote-rounded';

function LandingMessage() {
    return (
        <div className="flex justify-center px-8 md:px-0">
            <AppContainer className='flex flex-col gap-4 w-full bg-[var(--color-background)] rounded-xl p-4 px-14 md:px-16 relative'>
                <FormatQuoteRoundedIcon className='w-8 md:w-12 text-[var(--color-secondary)] absolute right-0 top-0 m-3' />
                <p className='text-xs md:text-lg'>
                    دعوت به سفر عشق؛ ثبت‌نام راهپیمایی اربعین
                    <br />
                    اربعین، میعاد عاشقان و تجدید عهد با سیدالشهدا (ع) است. برای هماهنگی بهتر خدمات و برنامه‌ریزی سفر، لطفاً اطلاعات خود را ثبت نمایید تا افتخار همراهی شما را داشته باشیم.
                </p>
            </AppContainer>
        </div>
    )
}

export default LandingMessage