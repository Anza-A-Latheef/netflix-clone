    "use client"
    import React,{useEffect,useState} from 'react'
    import MoviesHead from '../_components/movieshead'
    import Button from '../../general/button'
    import SigninFooter from '../../signin-page/_components/signinFooter'
    import Image from 'next/image'
    import Trailer from './trailer'
    import More from './more'
    import Upcoming from './upcoming'


    interface Detail {
        adult: boolean;
        genres: { name: string }[];
        release_date?: string;
        original_title: string;
        id: number;
        backdrop_path: string;
        overview: string;
        runtime: number;
        spoken_languages: { english_name: string }[];
    }
    
    interface LogoDetail {
        logos: { file_path: string }[];
    }
    
    interface Starring {
        cast: { original_name: string }[];
    }

    function toHoursAndMinutes(totalMinutes:number) {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
    
        return `${hours}h ${minutes}min `;
    }
    
    export default function MovieTrailer({ params }: { params: { moviespage: string } }) {
        const [detail, setDetail] = useState<Detail | null>(null);
        const [logoImage, setLogoImage] = useState<LogoDetail | null>(null);
        const [starList, setStarList] = useState<Starring | null>(null);

        const details = async () => {
        try {
            const response = await 
            fetch(`https://api.themoviedb.org/3/movie/${params.moviespage}?api_key=cebda4e0a93282ebe44fc651ad0006c9`);
            const json = await response.json();
    
            if (json) {
            setDetail(json);
            console.log(json);
            }
        } catch (error) {
            console.error(error);
        }
        };

        const logodetails = async () => {
        try {
            const response = await 
            fetch(`
            https://api.themoviedb.org/3/movie/${params.moviespage}/images?api_key=cebda4e0a93282ebe44fc651ad0006c9`);
            const json = await response.json();
    
            if (json &&json.logos) {
                const enOnly = json.logos.filter(({ iso_639_1 }: { iso_639_1: string }) => iso_639_1 === 'en');
                setLogoImage({ logos: enOnly });
                console.log(enOnly[0].file_path);
            }
            
        } catch (error) {
            console.error(error);
        }
        };

        const starring = async () => {
            try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.moviespage}/credits?api_key=cebda4e0a93282ebe44fc651ad0006c9`);
            const json = await response.json();
        
            if (json) {
                setStarList(json);
                console.log(starList?.cast[0].original_name);
            }
            } catch (error) {
            console.error(error);
            }
        };
    
        useEffect(() => {
            details();
            logodetails();
            starring();
        }, []);
        
    
        if (!detail) {
        return <p>Loading...</p>;
        }


        const DetailsSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
            <li className='headli flex flex-col text-left mt-3'>
              <h6 className='smallhead text-base text-[#a1a1a1]'>{title}</h6>
              <p className='smallp text-base text-white'>{items.join(', ')}</p>
            </li>
          );
    
    return (
        <div className='bg-[#181818] flex flex-col'>
            <div className='block'>
                <div className='flex flex-col'>
                    <div className="head">
                        <MoviesHead/>
                    </div> 
                    <div style={{background: `linear-gradient( 90deg, #181818 10%, hsla(0, 0%, 9%, .68) 20%, hsla(0, 0%, 9%, .67) 25%, hsla(0, 0%, 9%, .65) 35%, hsla(0, 0%, 9%, .64) 40%, hsla(0, 0%, 9%, .62) 45%, hsla(0, 0%, 9%, .6) 50%, hsla(0, 0%, 9%, .5) 55%, hsla(0, 0%, 9%, 0) 60%, hsla(0, 0%, 9%, 0) 65%, hsla(0, 0%, 9%, 0) 70%, hsla(0, 0%, 9%, 0) 75%, hsla(0, 0%, 9%, 0) 80%, hsla(0, 0%, 9%, 0) 85%, hsla(0, 0%, 9%, 0) 90%, hsla(0, 0%, 9%, 0) 95%, hsla(0, 0%, 9%, 0) ),url(https://image.tmdb.org/t/p/original/${detail. backdrop_path})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover",
                                backgroundPosition:"center" }} 
                        className='relative wrapper-genre bg-movieposter flex flex-col justify-center w-screen h-[100vh]'>
                        <div className="serieslogo w-fit h-[52px] flex items-end ">
                            {logoImage && logoImage.logos && logoImage.logos[0] && (
                                <Image
                                src={`https://image.tmdb.org/t/p/w500${logoImage.logos[0].file_path}`}
                                alt="Production Company Logo"
                                width={140}
                                height={140}
                                />
                            )}
                        </div>
                        <div className='w-[50%] py-6'>
                            <h4 className='mt-[10px] text-white text-[24px] font-medium leading-[30px]'>{detail.original_title}</h4>
                            <div className="flex flex-col">
                                <p className='text-[#a3a3a3] text-[14px] font-medium leading-[18px] my-4'>{detail?.release_date?.substring(0, 4) ?? 'N/A'} | <span className='px-[5px] border border-1 border-[#a1a1a1]'>{detail.adult ? 'A' : 'U/A +7'}</span> | {toHoursAndMinutes(detail.runtime)} | {detail.genres[0].name}</p>
                                <p className='text-white text-[16px] leading-[22px] w-max-full pt-[9px] font-normal'>{detail.overview}</p>
                                <h6 className='pt-[16px] text-[16px] text-white'><span className='text-[#a3a3a3] '>Starring:</span>{' '}{starList?.cast && starList.cast.length > 0? starList.cast.slice(0,5).map((actor) => actor.original_name).join(', '): 'N/A'}</h6>
                            </div>
                        </div>
                        <div className='absolute flex items-center justify-between p-3 bottom-[-2%] gradient-trailer-box w-[85vw] wrapper-genre '>
                            <div className="flex items-center">
                                <svg className="value-prop-logo w-[21px] h-[38px]" focusable="false" viewBox="225 0 552 1000" aria-hidden="true" data-uia="n-logo"><defs><radialGradient id="eaf463bf-bf7d-46c8-a1d5-4e510cb692a6-a" r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)"><stop offset="60%" stop-opacity=".3"></stop><stop offset="90%" stop-opacity=".05"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient></defs><path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path><path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path><path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#eaf463bf-bf7d-46c8-a1d5-4e510cb692a6-a)"></path><path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path></svg>
                                <h5 className='text-[16px] text-white font-medium mx-2 '>Watch all you want</h5>
                            </div>
                            <Button label="JOIN NOW" className="text-xs py-3 px-8" />
                        </div>
                    </div>
                    <div className="border-gradient-gray only-vertical border-gradient mx-[70px] mt-20 flex flex-col items-center justify-center">
                        <p className=' text-[#a3a3a3] my-[20px] w-[60%]  text-center text-base font-normal leading-5 mx-[20px]'>{detail.overview.split('. ')[0] + '.'}</p>
                    </div>
                    <Trailer movieid={params.moviespage} title={detail.original_title}/>
                    <div className='wrapper-genre mt-16'>
                        <h4 className='text-white text-[27px] font-normal leading-8'>More Details</h4>
                        <div className='mt-3'>
                            <ul className='grid grid-cols-3 grid-rows-2 w-full'>
                                <DetailsSection title='Watch offline' items={['Download and watch everywhere you go']} />
                                <DetailsSection title='Genres' items={detail.genres.slice(0, 7).map((item) => item.name)} />
                                <DetailsSection title='This movie is...' items={[detail.genres[0].name]} />
                                <DetailsSection title='Audio' items={detail.spoken_languages.slice(0, 7).map((item) => item.english_name)} />
                                <DetailsSection title='Subtitles' items={detail.spoken_languages.slice(0, 12).map((item) => item.english_name)} />
                                <DetailsSection title={`About ${detail.original_title}`} items={['Go behind the scenes and learn more on Tudum.com']} />
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <ul className='flex items-center justify-between'>
                              <li className='headli w-[100%] grid grid-cols-3 text-left'>
                                <h6 className='smallhead text-sm text-[#a1a1a1]'>Cast</h6>
                                {starList?.cast && starList.cast.length > 0 ? (
                                  starList.cast.map((actor, index) => (
                                    <p key={index} className='smallp text-base text-white'>
                                      {actor.original_name}
                                    </p>
                                  ))
                                ) : (
                                  <p className='smallp text-base text-white'>N/A</p>
                                )}
                              </li>
                            </ul>
                        </div>
                      </div>
                    <More movieid={params.moviespage}/>
                    <Upcoming/>
                </div>
            </div>
            <SigninFooter/>
        </div>
    );
    }