import React from 'react'
import { MdLanguage } from "react-icons/md";

export default function SignupFooter() {
  return (
    <div className='mt-12 '>
       <div className='block mt-12 '>
        <div className='block h-[260px] py-10 px-11 bg-[#f3f3f3]'>
            <p className='text-[#737373] font-medium text-base'>Questions? Call <u>000-800-919-1694</u></p>
            <div className='flex py-5 gap-28'>
                <ul className='block'>
                    <li className='flex flex-col'>
                        <a href="#" className='text-[#737373] text-xs font-medium leading-10 text-nowrap hover:underline'>FAQ</a>
                        <a href="#" className='text-[#737373] text-xs font-medium leading-10 text-nowrap hover:underline'>Cookie Preferences</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-[#737373] text-xs font-medium leading-10 text-nowrap hover:underline'>Help Centre</a>
                        <a href="#" className='text-[#737373] text-xs font-medium leading-10 text-nowrap hover:underline'>Corporate Information</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-[#737373] text-xs font-medium leading-10 text-nowrap hover:underline'>Netflix Shop</a>
                        <a href="#" className='text-[#737373] text-xs font-medium leading-10 text-nowrap hover:underline'>Corporate Information</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-[#737373] text-xs font-medium leading-10 text-nowrap hover:underline'>Terms of Use</a>
                    </li>
                </ul>
            </div>
            <div className="flex px-[0.75rem] py-3 mb-2 border border-color w-fit bg-white rounded border-1 items-center gap-x-2">
                <MdLanguage className='text-[#737373]' />
                <select className='focus:outline-none bg-transparent text-[#737373]' name="language" id="language">
                    <option className='text-black' value="English">English</option>
                    <option className='text-black' value="हिंदी">हिंदी</option>
                </select>
            </div>
        </div>
    </div>
    </div>
  )
}
