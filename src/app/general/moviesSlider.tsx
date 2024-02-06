	import React, { useState, useEffect ,memo } from 'react';
	import Slider from 'react-slick';
	import Link from 'next/link';
	import Image from 'next/image';
	import 'slick-carousel/slick/slick.css';
	import 'slick-carousel/slick/slick-theme.css';

	interface Genre {
		id: number;
		name: string;
	}

	interface Movie {
		id:number;
		backdrop_path: string;
		title: string;
	}

	interface SliderProps {
	genreId: number;
	}
	
	const MoviesSlider: React.FC<SliderProps> = memo(({ genreId }) => {
	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [genre, setGenre] = useState<string>('');
	const [isLoading, setIsLoading] = useState(true);


	const fetchGenre = () => {
		fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=cebda4e0a93282ebe44fc651ad0006c9')
		.then(res => res.json())
		.then(json => {
			const foundGenre = json.genres.find((g: Genre) => g.id === genreId);
			if (foundGenre) {
			setGenre(foundGenre.name);
			}
		});
	};

	const movies = () => {
		fetch(`https://api.themoviedb.org/3/discover/movie?api_key=cebda4e0a93282ebe44fc651ad0006c9&with_genres=${genreId}`)
		.then(res => res.json())
		.then(json => {
			setMovieList(json.results);
			setIsLoading(false);
		});
	};

	useEffect(() => {
		fetchGenre();
		movies();
		console.log(movies);
		
	}, [movies,fetchGenre]);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4.15,
		slidesToScroll: 4,
	};

	return (
	<div className='mb-[30px]'>
			<h4 className='text-white text-xl'>
				{isLoading ? 'Loading movies...' : genre}
			</h4>
			<div className='flex my-2 '>
			<ul className='flex w-[100%] items-center'>
				{isLoading ? (
					<p>Loading movies...</p>
				) : (
					<Slider className='w-[100%] flex items-center' {...settings}>
					{movieList.map((item, index) => {
						return (
						<Link key={index} href={`/moviespage/[id]`} as={`/moviespage/${item.id}`}>
							<li key={index} className=' flex flex-col items-center cursor-pointer justify-center'>
							<div className='w-[299px] h-[168px]'>
								<Image
								src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
								alt={item.title} width={299} height={168}
								/>
							</div>
							<h6 className='text-white text-center font-light mt-[10px]'>{item.title}</h6>
							</li>
						</Link>
					);
					})}
					</Slider>
				)}
			</ul>
			</div>
	</div>
);
		});

	export default MoviesSlider;


