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
    const { setPage } = useNavigation();

    useEffect(() => {
        setPage('gallery')
    }, []);

    const navigate = useNavigate();

    const subHeaderClass = `text-left underline underline-offset-8 tracking-widest text-2xl my-8 ${darkMode && "text-white"}`

    const galleryMap = images.map(image => {
        return (
            <div>
                <ImageCard image={image} />
            </div>
        )
    })

    return (
        <div >
            <h1 className={subHeaderClass}>Gallery</h1>
            <div data-testid='home-1' className='container mb-20 flex justify-center flex-wrap gap-2'>
            {galleryMap}
            </div>
        </div>
    )
}
