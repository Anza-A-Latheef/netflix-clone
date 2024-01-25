import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MoviesSlider from '@/app/general/moviesSlider';

interface Movie {
	backdrop_path: string;
	title: string;
}

export default function MoviesContent() {
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
		<div>
			<div className='bg-[#181818] px-10'>
				<div className="bg-[#181818] pt-12 pb-10 max-w-[600px]">
					<h1 className='text-white text-[44px] font-extrabold leading-relaxed'>Movies</h1>
					<p className='text-white text-lg text-left font-light'>Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
				</div>

				<MoviesSlider genre="Popular on Netflix" api_link="https://image.tmdb.org/t/p/w500/"/>

				{/* <div>
					<h4 className='text-white text-xl'>Popular on Netflix</h4>
					<div className='flex my-2'>
						<ul className='flex w-[100%] items-center'>
							{isLoading ? (<p>Loading movies...</p>) :
							(<Slider className='w-[100%] flex items-center' {...settings}>
								{movieList.slice(0, 20).map((item, index) => {
									return (<li key={index} className=' flex items-center cursor-pointer justify-center'>
										<div className='w-[299px] h-[168px]' >
											<img src={`https://image.tmdb.org/t/p/w500/${item. backdrop_path}`} alt={item.title} className='w-full h-full'/>
										</div>
										<h6 className="text-white text-center font-light mt-[10px] ">{item.title}</h6>
									</li>)
									})}
							</Slider>)}
						</ul>
					</div>
				</div> */}
			</div>
		</div>
	)
}
