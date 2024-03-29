    import React, { useState, useEffect} from 'react';
    import PopupPage from './ytpopup';
    import Image from 'next/image';

    interface TrailerProps {
        movieid: string;
        title: string;
    }

    interface PosterImage {
        id: number;
        backdrop_path: string;
        title: string;
        posters: { file_path: string; original_title: string }[];
    }

    export default function Trailer({ movieid, title }: TrailerProps) {
    const [posters, setPosters] = useState<PosterImage | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [videoIds, setVideoIds] = useState<string[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchPosters = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/images?api_key=cebda4e0a93282ebe44fc651ad0006c9`);
                const json = await response.json();
                if (json && json.posters) {
                    const enOnly = json.posters.filter(({ iso_639_1 }: { iso_639_1: string }) => iso_639_1 === 'en');
                    setPosters({ id: 0, backdrop_path: '', title: '', posters: enOnly.map((poster: { file_path: string }) => ({ ...poster, original_title: 'N/A', })),});
                }
            } catch (error) {
                console.error(error);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };
        fetchPosters();
    }, [movieid]);

    useEffect(() => {
        const fetchVideoIds = async () => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=cebda4e0a93282ebe44fc651ad0006c9` );
            const json = await response.json();
            const ids = json.results?.map((result: { key: string }) => result.key) || [];
            setVideoIds(ids);
        } catch (error) {
            console.error('Error fetching video IDs:', error);
            setVideoIds([]);
        }
        };
        fetchVideoIds();
    }, [movieid]);

    const handlePosterClick = (index: number) => {
        setSelectedVideoIndex(index);
        setShowPopup(true);
    };

    const closePopup = () => {
        setSelectedVideoIndex(null);
        setShowPopup(false);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="wrapper-genre flex flex-col mt-16">
            <h3 className="text-white text-[27px] font-normal leading-8"> Videos <span className="text-[20px] text-[#a3a3a3] ml-1">| {title}</span> </h3>
            <div className="block my-4">
                <ul className="flex items-center w-full">
                    {posters && posters.posters && posters.posters.slice(0, 3).map((poster, index) => (
                        <li key={index} className="flex flex-col ">
                            <button className="bg-none border-0 m-[5px] w-min p-0 text-left outline-none " onClick={() => handlePosterClick(index)} >
                                <div className="w-[255px] relative mb-3">
                                    <Image src={`https://image.tmdb.org/t/p/w500${poster.file_path}`} alt={`Poster ${index + 1}`} width={245} height={240} className="relative object-cover" />
                                        <svg viewBox="0 0 50 50" className="absolute bottom-[15px] h-12 left-[15px]" data-uia="additional-video-play-icon">
                                            <g fill="none" fillRule="nonzero">
                                                <path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z" className="base"></path>
                                                <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z" className="triangle"></path>
                                            </g>
                                        </svg>
                                </div>
                                <span className="text-white mt-12 text-wrap " data-uia="additional-video-title"> Chapter {index + 1} Trailer: {title} </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {showPopup && selectedVideoIndex !== null && (
            <PopupPage videoId={videoIds[selectedVideoIndex]} onClose={closePopup} title={title} index={selectedVideoIndex} />
            )}
        </div>
    );
    }