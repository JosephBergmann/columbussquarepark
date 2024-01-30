import { useState } from 'react'
import SingleEvent from './SingleEvent'
import eventList from './temp_events'
import EventCalendar from './EventCalendar'
import { useSelector } from 'react-redux'


export default function Events() {
    const [date, setDate] = useState(new Date())
    const user = useSelector(state => state.session.user)

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

    const on 

    return (
        <div className="flex gap-16">
            <div>
                <div className="flex justify-between gap-8">
                    <h2 className={subHeaderClass} >Upcoming Events</h2>
                    {user && <button className="self-center py-1 md:px-4 bg-fun text-white rounded-xl border border-fun active:bg-secondary active:border active:border-white">Add Event</button>}
                </div>
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
