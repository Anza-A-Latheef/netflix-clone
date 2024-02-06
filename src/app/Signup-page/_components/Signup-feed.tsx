    // import React, { useState, ChangeEvent, useRef } from 'react';
    // import Button from '@/app/general/button';
    // import Link from 'next/link';
    // import { auth } from '@/app/firebase';
    // import { useRouter } from 'next/navigation';
    // import  {createUserWithEmailAndPassword} from 'firebase/auth';

    // interface SignupFeedProps {}

    // const SignupFeed: React.FC<SignupFeedProps> = () => {
    //   const router=useRouter();
    //   const [inputEmailValue, setInputEmailValue] = useState('');
    //   const [inputPasswordValue, setInputPasswordValue] = useState('');
    //   const [isEmailFocused, setIsEmailFocused] = useState(false);
    //   const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    
    //   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setInputEmailValue(e.target.value);
    //   };
    
    //   const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setInputPasswordValue(e.target.value);
    //   };
    
    //   const emailRef = useRef<HTMLInputElement>(null);
    //   const passwordRef = useRef<HTMLInputElement>(null);
    
    //   const signup = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     const email = emailRef.current?.value ?? '';
    //     const password = passwordRef.current?.value ?? '';

    //     createUserWithEmailAndPassword(auth,email ,password)
    //       .then((userCredential) => {
    //         const user = userCredential.user;
    //         router.push('/moviespage')
    //       })
    //       .catch((error) => {
    //         const errorMessage = error.message;
    //         alert(errorMessage);
    //       });
    //   };

    //     return (
    //         <div className='flex flex-col py-[14px] items-center'>
    //             <div className='bg-white flex items-center justify-center p-[62px] w-[35%] rounded-[5px]  flex-col'>
    //                 <div className='flex flex-col w-full py-[5px] text-left'>
    //                     <h2 className='text-black text-4xl font-bold leading-relaxed'>Welcome!!</h2>
    //                     <h3 className='text-black text-4xl text-nowrap font-bold'>Joining Netflix is easy.</h3>
    //                 </div>
    //                 <form onSubmit={signup} className='flex flex-col w-full h-fit'>
    //                     <div className='relative mt-[20px]'>
    //                         <input type='email' name='email' className='border border-[#cccccc] rounded-md text-black px-5 py-[14px] w-full' onFocus={() => setIsEmailFocused(true)} onBlur={() => setIsEmailFocused(false)} onChange={handleEmailChange} ref={emailRef}/>
    //                         <label htmlFor='email' className={`text-black absolute duration-[0.5s] ${ isEmailFocused || inputEmailValue ? 'top-[3px] left-[16px] text-[11px]' : 'top-[14px] left-[16px] text-[15px]'}`}>Email or phone number</label>
    //                     </div>
    //                     <div className='relative mt-[10px]'>
    //                         <input type='password' name='password' className='border border-[#cccccc] rounded-md text-black px-5 py-[14px] w-full' onFocus={() => setIsPasswordFocused(true)} onBlur={() => setIsPasswordFocused(false)} onChange={handlePasswordChange} ref={passwordRef} />
    //                         <label htmlFor='password' className={`text-black absolute duration-[0.5s] ${isPasswordFocused || inputPasswordValue ? 'top-[3x] left-[16px] text-[11px]' : 'top-[14px] left-[16px] text-[15px]' }`} >Password </label>
    //                     </div>
    //                         <Button label='Get Started' className='text-md w-full font-semibold leading-6 py-3 px-3 mt-[45px] text-black' type='submit' />
    //                 </form>
    //                 <div className='py-8 flex flex-col'>
    //                     <p className='text-[#737373] text-[16px]'> Already have an account? {' '} <Link href="/signin-page" ><span className='text-[#737373] hover:underline  hover:text-black text-[16px] cursor-pointer'>Sign in.</span></Link></p>
    //                     <small className='mt-[10px] text-[#8c8c8c]'>
    //                         This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-500 hover:underline'>Learn more</span>
    //                     </small>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    //     };

    // export default SignupFeed;


    import React, { useState, ChangeEvent, useRef } from 'react';
import Button from '@/app/general/button';
import Link from 'next/link';
import { auth } from '@/app/firebase';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface SignupFeedProps {}

const SignupFeed: React.FC<SignupFeedProps> = function SignupFeed() {
  const router = useRouter();
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

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signup = (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push('/moviespage');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className='flex flex-col py-[14px] items-center'>
      <div className='bg-white flex items-center justify-center p-[62px] w-[35%] rounded-[5px]  flex-col'>
        <div className='flex flex-col w-full py-[5px] text-left'>
          <h2 className='text-black text-4xl font-bold leading-relaxed'>Welcome!!</h2>
          <h3 className='text-black text-4xl text-nowrap font-bold'>Joining Netflix is easy.</h3>
        </div>
        <form onSubmit={signup} className='flex flex-col w-full h-fit'>
          <div className='relative mt-[20px]'>
            <input type='email' name='email' className='border border-[#cccccc] rounded-md text-black px-5 py-[14px] w-full' onFocus={() => setIsEmailFocused(true)} onBlur={() => setIsEmailFocused(false)} onChange={handleEmailChange} ref={emailRef} />
            <label htmlFor='email' className={`text-black absolute duration-[0.5s] ${isEmailFocused || inputEmailValue ? 'top-[3px] left-[16px] text-[11px]' : 'top-[14px] left-[16px] text-[15px]'}`}>Email or phone number</label>
          </div>
          <div className='relative mt-[10px]'>
            <input type='password' name='password' className='border border-[#cccccc] rounded-md text-black px-5 py-[14px] w-full' onFocus={() => setIsPasswordFocused(true)} onBlur={() => setIsPasswordFocused(false)} onChange={handlePasswordChange} ref={passwordRef} />
            <label htmlFor='password' className={`text-black absolute duration-[0.5s] ${isPasswordFocused || inputPasswordValue ? 'top-[3x] left-[16px] text-[11px]' : 'top-[14px] left-[16px] text-[15px]'}`} >Password </label>
          </div>
          <Button label='Get Started' className='text-md w-full font-semibold leading-6 py-3 px-3 mt-[45px] text-black' type='submit' />
        </form>
        <div className='py-8 flex flex-col'>
          <p className='text-[#737373] text-[16px]'> Already have an account? {' '} <Link href="/signin-page" ><span className='text-[#737373] hover:underline  hover:text-black text-[16px] cursor-pointer'>Sign in.</span></Link></p>
          <small className='mt-[10px] text-[#8c8c8c]'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-500 hover:underline'>Learn more</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignupFeed;
