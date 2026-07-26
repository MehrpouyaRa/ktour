import AppContainer from '@/component/common/AppContainer'
import React from 'react'
import HeroIcons from './Icons'

function Hero() {
    return (
        <div
            className="pt-[30px] md:pt-[60px] pb-10 md:pb-[120px] text-center md:text-right overflow-hidden relative justify-center items-center flex flex-col"
            style={{
                backgroundImage: "url(https://shahraranews.ir/files/fa/news/1405/4/30/3586522_975.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,transparent_0%,transparent_20%,#F5E6D3_60%,#F5E6D3_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,transparent_0%,#FFF_70%)] md:hidden" />

            <AppContainer>
                <div className="relative w-full md:w-[40%] flex flex-col gap-2 md:gap-6">
                    <div className="flex flex-col gap-1">
                        <strong className='text-4xl md:text-5xl'>ثبت‌نام</strong>
                        <strong className='text-[var(--color-primary-hover)] text-3xl md:text-5xl'>پویش پیاده روی</strong>
                    </div>
                    <p className='text-md md:text-lg px-8 md:px-0 font-medium md:font-light'>
                        <strong className='font-bold'>مجمع عالی جوادالائمه</strong>
                        <br />
                        <span className=''>هم قدم با جوادلائمه به سوی رضای خدا</span>
                    </p>
                    <HeroIcons />
                </div>
            </AppContainer>

            <svg className='absolute bottom-0 left-0 right-0 translate-y-1' viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path fill="#fff"
                    d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,120L0,120Z">
                </path>
            </svg>
        </div>
    )
}

export default Hero