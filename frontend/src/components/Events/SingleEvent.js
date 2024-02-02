import eventList from './temp_events'
import parkImage from '../Home/gallery_images/image_1.jpeg'
import { useEventForm } from '../../context/eventForm'
import { useSelector } from 'react-redux'
import { convertToESTFormat } from './date_time_helpers.js'

export default function SingleEvent({event}) {
    const user = useSelector(state => state.session.user)
    const {
        setShowEventForm,
        setIsUpdateEventForm,
        setShowRemoveEvent,
        setEventToUpdate,
        setRemoveEventId,
        setTitle,
        setDate,
        setTime,
        setLocation,
        setDescription
    } = useEventForm()

    const subHeaderClass = 'text-left underline underline-offset-8 tracking-widest xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:w-3xl xl:4xl my-4'

    const eventTextClass = 'tracking-widest xxs:text-sm xs:text-md sm:text-md md:text-md lg:w-md xl:md my-2'

    const eventDate = event.date;
    // Extract date
    const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = eventDate?.toLocaleString('en-US', dateOptions);
    // convert time using helper
    const formattedTime = convertToESTFormat(event.time);






    const updateOnClick = () => {
        setShowEventForm(true)
        setIsUpdateEventForm(true)
        setEventToUpdate(event)
    }

    const removeOnClick = () => {
        setShowRemoveEvent(true)
        setRemoveEventId(event.id)
    }

    return (
        <div className="container sm:w-max border-solid border-2 border-black my-4 p-4 flex flex-col align-center md:flex-row  md:justify-around lg:gap-8 xl:gap-16">
            <div className="w-11/12">
                <p className="tracking-widest text-2xl font-bold"> {event.name}</p>
                <p className={eventTextClass}><span className="font-bold">date: </span>{formattedDate} at {formattedTime}</p>
                <p className={eventTextClass}><span className="font-bold">location: </span>{event.location}</p>
                <p className={eventTextClass}><span className="font-bold">description: </span>{event.description}</p>
            </div>
            <div className='flex flex-col justify-between'>
                <img className="w-full self-center max-w-96 xl:min-w-70 rounded-sm"
                src={parkImage}/>
                <div className="flex justify-end gap-2">
                    {user && <button
                                onClick={updateOnClick}
                                className="self-end py-1 md:px-4 bg-fun text-white rounded-xl border border-fun active:bg-secondary active:border active:border-white">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>}
                    {user && <button
                                onClick={removeOnClick}
                                className="self-end py-1 md:px-4 bg-fun text-white rounded-xl border border-fun active:bg-secondary active:border active:border-white">
                                <i class="fa-solid fa-trash"></i>
                            </button>}


                            </div>
            </div>
        </div>
    )
}
