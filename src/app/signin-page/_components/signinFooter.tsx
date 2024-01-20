import React from 'react'
import { MdLanguage } from "react-icons/md";

export default function SigninFooter() {
  return (
    <div className='mt-12'>
       <div className='block mt-12'>
        <div className='block wrapper h-[260px] py-10 bg-black bg-opacity-60 '>
            <p className='text-[#737373] font-light text-base'>Questions? Call <u>000-800-919-1694</u></p>
            <div className='flex py-5 gap-28'>
                <ul className='block'>
                    <li className='flex flex-col'>
                        <a href="#" className='text-[#737373] text-sm leading-10 text-nowrap hover:underline'>FAQ</a>
                        <a href="#" className='text-[#737373] text-sm leading-10 text-nowrap hover:underline'>Cookie Preferences</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-[#737373] text-sm leading-10 text-nowrap hover:underline'>Help Centre</a>
                        <a href="#" className='text-[#737373] text-sm leading-10 text-nowrap hover:underline'>Corporate Information</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-[#737373] text-sm leading-10 text-nowrap hover:underline'>Terms of Use</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-[#737373] text-sm leading-10 text-nowrap hover:underline'>Privacy</a>
                    </li>
                </ul>
            </div>
            <div className="flex px-[0.75rem] py-1 mb-2 border border-color w-fit bg-gray-500 bg-opacity-20 rounded border-1 items-center gap-x-2">
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
