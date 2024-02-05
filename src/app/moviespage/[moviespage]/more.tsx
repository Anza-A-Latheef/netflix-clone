import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MoreProps {
    movieid: string;
}

interface SimilarMovie {
    id: number;
    backdrop_path: string | null;
    title: string;
}

export default function More({ movieid }: MoreProps) {
    const [moreMovies, setMoreMovies] = useState<SimilarMovie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMoreMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=cebda4e0a93282ebe44fc651ad0006c9`
                );
                const json = await response.json();

                if (json && json.results) {
                    setMoreMovies(json.results);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMoreMovies();
    }, [movieid]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const filteredMovies = moreMovies.filter(movie => movie.backdrop_path !== null);

    return (
        <div className='wrapper-genre mt-12'>
            <h4 className='text-white text-[27px] font-normal leading-8'>More like this</h4>
            <ul className='grid grid-cols-3 '>
                {filteredMovies.slice(0, 12).map((movie) => (
                    <li key={movie.id} className='m-[5px]'>
                        <Link href={`/moviespage/[id]`} as={`/moviespage/${movie.id}`}>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} width={396} height={223} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
