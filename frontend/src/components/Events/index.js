import { useState } from 'react'
import SingleEvent from './SingleEvent'
import eventList from './temp_events'
import EventCalendar from './EventCalendar'


export default function Events() {
    const [date, setDate] = useState(new Date())

    const onChange = () => {
        setDate()
    }

    const subHeaderClass = 'text-left underline underline-offset-8 tracking-widest xxs:text-md xs:text-lg sm:text-xl md:text-2xl lg:w-3xl xl:4xl my-8'

    const eventsMap = eventList.map(event => {
        return (
            <>
                <SingleEvent event={event} />
            </>
        )
    })

    return (
        <div className="flex gap-16">
            <div>
                <h2 className={subHeaderClass} >Upcoming Events</h2>
                <div>
                    {eventsMap}
                </div>
            </div>
            <div>
                <EventCalendar/>
            </div>
        </div>
    )
}
