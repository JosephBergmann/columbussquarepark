import eventList from './temp_events'
import parkImage from '../Home/gallery_images/image_1.jpeg'
import { useEventForm } from '../../context/eventForm'
import { useSelector } from 'react-redux'

export default function SingleEvent({event}) {
    const user = useSelector(state => state.session.user)
    const {showEventForm, setShowEventForm} = useEventForm()

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
            <div className='flex flex-col justify-between'>
                <img className="w-full xxs:max-w-5 xs:max-w-10 sm:min-w-36 md:min-w-36 lg:w-52 xl:min-w-70 rounded-sm"
                src={parkImage}/>
                {user && <button
                                onClick={() => setShowEventForm(true)}
                                className="self-end py-1 md:px-4 bg-fun text-white rounded-xl border border-fun active:bg-secondary active:border active:border-white">
                                Update
                                </button>}
            </div>
        </div>
    )
}
