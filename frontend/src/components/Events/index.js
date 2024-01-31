import { useState } from 'react'
import SingleEvent from './SingleEvent'
import eventList from './temp_events'
import EventCalendar from './EventCalendar'
import { useSelector } from 'react-redux'
import { useEventForm } from '../../context/eventForm'
import EventFormModal from '../EventFormModal'
import RemoveEventModal from '../RemoveEventModal'


export default function Events() {
    const user = useSelector(state => state.session.user)
    const {
        showEventForm,
        setShowEventForm,
        showRemoveEvent,
        setShowRemoveEvent,
        isUpdateEventForm,
        setIsUpdateEventForm
    } = useEventForm()

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
                <div className="flex justify-between gap-8">
                    <h2 className={subHeaderClass} >Upcoming Events</h2>
                    {user && <button
                                onClick={() => setShowEventForm(true)}
                                className="self-center py-1 md:px-4 bg-fun text-white rounded-xl border border-fun active:bg-secondary active:border active:border-white">
                                Add Event
                                </button>}
                </div>
                <div>
                    {eventsMap}
                </div>
            </div>
            {/* <div>
                <EventCalendar/>
            </div> */}
            {showEventForm && <EventFormModal/>}
            {showRemoveEvent && <RemoveEventModal/>}
        </div>
    )
}
