import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccessibilitySettings } from '../../context/accessibility';
import ImageCard from '../ImageCard'
// import { useNavigation } from '../../context/navigation';
import { useNavigation } from '../../context/navigation';


const importAll = (context) => context.keys().map(context);

const imagesContext = require.context('../Home/gallery_images', false, /\.(png|jpg|jpeg|gif|svg)$/);
const images = importAll(imagesContext);

export default function Gallery() {
    const { accessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize } = accessibilitySettings;
    // const { setPage } = useNavigation();

    // useEffect(() => {
    //     setPage('home')
    // }, []);

    const navigate = useNavigate();

    const subHeaderClass = `text-center ${darkMode ? "text-white" : null} ${textSize ? "text-2xl" : "text-xl"}`

    const galleryMap = images.map(image => {
        return (
            <div>
                <ImageCard image={image} />
            </div>
        )
    })

    return (
        <div data-testid='home-1' className='mb-20 flex flex-wrap gap-14'>
            {galleryMap}
        </div>
    )
}
