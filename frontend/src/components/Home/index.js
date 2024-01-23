import parkPhoto from './images/place_holder_park.jpeg'
import lightbuld from './images/lightbuld.jpeg'
import shovel from './images/shovel_icon.jpeg'
import calendar from './images/calendar_icon.jpeg'
import GalleryPreview from './GalleryPreview'

export default function Home() {

    return (
        <>
            <div>
                <img src={parkPhoto}/>
            </div>
            <div>
                <div>
                    <span>Learn about the park</span>
                    <img src={lightbuld}/>
                </div>
                <div>
                    <span>How to help</span>
                    <img src={shovel}/>
                </div>
                <div>
                    <span>Upcoming Events</span>
                    <img src={calendar}/>
                </div>
            </div>
            <div>
                <span>View our gallery</span>
                <GalleryPreview />
            </div>
        </>
    )
}
