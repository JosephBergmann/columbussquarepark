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
    const { accessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize } = accessibilitySettings;
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

    const importAll = (context) => context.keys().map(context);
    const imagesContext = require.context('../Home/gallery_images', false, /\.(png|jpg|jpeg|gif|svg)$/);
    const images = importAll(imagesContext);

    const subHeaderClass = `text-left underline underline-offset-8 tracking-widest text-2xl my-8 ${darkMode && "text-white"}`
    const eventsArray = Object.values(events)
    if (!eventsArray.length) {
        return null
    }
    const eventsMap = eventsArray.map(event => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        const image = images[getRandomInt(45)]
        console.log("🚀 ~ eventsMap ~ image:", image)

        return (
            <>
                <SingleEvent event={event} image={image}/>
            </>
        )
    })

    return (
        <div className="flex justify-center px-4 mb-20">
            <div>
                <div className="flex justify-between gap-8">
                    <h2 className={subHeaderClass} >Upcoming Events</h2>
                    {user && <button
                                onClick={() => setShowEventForm(true)}
                                className="self-center py-1 px-2 md:px-4 bg-fun text-white rounded-xl border border-fun active:bg-secondary active:border active:border-white">
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
