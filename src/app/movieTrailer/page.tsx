import React from 'react'
import MoviesHead from '../movies-page/_components/movieshead'
import Button from '../general/button'
import SigninFooter from '../signin-page/_components/signinFooter'
import movietitle from '../../../public/images/unicorntitle.png'
import Image from 'next/image'
import Link from 'next/link'
import img from '../../../public/images/Poster.jpg'

export default function MovieTrailer() {
      
return (
    <div className='bg-[#181818] flex flex-col'>
        <div className='block'>
            <div className='flex flex-col '>
                <div className="head">
                    <MoviesHead/>
                </div> 
                <div className='relative wrapper-genre bg-movieposter flex flex-col h-fit'>
                    <div className="serieslogo w-[450px] h-[102px] mb-40px py-28" >
                        <Image src={movietitle} alt="Movie poster" />
                    </div>
                    <div className='w-[45%] py-12'>
                        <h4 className='mt-[10px] text-white text-[24px] font-medium leading-[30px]'>Unicorn Academy</h4>
                        <div className="flex flex-col">
                            <p className='text-[#a3a3a3] text-[14px] font-medium leading-[18px] my-4'>2023| <span className='px-[5px] border border-1 border-[#a1a1a1]'>U/A 7+</span> | 1 Season | Kids</p>
                            <p className='text-white text-[16px] leading-[22px] w-max-full pt-[9px] font-normal'>When a dark force threatens to destroy Unicorn Island, a brave teen and her five schoolmates must rise up to protect their beloved magical academy.</p>
                            <h6 className='pt-[16px] text-[16px] text-white'><span className='text-[#a3a3a3] '>Starring:</span> Sara Garcia,Sadie Laflamme-Snow,Kamaia Fairburn</h6>
                        </div>
                    </div>
                </div>
                <div className='relative flex items-center justify-between p-3 bottom-12 gradient-trailer-box mx-[70px] mb-9'>
                    <div className="flex items-center">
                        <svg className="value-prop-logo w-[21px] h-[38px]" focusable="false" viewBox="225 0 552 1000" aria-hidden="true" data-uia="n-logo"><defs><radialGradient id="eaf463bf-bf7d-46c8-a1d5-4e510cb692a6-a" r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)"><stop offset="60%" stop-opacity=".3"></stop><stop offset="90%" stop-opacity=".05"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient></defs><path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path><path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path><path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#eaf463bf-bf7d-46c8-a1d5-4e510cb692a6-a)"></path><path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path></svg>
                        <h5 className='text-[16px] text-white font-medium mx-2 '>Watch all you want</h5>
                    </div>
                    <Button label="JOIN NOW" className="text-xs py-3 px-8" />
                </div>
                <div className="border-gradient-gray only-vertical border-gradient mx-[70px] flex flex-col items-center justify-center">
                    <p className=' text-[#a3a3a3] my-[20px] text-center text-base font-normal leading-5 max-w-[500px]'>This fantastical animated adventure series is based on the books by Julie Sykes.</p>
                </div>
                <div className="wrapper-genre flex flex-col mt-16">
                    <h3 className='text-white text-[27px] font-normal leading-8'>Videos <span className='text-[20px] text-[#a3a3a3] ml-1'>| Unicorn Academy</span></h3>
                    <div className="block my-4">
                        <ul className='flex items-center'>
                            <li className='flex flex-col'>
                                <button className="bg-none border-0 m-[5px] w-fit p-0 text-left outline-none">
                                    <div className="relative mb-3">
                                        <Image
                                            src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRjwJKeFf07g3X4TmzGOaEk5zGpWkyMZP1kEAzY8QpycE7wzme_pnjkadg-MGhqH4XnkFe6wcTIZ-Sjg2g1aFOGoULCDgWWoppZZPvgM-j6hmYwpktfe04Tn.jpg?r=8be"
                                            alt=""
                                            role="presentation"
                                            className=""
                                            loading="lazy"
                                            width={420}
                                            height={240}
                                        />
                                        <svg viewBox="0 0 50 50" className="absolute bottom-[15px] h-12 left-[15px]" data-uia="additional-video-play-icon">
                                            <g fill="none" fillRule="nonzero">
                                                <path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z" className="base"></path>
                                                <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z" className="triangle"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="text-white mt-12" data-uia="additional-video-title">Chapter 1 Trailer: Unicorn Academy</span>
                                </button>
                            </li>
                            <li className='flex flex-col'>
                                <button className="bg-none border-0 m-[5px] w-fit p-0 text-left outline-none">
                                    <div className="relative mb-3">
                                        <Image
                                            src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRjwJKeFf07g3X4TmzGOaEk5zGpWkyMZP1kEAzY8QpycE7wzme_pnjkadg-MGhqH4XnkFe6wcTIZ-Sjg2g1aFOGoULCDgWWoppZZPvgM-j6hmYwpktfe04Tn.jpg?r=8be"
                                            alt=""
                                            role="presentation"
                                            className=""
                                            loading="lazy"
                                            width={420}
                                            height={240}
                                        />
                                        <svg viewBox="0 0 50 50" className="absolute bottom-[15px] h-12 left-[15px]" data-uia="additional-video-play-icon">
                                            <g fill="none" fillRule="nonzero">
                                                <path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z" className="base"></path>
                                                <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z" className="triangle"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="text-white mt-12" data-uia="additional-video-title">Chapter 1 Trailer: Unicorn Academy</span>
                                </button>
                            </li>
                            <li className='flex flex-col'>
                                <button className="bg-none border-0 m-[5px] w-fit p-0 text-left outline-none">
                                    <div className="relative mb-3">
                                        <Image
                                            src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRjwJKeFf07g3X4TmzGOaEk5zGpWkyMZP1kEAzY8QpycE7wzme_pnjkadg-MGhqH4XnkFe6wcTIZ-Sjg2g1aFOGoULCDgWWoppZZPvgM-j6hmYwpktfe04Tn.jpg?r=8be"
                                            alt=""
                                            role="presentation"
                                            className=""
                                            loading="lazy"
                                            width={420}
                                            height={240}
                                        />
                                        <svg viewBox="0 0 50 50" className="absolute bottom-[15px] h-12 left-[15px]" data-uia="additional-video-play-icon">
                                            <g fill="none" fillRule="nonzero">
                                                <path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z" className="base"></path>
                                                <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z" className="triangle"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="text-white mt-12" data-uia="additional-video-title">Chapter 1 Trailer: Unicorn Academy</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='wrapper-genre mt-16'>
                    <h4 className='text-white text-[27px] font-normal leading-8'>More Details</h4>
                    <div className='mt-3'>
                        <ul className='grid grid-cols-3 grid-rows-2 w-full'>
                            <li className='headli flex flex-col text-left'>
                                <h6 className='smallhead text-base text-[#a1a1a1]'>Watch offline</h6>
                                <p className='smallp text-base text-white'>Download and watch everywhere you go</p>
                            </li>
                            <li className='headli flex flex-col text-left'>
                                <h6 className='smallhead text-base text-[#a1a1a1]'>Genres</h6>
                                <p className='smallp text-base text-white'>Korean,Action & Adventure Movies</p>
                            </li>
                            <li className='headli flex flex-col text-left'>
                                <h6 className='smallhead text-base text-[#a1a1a1]'>This movie is...</h6>
                                <p className='smallp text-base text-white'>Violent</p>
                            </li>
                            <li className='headli flex flex-col text-left'>
                                <h6 className='smallhead text-base text-[#a1a1a1]'>Audio</h6>
                                <p className='smallp text-base text-white'>English,Hindi,Korean - Audio Description,Korean [Original],Tamil,Telugu</p>
                            </li>
                            <li className='headli flex flex-col text-left'>
                                <h6 className='smallhead text-base text-[#a1a1a1]'>Subtitles</h6>
                                <p className='smallp text-base text-white'>English,English,Korean</p>
                            </li>
                            <li className='headli flex flex-col text-left'>
                                <h6 className='smallhead text-base text-[#a1a1a1]'>About Badland Hunters</h6>
                                <p className='smallp text-base text-white'>Go behind the scenes and learn more on Tudum.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-2'>
                        <ul className='flex items-center justify-between'>
                            <li className='headli w-[33%] flex flex-col text-left'>
                                <h6 className='smallhead text-base text-[#a1a1a1]'>Cast</h6>
                                <p className='smallp text-base text-white'>Don Lee</p>
                                <p className='smallp text-base text-white'>Roh Jeong-eui</p>
                                <p className='smallp text-base text-white'>Jang Young-nam</p>
                                <p className='smallp text-base text-white'>Jeong Young-ju</p>
                            </li>
                            <li className='headli w-[33%] flex flex-col text-left'>
                                <p className='smallp text-base text-white'>Lee Hee-jun</p>
                                <p className='smallp text-base text-white'>An Ji-hye</p>
                                <p className='smallp text-base text-white'>Park Hyo-joon</p>
                            </li>
                            <li className='headli w-[33%] flex flex-col text-left'>
                                <p className='smallp text-base text-white'>Lee Jun-young</p>
                                <p className='smallp text-base text-white'>Park Ji-hun</p>
                                <p className='smallp text-base text-white'>Seong Byeong-suk</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='wrapper-genre mt-12'>
                    <h4 className='text-white text-[27px] font-normal leading-8'>More like this</h4>
                    <ul className='grid grid-cols-3 '>
                        <li className='m-[5px]'>
                            <Link href='/movieTrailer'>
                            <Image src={img} alt='' width={396} height={223} />
                            </Link>
                        </li>
                        <li className='m-[5px]'>
                            <Link href='/movieTrailer'>
                            <Image src={img} alt='' width={396} height={223} />
                            </Link>
                        </li>
                        <li className='m-[5px]'>
                            <Link href='/movieTrailer'>
                            <Image src={img} alt='' width={396} height={223} />
                            </Link>
                        </li>
                        <li className='m-[5px]'>
                            <Link href='/movieTrailer'>
                            <Image src={img} alt='' width={396} height={223} />
                            </Link>
                        </li>
                        <li className='m-[5px]'>
                            <Link href='/movieTrailer'>
                            <Image src={img} alt='' width={396} height={223} />
                            </Link>
                        </li>
                        <li className='m-[5px]'>
                            <Link href='/movieTrailer'>
                            <Image src={img} alt='' width={396} height={223} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='wrapper-genre mt-20'>
                    <h4 className='text-white text-[27px] font-normal leading-8'>Coming Soon</h4>
                    <div className='mt-3'>
                        <ul className='grid grid-cols-3 grid-rows-2 w-full'>
                            <li className='headli flex flex-col text-left my-2 mr-2'>
                                <h6 className='smallhead text-base text-white'>Avatar The Last Airbender</h6>
                                <p className='smallp text-[13px] text-[#a1a1a1]'>A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.</p>
                            </li>
                            <li className='headli flex flex-col text-left my-2 mr-2'>
                                <h6 className='smallhead text-base text-white'>Heeramandi</h6>
                                <p className='smallp text-[13px] text-[#a1a1a1]'>Sanjay Leela Bhansali brings his majestic signature flair to stories of love and betrayal in the lives of courtesans in pre-independence India.</p>
                            </li>
                            <li className='headli flex flex-col text-left my-2 mr-2'>
                                <h6 className='smallhead text-base text-white'>The Indrani Mukerjea Story: Buried Truth</h6>
                                <p className='smallp text-[13px] text-[#a1a1a1]'>Featuring new revelations and unprecedented access, this docuseries digs into the disappearance of 25-year-old Sheena Bora and the shocking aftermath.</p>
                            </li>
                            <li className='headli flex flex-col text-left my-2 mr-2'>
                                <h6 className='smallhead text-base text-white'>Through My Window 3: Looking at You</h6>
                                <p className='smallp text-[13px] text-[#a1a1a1]'>Raquel and Ares can't forget each other, even while seeing other people. Can they reunite despite family pressure in the final chapter of the trilogy?</p>
                            </li>
                            <li className='headli flex flex-col text-left my-2 mr-2'>
                                <h6 className='smallhead text-base text-white'>Dune</h6>
                                <p className='smallp text-[13px] text-[#a1a1a1]'>To secure his people's future, a young man travels to a dangerous, resource-rich planet — where malevolent forces push him towards a foreboding destiny.</p>
                            </li>
                            <li className='headli flex flex-col text-left my-2 mr-2'>
                                <h6 className='smallhead text-base text-white'>Alexander: The Making of a God</h6>
                                <p className='smallp text-[13px] text-[#a1a1a1]'>Expert interviews and gripping reenactments combine to reveal the extraordinary life of Alexander the Great and his burning desire to conquer the world.</p>
                            </li>
                            <li className='headli flex flex-col text-left my-2 mr-2'>
                                <h6 className='smallhead text-base text-white'>After Everything</h6>
                                <p className='smallp text-[13px] text-[#a1a1a1]'>Heartbroken and suffering from writer's block, Hardin heads to Lisbon to make amends with his past so he can focus on building a future with Tessa.</p>
                            </li>
                            <li className='headli flex flex-col text-left my-2 mr-2'>
                                <h6 className='smallhead text-base text-white'>NCIS</h6>
                                <p className='smallp text-[13px] text-[#a1a1a1]'>Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service – as they track down terrorists and other high-profile criminals.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <SigninFooter/>
    </div>
)
}