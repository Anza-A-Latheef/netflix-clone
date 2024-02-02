import React from 'react';

interface MovieDetails {
  offline: string;
  genres: string;
  violent: string;
  audio: string;
  subtitles: string;
  about: string;
  cast: string[];
}

interface DetailsProps {
    movieid: string;
    details: MovieDetails;
}

const DetailsSection: React.FC<DetailsProps> = ({ details ,movieid }) => {
  const renderDetailsItem = (title: string, content: string) => (
    <li className='headli flex flex-col text-left'>
      <h6 className='smallhead text-base text-[#a1a1a1]'>{title}</h6>
      <p className='smallp text-base text-white'>{content}</p>
    </li>
  );

  const renderCastList = (cast: string[]) => (
    <li className='headli w-[33%] flex flex-col text-left'>
      {cast.map((actor, index) => (
        <p key={index} className='smallp text-base text-white'>
          {actor}
        </p>
      ))}
    </li>
  );

  return(
        <div className='wrapper-genre mt-16'>
        <h4 className='text-white text-[27px] font-normal leading-8'>More Details</h4>
        <div className='mt-3'>
            <ul className='grid grid-cols-3 grid-rows-2 w-full'>
            {renderDetailsItem('Watch offline', details.offline)}
            {renderDetailsItem('Genres', details.genres)}
            {renderDetailsItem('This movie is...', details.violent)}
            {renderDetailsItem('Audio', details.audio)}
            {renderDetailsItem('Subtitles', details.subtitles)}
            {renderDetailsItem('About Badland Hunters', details.about)}
            </ul>
        </div>
        <div className='mt-2'>
            <ul className='flex items-center justify-between'>
            {renderCastList(details.cast)}
            </ul>
        </div>
        </div>
    );
    };

export default DetailsSection;
