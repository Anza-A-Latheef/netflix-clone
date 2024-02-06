import React from 'react'
import Image from 'next/image'
import tv from '../../../../public/images/tv.png'
import Divider from '@/app/general/divider'

export default function Ontv() {
    return (
        <div className='block '>
            <Divider/>
            <div className='flex flex-col sm:max-lg:py-[20px] sm:max-lg:items-center px-[50px] lg:flex lg:flex-row lg:px-[50px] xl:px-[160px] h-[522px] bg-black'>
                <div className="flex flex-col sm:max-lg:items-center lg:h-full lg:justify-center">
                    <h2 className='text-white font-bold text-[30px] lg:font-extrabold lg:text-[45px] xl:text-[50px] leading-relaxed'>Enjoy on your TV</h2>
                    <p className='sm:max-lg:text-center text:[21px] text-white lg:text-[23px] font-normal'>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
                </div>
                <div className="lg:h-full">
                    <div className='relative w-[425px] h-[176px] lg:w-[508px] lg:h-[381px] lg:pt-[60px]'>
                        <Image src={tv} className='relative z-[1] 'alt="TV" />
                        <div className='absolute z-0 top-[37%] right-0 left-[13%] bottom-0'>
                            <video autoPlay loop muted className="w-[350px] ">
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
