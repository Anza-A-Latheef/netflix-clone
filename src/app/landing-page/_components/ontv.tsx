import React from 'react'
import Image from 'next/image'
import tv from '../../../../public/images/tv.png'
import Divider from '@/app/general/divider'

export default function Ontv() {
    return (
        <div className='block '>
            <Divider/>
            <div className='flex wrapper  h-[522px] bg-black'>
                <div className="flex flex-col h-full justify-center">
                    <h2 className='text-white font-extrabold text-[50px] leading-relaxed'>Enjoy on your TV</h2>
                    <p className='text-white text-[23px] font-normal'>Watch on smart TV's, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
                </div>
                <div className="right h-full">
                    <div className='relative w-[508px] h-[381px] pt-[60px]'>
                        <Image src={tv} className='relative z-[1] 'alt="TV" />
                        <div className='absolute z-0 top-[37%] right-0 left-[13%] bottom-0'>
                            <video autoPlay loop muted className="w-[368px] ">
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
