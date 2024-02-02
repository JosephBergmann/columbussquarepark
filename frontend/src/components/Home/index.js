import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import parkPhoto from './images/temp_park.jpeg'
import GalleryPreview from './GalleryPreview'
import { useAccessibilitySettings } from '../../context/accessibility';
import { useNavigation } from '../../context/navigation';
import ImageCarousel from '../Carousel';

const importAll = (context) => context.keys().map(context);

const imagesContext = require.context('./gallery_images', false, /\.(png|jpg|jpeg|gif|svg)$/);
const images = importAll(imagesContext);

export default function Home() {
    const { accessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize } = accessibilitySettings;
    const { setPage } = useNavigation();

    useEffect(() => {
        setPage('home')
    }, []);

    const navigate = useNavigate();

    const subHeaderClass = `text-center ${darkMode ? "" : null} ${textSize ? "text-2xl" : "text-xl"}`

    return (
        <div data-testid='home-1' className='mb-20 flex flex-col gap-14'>
            <div class="bg-cover bg-center min-h-96" style={{ backgroundImage: `url(${parkPhoto})` }} />
            <div className='flex flex-col md:flex-row items-center justify-evenly gap-10 md:gap-20'>
                <button onClick={() => navigate("/about")} className='flex flex-col justify-center gap-3 items-center rounded-full h-56 w-56 bg-secondary/75 hover:bg-secondary active:bg-slate-200 p-6'>
                    <div className={`text-6xl md:text-7xl text-yellow-500 ${darkMode ? "" : ""}`}>
                        <i class="fa-solid fa-lightbulb"></i>
                    </div>
                    <div className={subHeaderClass} >Learn about the park</div>
                </button>
                <button onClick={() => navigate("/contact")} className='flex flex-col justify-center gap-3 items-center rounded-full h-56 w-56 bg-secondary/75 hover:bg-secondary active:bg-slate-200 p-6'>
                    <div className={`text-6xl md:text-7xl text-yellow-800 ${darkMode ? "" : ""}`}>
                        <i class="fa-solid fa-handshake-angle"></i>
                    </div>
                    <div className={subHeaderClass} >How to help</div>
                </button>
                <button onClick={() => navigate("/events")} className='flex flex-col justify-center gap-3 items-center rounded-full h-56 w-56 bg-secondary/75 hover:bg-secondary active:bg-slate-200 p-6'>
                    <div className={`text-6xl md:text-7xl text-sky-500 ${darkMode ? "" : ""}`}>
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className={subHeaderClass} >Upcoming Events</div>
                </button>
            </div>
            <div className='flex flex-col items-center'>
                <span className={subHeaderClass}>View our gallery</span>
                <div className='hidden md:flex justify-around gap-4 mt-4 mb-8 px-2'>
                    <GalleryPreview />
                </div>
                <div className='md:hidden w-full mt-4 mb-8 px-2'>
                    <ImageCarousel images={images} />
                </div>
            </div>

            {/* mobile */}
        </div>
    )
}
