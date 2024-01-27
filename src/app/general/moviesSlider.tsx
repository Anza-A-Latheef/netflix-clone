import React,{useState, useEffect} from 'react'
import Slider from "react-slick";
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Movie {
	backdrop_path: string;
	title: string;
}

interface SliderProps {
   
    genre: string;
    api_link:string;
  }

const MoviesSlider :React.FC<SliderProps>= ({ genre, api_link}) => {
	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState(true);
    const movies = () => {
		fetch("https://api.themoviedb.org/3/discover/movie?api_key=cebda4e0a93282ebe44fc651ad0006c9")
			.then(res => res.json())
			.then(json => { setMovieList(json.results), setIsLoading(false); })
	}

	useEffect(() => {
		movies();
	}, []);
	console.log(movieList);
    const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4.15,
		slidesToScroll: 4
	};

  return (
    <div className='mb-[30px]'>
		<Link href='#'>
			<h4 className='text-white text-xl'>{genre}</h4>
			<div className='flex my-2 '>
				<ul className='flex w-[100%] items-center'>
					{isLoading ? (<p>Loading movies...</p>) :
					(<Slider className='w-[100%] flex items-center' {...settings}>
						{movieList.slice(0, 20).map((item, index) => {
							return (<li key={index} className=' flex items-center cursor-pointer justify-center'>
								<div className='w-[299px] h-[168px]' >
									<img src={api_link+item.backdrop_path} alt={item.title} className='w-full h-full'/>
								</div>
								<h6 className="text-white text-center font-light mt-[10px] ">{item.title}</h6>
							</li>)
							})}
					</Slider>)}
				</ul>
			</div>
		</Link>
	</div>
  );
};

export default MoviesSlider
