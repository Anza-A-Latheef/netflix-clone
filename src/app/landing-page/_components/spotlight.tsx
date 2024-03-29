import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import Navhead from './Navhead';
import { useState, ChangeEvent } from 'react';
import Button from '@/app/general/button';

export default function Spotlight() {
	const [inputValue, setInputValue] = useState('');
	const [isInputFocused, setIsInputFocused] = useState(false);
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	  };

  	return (
		<div className="bg-poster bg-cover bg-center">
			<div className='bg-poster-gradient pb-44'>
				<Navhead />
				<div className='mt-[80px]  lg:mt-[80px] lg:pt-[100px] leading-loose text-center'>
					<h2 className='font-bold text-3xl text-white font-sans lg:text-5xl lg:font-extrabold lg:leading-loose'>Unlimited movies, TV shows and more</h2>
					<p className='leading-loose text-white font-sans text-xl lg:text-2xl lg:leading-relaxed  lg:font-medium '>Watch anywhere. Cancel anytime.</p>
					<p className='leading-loose text-white font-sans text-sm lg:text-xl lg:leading-relaxed  lg:mt-2'>Ready to watch? Enter your email to create or restart your membership.</p>
				</div>
				<div className='mt-2 text-center flex justify-center'>
      				<form className='relative flex flex-col lg:flex lg:flex-row items-center gap-2 w-fit' onSubmit={(e) => e.preventDefault()}>
						<input type="email" name='email' className='border border-color rounded text-gray-300 bg-black bg-opacity-[0.7] px-5 py-4 w-[370px]' onFocus={() => setIsInputFocused(true)} onBlur={() => setIsInputFocused(false)} onChange={handleInputChange} /> 
						<label htmlFor="email" className={`text-gray-300 absolute transition-all duration-700 ${isInputFocused || inputValue ? 'top-[2px] left-[15px] text-[11px]' : 'top-[15px] left-[15px]'}`} > Email address </label> 
						<Button label="Get Started" icon={<FaAngleRight />} className='flex items-center justify-center w-full py-3 text-center text-xl lg:py-3 lg:px-5 lg:w-fit lg:text-2xl font-medium'/>
					</form>
    			</div>
			</div>
		</div>
	);
}
