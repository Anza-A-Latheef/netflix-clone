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
					<MoviesSlider genre="Popular on Netflix" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Action Movies" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Made in India" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Food For Hungry Brains" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="US TV Dramas" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Hollywood Movies" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Released in the Past Year" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Critically Acclaimed Movies" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="K-Dramas" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Dramas" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="We Think You'll Love These" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="True Crime Docuseries" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Animation" api_link="https://image.tmdb.org/t/p/w500/"/>
					<MoviesSlider genre="Hindi-Language Movies" api_link="https://image.tmdb.org/t/p/w500/"/>
				</div>
			</div>
				<SigninFooter/>
		</div>
	)
}
