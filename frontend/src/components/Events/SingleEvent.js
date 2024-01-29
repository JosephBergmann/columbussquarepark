import eventList from './temp_events'
import parkImage from '../Home/gallery_images/image_1.jpeg'

export default function SingleEvent({event}) {

    const subHeaderClass = 'text-left underline underline-offset-8 tracking-widest xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:w-3xl xl:4xl my-4'

    const eventTextClass = 'tracking-widest xxs:text-sm xs:text-md sm:text-md md:text-md lg:w-md xl:md my-2'

    const eventDate = event.date;
    // Extract date
    const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = eventDate.toLocaleString('en-US', dateOptions);

    // Extract time
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = eventDate.toLocaleString('en-US', timeOptions);

    return (
        <div className="container border-solid border-2 border-black my-4 p-4 flex">
            <div>
                <p className={eventTextClass}><span className="font-bold">title: </span> {event.title}</p>
                <p className={eventTextClass}><span className="font-bold">date: </span>{formattedDate} at {formattedTime}</p>
                <p className={eventTextClass}><span className="font-bold">location: </span>{event.location}</p>
                <p className={eventTextClass}><span className="font-bold">description: </span>{event.description}</p>
            </div>
            <div>
                <img className="w-full xxs:max-w-5 xs:max-w-10 sm:min-w-36 md:min-w-36 lg:w-52 xl:min-w-70 rounded-sm"
                src={parkImage}/>
            </div>
        </div>
    )
}
