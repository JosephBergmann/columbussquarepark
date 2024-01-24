import ImageCard from "../ImageCard";
import img1 from './gallery_images/image_1.jpeg'
import img2 from './gallery_images/image_2.jpeg'
import img3 from './gallery_images/image_3.jpeg'
import img4 from './gallery_images/image_4.jpeg'
import img5 from './gallery_images/image_5.jpeg'
import img6 from './gallery_images/image_6.jpeg'
import img7 from './gallery_images/image_7.jpeg'


export default function GalleryPreview() {

    const imageMap = [img1, img2, img3, img4, img5, img6, img7].map(image => {
        return (
            <>
            <ImageCard image={image}/>
            </>
        )
    })

    return (
        <>
            {imageMap}
        </>
    )
}
