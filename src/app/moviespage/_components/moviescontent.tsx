import React from 'react';
import MoviesSlider from '@/app/general/moviesSlider';
import SigninFooter from '@/app/signin-page/_components/signinFooter';

export default function MoviesContent() {
	return (
		<div className='bg-[#181818] '>
			<div className='bg-[#181818] px-10'>
				<div className="bg-[#181818] pt-12 pb-10 max-w-[600px]">
					<h1 className='text-white text-[44px] font-extrabold leading-relaxed'>Movies</h1>
					<p className='text-white text-lg text-left font-light'>Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
				</div>
				<div className="flex flex-col">
					<MoviesSlider genreId={12}/>
					<MoviesSlider genreId={14}/>
					<MoviesSlider genreId={16}/>
					<MoviesSlider genreId={18}/>
					<MoviesSlider genreId={27}/>
					<MoviesSlider genreId={28}/>
					<MoviesSlider genreId={35}/>
					<MoviesSlider genreId={36}/>
					<MoviesSlider genreId={37}/>
					<MoviesSlider genreId={53}/>
					<MoviesSlider genreId={80}/>
					<MoviesSlider genreId={878}/>
					<MoviesSlider genreId={9648}/>
					<MoviesSlider genreId={10402}/>
					<MoviesSlider genreId={10749}/>
					<MoviesSlider genreId={10763}/>
					<MoviesSlider genreId={10751}/>
					<MoviesSlider genreId={10752}/>
					<MoviesSlider genreId={10770}/>
				</div>
			</div>
				<SigninFooter/>
		</div>
	)
}
