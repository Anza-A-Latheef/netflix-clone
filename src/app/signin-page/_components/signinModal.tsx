import React,{useState ,ChangeEvent ,useRef} from 'react'
import Button from '@/app/general/button'
import Link from 'next/link';
import {auth} from '../../firebase';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from "firebase/auth";

interface SigninModalProps {}

const SigninModal: React.FC<SigninModalProps> = () => {
	const router=useRouter();
	const [inputEmailValue, setInputEmailValue] = useState('');
	const [inputPasswordValue, setInputPasswordValue] = useState('');
	const [isEmailFocused, setIsEmailFocused] = useState(false);
	const [isPasswordFocused, setIsPasswordFocused] = useState(false);

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputEmailValue(e.target.value);
	  };

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputPasswordValue(e.target.value);
	  };
	  const lemailRef = useRef<HTMLInputElement>(null);
      const lpasswordRef = useRef<HTMLInputElement>(null);



	  const signin = (event: React.FormEvent)=>{
		event.preventDefault();
		const email = lemailRef.current?.value ?? '';
        const password = lpasswordRef.current?.value ?? '';

		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			router.push('/movies-page')
		})
		.catch((error) => {
			const errorMessage = error.message;
			alert(errorMessage)
		});
	  };

	return (
		<div className='flex flex-col py-[14px] items-center'>
			<div className='bg-signin flex items-center justify-center p-[62px] w-[33.5%] rounded-[5px]  flex-col'>
				<div className='flex w-full py-[5px] text-left'>
					<h2 className='text-white text-3xl font-semibold'>Sign In</h2>
				</div>
				<form onSubmit={signin} className='flex flex-col w-full h-fit'>
					<div className='relative mt-[20px]'>
						<input type="email" name='email' className='border-none rounded-md text-gray-400 bg-51-51-51 px-5 py-[13px] w-full' onFocus={() => setIsEmailFocused(true)} onBlur={() => setIsEmailFocused(false)} onChange={handleEmailChange } ref={lemailRef}/> 
						<label htmlFor="email" className={`text-gray-400 absolute duration-[0.5s] ${isEmailFocused || inputEmailValue ? 'top-[3px] left-[16px] text-[11px]' : 'top-[14px] left-[16px] text-[15px]'}`} > Email or phone number</label> 
					</div>
					<div className='relative mt-[10px]'>
						<input type="password" name='password' className='border-none  rounded-md text-gray-400 bg-51-51-51 px-5 py-[13px] w-full' onFocus={() => setIsPasswordFocused(true)} onBlur={() => setIsPasswordFocused(false)} onChange={ handlePasswordChange} ref={lpasswordRef} /> 
						<label htmlFor="password" className={`text-gray-400 absolute duration-[0.5s] ${isPasswordFocused || inputPasswordValue ? 'top-[3x] left-[16px] text-[11px]' : 'top-[14px] left-[16px] text-[15px]'}`} > Password</label> 
					</div>
						<Button label="Sign In" className='text-md w-full font-semibold leading-6 py-3 px-3 mt-[47px] text-white' type="submit"/>
				</form>
				<div className='flex w-full justify-between m-[15px]'>
					<div className='flex items-center gap-1'>
						<input type="checkbox" checked id="remember" name="remember" className='hidden'/>
						<div className='relative w-[15px] h-[15px] bg-[#737373] rounded-xs flex items-center justify-center'>
							<svg className='w-7 h-7 text-black' viewBox='0 0 24 24' role='img' aria-label='checkmark'>
							<path d='M20 6L9 17l-5-5' fill='none' stroke='currentColor' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round'/></svg>
    					</div>
						<label className='text-gray-400 text-xs' htmlFor="remember">Remember me</label>
					</div>
					<span className='text-gray-400 text-xs hover:underline'>Need help?</span>
				</div>
				<div className='py-12 flex flex-col'>
					<p className='text-[#737373] text-[16px]'>New to Netflix?<Link href="/Signup-page"> <span className='text-white hover:underline text-[16px] cursor-pointer'>Sign up now.</span></Link></p>
					<small className='mt-[10px] text-[#8c8c8c]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-500 hover:underline'>Learn more</span></small>
				</div>
			</div>
		</div>
	)
	}
	export default SigninModal;