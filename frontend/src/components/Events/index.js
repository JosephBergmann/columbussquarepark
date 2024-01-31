import SingleEvent from './SingleEvent'
import eventList from './temp_events'

export default function Events() {

    const subHeaderClass = 'text-left underline underline-offset-8 tracking-widest xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:w-3xl xl:4xl my-4'

    console.log(eventList)

    const eventsMap = eventList.map(event => {
        console.log(event)
        return (
            <>
                <SingleEvent event={event} />
            </>
        )
    })

    return (
        <div>
            <h2 className={subHeaderClass} >Upcoming Events</h2>
            <div>
                {eventsMap}
            </div>
        </div>
    )
}
