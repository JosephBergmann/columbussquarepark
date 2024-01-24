import parkPhoto from './images/temp_park.jpeg'
import lightbuld from './images/lightbuld.jpeg'
import shovel from './images/shovel_icon.jpeg'
import calendar from './images/calendar_icon.jpeg'
import GalleryPreview from './GalleryPreview'

export default function Home() {

    return (
        <>
            <div class="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${parkPhoto})` }}>
            </div>
            <div className='flex items-center justify-around gap-20 my-10'>
                <div className='flex flex-col items-center'>
                    <span>Learn about the park</span>
                    <img className="sm:w-20 md:w-36 lg:w-52 xl:w-70" src={lightbuld}/>
                </div>
                <div className='flex flex-col items-center'>
                    <span>How to help</span>
                    <img className="sm:w-20 md:w-36 lg:w-52 xl:w-70" src={shovel}/>
                </div>
                <div className='flex flex-col items-center'>
                    <span>Upcoming Events</span>
                    <img className="sm:w-20 md:w-36 lg:w-52 xl:w-70" src={calendar}/>
                </div>
            </div>
            <div className=''>
                <span>View our gallery</span>
                <GalleryPreview />
            </div>
        </>
    )
}
