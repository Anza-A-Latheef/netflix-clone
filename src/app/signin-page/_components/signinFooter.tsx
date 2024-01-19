import React from 'react'

export default function SigninFooter() {
  return (
    <div>
       <div className='block'>
        <div className='block wrapper h-[397px] py-12 bg-black bg-opacity-5'>
            <p className='text-gray-300 font-light text-base'>Questions? Call <u>000-800-919-1694</u></p>
            <div className='flex py-5 gap-28'>
                <ul className='block'>
                    <li className='flex flex-col'>
                        <a href="#" className='text-gray-300 text-sm leading-10 text-nowrap hover:underline'>FAQ</a>
                        <a href="#" className='text-gray-300 text-sm leading-10 text-nowrap hover:underline'>Cookie Preferences</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-gray-300 text-sm leading-10 text-nowrap hover:underline'>Help Centre</a>
                        <a href="#" className='text-gray-300 text-sm leading-10 text-nowrap hover:underline'>Corporate Information</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-gray-300 text-sm leading-10 text-nowrap hover:underline'>Terms of Use</a>
                    </li>
                </ul>
                <ul className='block'>
                   <li className='flex flex-col'>
                        <a href="#" className='text-gray-300 text-sm leading-10 text-nowrap hover:underline'>Privacy</a>
                    </li>
                </ul>
            </div>
            <div className="flex px-[0.75rem] py-1 mb-2 border border-color w-fit bg-gray-500 bg-opacity-20 rounded border-1 items-center gap-x-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white" data-name="Languages" aria-hidden="true"><path d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                <select className='focus:outline-none bg-transparent text-white' name="language" id="language">
                    <option className='text-black' value="English">English</option>
                    <option className='text-black' value="हिंदी">हिंदी</option>
                </select>
            </div>
        </div>
    </div>
    </div>
  )
}
