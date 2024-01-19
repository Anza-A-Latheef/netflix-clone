import React from 'react'
import Divider from '@/app/general/divider'
import Image from 'next/image'
import mobileImg from '../../../../public/images/mobile.jpg'
import StrangerThings from '../../../../public/images/StrangerThings.png'

export default function Download() {
  return (
    <div className='block '>
        <Divider/>
        <div className='flex wrapper h-[522px] bg-black'>
            <div className="h-full">
                <div className='relative w-[508px] h-[381px] pt-[60px]'>
                    <Image src={mobileImg} className='relative 'alt="Mobile Image" />
                    <div className='absolute  bg-black items-center w-[16rem] border-2 rounded-lg border-solid  p-[6px] border-color gap-3 flex z-1 top-[85%] left-[25%] h-fit'>
                        <div className='w-[57px] h-[80px]'>
                            <Image src={StrangerThings} alt="Stranger-things poster"/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white text-nowrap'>Stranger Things</span>
                            <span className="text-blue-700">Downloading...</span>
                        </div>
                        <div className='w-[3.5rem] h-[3.5rem] shadow-custom bg-contain bg-no-repeat content-none bg-gif'>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full justify-center">
                <h2 className='text-white font-extrabold text-[50px] text-left leading-normal'>Download your shows to watch offline</h2>
                <p className='text-white text-[23px] font-normal'>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>
    </div>
  )
}
