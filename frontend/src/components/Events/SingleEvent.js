import eventList from './temp_events'

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
        <div className="container border-solid border-2 border-black my-4 p-4">
            <div>
                <p className={eventTextClass}>title: {event.title}</p>
                <p className={eventTextClass}>date: {formattedDate} at {formattedTime}</p>
                <p className={eventTextClass}>location:{event.location}</p>
                <p className={eventTextClass}>description: {event.description}</p>
            </div>
            <div>
                <img  />
            </div>
        </div>
    )
}
