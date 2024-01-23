import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Movie {
	poster_path: string;
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
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	};
	return (
		<div>
			<div className='bg-[#181818] px-10'>
				<div className="bg-[#181818] py-12 max-w-[600px]">
					<h1 className='text-white text-[44px] font-extrabold leading-relaxed'>Movies</h1>
					<p className='text-white text-lg text-left font-light'>Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
				</div>
				<div>
					<h4 className='text-white'>Popular on Netflix</h4>
					<div className='flex'>
						<ul className='flex w-[100%]'>
							{isLoading ? (<p>Loading movies...</p>) :
								(<Slider className='w-[100%]' {...settings}>
									{movieList.slice(0, 10).map((item, index) => {
										return (<li key={index}>
											<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
											<h6 className="text-white">{item.title}</h6>
										</li>)
									})}
								</Slider>)
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
