import React, { useState, useEffect } from 'react'
import SingleEvent from './SingleEvent'
import eventList from './temp_events'
import EventCalendar from './EventCalendar'
import { useSelector } from 'react-redux'
import { useEventForm } from '../../context/eventForm'
import EventFormModal from '../EventFormModal'
import RemoveEventModal from '../RemoveEventModal'
import { useAccessibilitySettings } from '../../context/accessibility';
import { useNavigation } from '../../context/navigation'


export default function Events() {
    const { accessibilitySettings, headerFormat } = useAccessibilitySettings();
    const { darkMode, textSize, textSpacing } = accessibilitySettings;
    const { setPage } = useNavigation();

    useEffect(() => {
        setPage('events')
    }, [])

    const user = useSelector(state => state.session.user);

    const events = useSelector(state => state.events.all)
    const {
        showEventForm,
        setShowEventForm,
        showRemoveEvent,
        setShowRemoveEvent,
        isUpdateEventForm,
        setIsUpdateEventForm
    } = useEventForm()

    const subHeaderClass = `text-left underline underline-offset-8 tracking-widest text-2xl my-8 ${darkMode && "text-white"}`
    const eventsArray = Object.values(events)
    if (!eventsArray.length) {
        return null
    }
    const eventsMap = eventsArray.map(event => {
        return (
            <>
                <SingleEvent event={event} />
            </>
        )
    })

    return (
        <div className="mt-6 px-4 mb-20">
            <div className='flex flex-col w-full my-4'>
                <div className="flex justify-between gap-8">
                    <h2 className={`${headerFormat} underline ${textSpacing ? "underline-offset-4" : "underlin-offset-1"} pb-4`} >Upcoming Events</h2>
                    {user && <button
                                onClick={() => setShowEventForm(true)}
                                className="self-center py-1 px-2 md:px-4 bg-fun text-white rounded-xl border border-fun active:bg-secondary active:border active:border-white">
                                Add Event
                            </button>}
                </div>
                <div className='flex flex-col items-center md:items-stretch md:w-full'>
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
