import parkPhoto from './images/temp_park.jpeg'
import lightbuld from './images/lightbuld.jpeg'
import shovel from './images/shovel_icon.jpeg'
import calendar from './images/calendar_icon.jpeg'
import GalleryPreview from './GalleryPreview'

export default function Home() {

    const subHeaderClass = 'text-align-center tracking-widest xxs:text-lg xs:text-lg sm:text-xl md:text-2xl lg:w-3xl xl:4xl'

    return (
        <>
            <div class="bg-cover bg-center min-h-96" style={{ backgroundImage: `url(${parkPhoto})` }}>
            </div>
            <div className='flex items-center justify-around gap-20 my-10'>
                <div className='flex flex-col items-center'>
                    <span className={subHeaderClass} >Learn about the park</span>
                    <img className="sm:w-10 md:w-16 lg:w-20 xl:w-32" src={lightbuld}/>
                </div>
                <div className='flex flex-col items-center'>
                    <span className={subHeaderClass} >How to help</span>
                    <img className="sm:w-10 md:w-16 lg:w-20 xl:w-32" src={shovel}/>
                </div>
                <div className='flex flex-col items-center'>
                    <span className={subHeaderClass} >Upcoming Events</span>
                    <img className="sm:w-10 md:w-16 lg:w-20 xl:w-32" src={calendar}/>
                </div>
            </div>
            <div className='flex flex-col gap-4 mx-6 items-center'>
                <span className={subHeaderClass}>View our gallery</span>
                <div className='flex justify-around gap-6'>
                    <GalleryPreview />
                </div>
            </div>
        </>
    )
}
