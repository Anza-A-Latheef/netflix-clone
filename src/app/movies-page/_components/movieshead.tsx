// import React from 'react'
// import Image from 'next/image'
// import Button from '@/app/general/button'
// // import auth from './../../firebase'
// // import { signOut } from 'firebase/auth'
// import netflixLogo from '../../../../public/images/NetflixLogo.png'


// export default function MoviesHead() {
//   // const logout=()=>{
//   //   auth.signOut();
//   // }
//   return (
//     <div>
//         <div className='bg-black flex justify-between items-center py-1 px-7'>
//             <div className='w-[150px] h-[50px] flex items-center justify-center'>
//                 <Image src={netflixLogo} alt="Netflix Logo" />
//             </div>
//             <div className='bg-black flex items-center gap-2 px-7'>
//                 <div className='text-white text-xs'>UNLIMITED TV SHOWS & MOVIES</div>
//                 <Button label="JOIN NOW" className=" text-xs py-3 px-8 " />
//                 <button className='text-white bg-transparent hover:bg-[#9696964d] text-xs border-[1px] uppercase border-[#888] py-2 px-3 rounded-sm'  onClick={()=>{{handleLogout}}}>Sign out</button>
//             </div>
//         </div>
//     </div>
//   )
// }
import React from 'react';
import Image from 'next/image';
import Button from '@/app/general/button';
import netflixLogo from '../../../../public/images/NetflixLogo.png';

interface HomeProps {
  handleLogout: () => void;
}

const MoviesHead: React.FC<HomeProps> = ({ handleLogout }) => {
  return (
    <div>
      <div className='bg-black flex justify-between items-center py-1 px-7'>
        <div className='w-[150px] h-[50px] flex items-center justify-center'>
          <Image src={netflixLogo} alt="Netflix Logo" width={150} height={50} />
        </div>
        <div className='bg-black flex items-center gap-2 px-7'>
          <div className='text-white text-xs'>UNLIMITED TV SHOWS & MOVIES</div>
          <Button label="JOIN NOW" className="text-xs py-3 px-8" />
          <button
            className='text-white bg-transparent hover:bg-[#9696964d] text-xs border-[1px] uppercase border-[#888] py-2 px-3 rounded-sm'
            onClick={handleLogout} // Removed extra curly braces
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesHead;

