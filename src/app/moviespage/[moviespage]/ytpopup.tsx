import React, { useEffect ,useRef} from 'react';
import YouTube from 'react-youtube';

interface PopupPageProps {
    videoId: string | null;
    onClose: () => void;
    title: string;
    index: number;
}

const PopupPage: React.FC<PopupPageProps> = ({ videoId, onClose, title, index }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose(); // Close the popup if clicked outside the content
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
        document.body.classList.remove('overflow-hidden');
        };
    }, [videoId]);

    return (
        <div className="popup-overlay flex justify-center items-center bg-black bg-opacity-[0.85] h-[100vh] fixed w-screen top-0 left-0">
            <div ref={popupRef} className="popup-content w-fit h-fit">
                <div className='flex justify-between items-center border-l-4 rounded-sm my-2 pl-2 border-red-700'>
                    <h5 className='text-white font-semibold text-[19px]'>Chapter {index + 1} Trailer: {title}</h5>
                    <button onClick={onClose} className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" > <path     stroke-linecap="round"     stroke-linejoin="round"     stroke-width="2"     d="M6 18L18 6M6 6l12 12" /> </svg></button>
                </div>
                {videoId && (
                    <YouTube videoId={videoId} opts={{ width: '600', height: '400' }} />
                )}
            </div>
        </div>
    );
};
 export default PopupPage