import eventList from './temp_events'
import parkImage from '../Home/gallery_images/image_1.jpeg'
import { useEventForm } from '../../context/eventForm'
import { useSelector } from 'react-redux'
import { useAccessibilitySettings } from '../../context/accessibility';

export default function SingleEvent({event}) {
    const { accessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize } = accessibilitySettings;

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

    const subHeaderClass = 'text-left underline underline-offset-8 xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:w-3xl xl:4xl my-4'

    const eventTextClass = `lg:w-md xl:md my-2 ${darkMode && "text-white"} ${textSize && "text-lg"}`

    const eventDate = event.date;
    // Extract date
    const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = eventDate.toLocaleString('en-US', dateOptions);

    // Extract time
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = eventDate.toLocaleString('en-US', timeOptions);

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
        <div className='flex flex-col md:flex-row gap-2 md:gap-3 mb-6 w-full'>
            <div className={`container rounded-lg border-2 border-gray-300 md:border-2 hover:shadow-lg md:p-2 ${darkMode && "border-none bg-gray-600 hover:bg-gray-500"} flex flex-col flex-grow align-center md:flex-row  md:justify-around lg:gap-8 xl:gap-16 overflow-hidden`}>
                <div className='md:hidden flex flex-col justify-between'>
                    <img className="w-full self-center max-w-96 xl:min-w-70 object-cover"
                        src={parkImage}/>
                </div>
                <div className="w-11/12 p-4 md:p-2 md:ml-1 pt-4 md:mt-0 md:mr-4">
                    <p className={`font-bold text-2xl ${textSize && "text-3xl"} ${darkMode && "text-white"}`}> {event.title}</p>
                    <p className={eventTextClass}><span className="font-bold">date: </span>{formattedDate} at {formattedTime}</p>
                    <p className={eventTextClass}><span className="font-bold">location: </span>{event.location}</p>
                    <p className={eventTextClass}><span className="font-bold">description: </span>{event.description}</p>
                </div>
                <div className='hidden md:flex flex-col justify-between'>
                    <img className="w-full self-center max-w-96 xl:min-w-70 rounded-sm"
                        src={parkImage}/>
                </div>
            </div>
            {user && <div className="flex flex-row md:flex-col justify-end md:justify-start gap-2 mt-1">
                <button
                    onClick={updateOnClick}
                    className={`h-10 w-10 text-yellow-500 rounded-lg border border-yellow-500 ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"} active:bg-secondary active:border active:border-white`}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                    onClick={removeOnClick}
                    className={`h-10 w-10 text-red-500 rounded-lg border border-red-500 ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>}
        </div>
    )
}
