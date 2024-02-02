import React,{useState,useEffect} from 'react';

interface Upcoming {
    adult: boolean;
    results: { overview: string; original_title: string }[];
  }

export default function Upcoming() {

    const [comingSoon, setComingSoon] = useState<Upcoming | null>(null);

    const fetchUpcoming = async () => {
      try {
        const response = await 
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=cebda4e0a93282ebe44fc651ad0006c9&page=37`);
        const json = await response.json();
  
        if (json) {
            setComingSoon(json);
            console.log(json);
        }
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        fetchUpcoming();
      }, []);
    
      const truncateOverview = (overview: string, wordLimit: number): string => {
        const words = overview.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        } else {
            return overview;
        }
    };

  return (
    <div className='wrapper-genre mt-20'>
        <h4 className='text-white text-[27px] font-normal leading-8'>Coming Soon</h4>
        <div className='mt-3'>
            <ul className='grid grid-cols-3 '>
            {comingSoon && comingSoon.results.filter((item) => item.overview && item.original_title).slice(0, 8).map((item, index) => (
                <li key={index} className='headli flex flex-col text-left my-2 mr-2'>
                    <h6 className='smallhead text-base text-white'>{item.original_title}</h6>
                    <p className='smallp text-[13px] text-[#a1a1a1]'>{truncateOverview(item.overview, 25)}</p>
                </li>))}
            </ul>
                    </div>
                </div>
  )
}
