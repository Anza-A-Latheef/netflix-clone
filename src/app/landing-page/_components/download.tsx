import React from 'react'
import Divider from '@/app/general/divider'
import Image from 'next/image'
import mobileImg from '../../../../public/images/mobile.jpg'
import StrangerThings from '../../../../public/images/StrangerThings.png'

export default function Download() {
  return (
    <div className='block '>
        <Divider/>
        <div className='flex flex-col sm:max-lg:items-center px-[50px] h-[522px] lg:flex lg:flex-row bg-black xl:px-[160px]'>
            <div className="flex flex-col lg:hidden">
                <h2 className='text-white font-extrabold text-[30px] md:text-[35px] text-center text-nowrap leading-normal'>Download your shows to watch offline</h2>
                <p className='text-white text-[21px] font-normal text-center'>Save your favourites easily and always have something to watch.</p>
            </div>
            <div className="lg:h-full">
                <div className='relative w-[408px] h-[281px] lg:w-[508px] lg:h-[381px] lg:pt-[60px]'>
                    <Image src={mobileImg} className='relative 'alt="Mobile Image" />
                    <div className='absolute gap-1 bg-black items-center w-[13rem] top-[75%] lg:w-[16rem] border-2 rounded-lg border-solid  p-[6px] border-color lg:gap-3 flex z-1 lg:top-[85%] left-[25%] h-fit'>
                        <div className='w-[47px] h-[60px] lg:w-[57px] lg:h-[80px]'>
                            <Image src={StrangerThings} alt="Stranger-things poster"/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white text-nowrap text-sm lg:text-base'>Stranger Things</span>
                            <span className="text-blue-700 text-sm lg:text-base">Downloading...</span>
                        </div>
                        <div className='w-[3.5rem] h-[3.5rem] shadow-custom bg-contain bg-no-repeat content-none bg-gif'>
                   
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex flex-col h-full justify-center">
                <h2 className='text-white font-extrabold text-[50px] text-left leading-normal'>Download your shows to watch offline</h2>
                <p className='text-white text-[23px] font-normal'>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>
    </div>
  )
}
