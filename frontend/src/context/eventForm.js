import React, { createContext, useContext, useState, useEffect } from 'react';

const EventFormContext = createContext();

export function EventFormProvider({children}) {
    const [showEventForm, setShowEventForm] = useState(false);
    const [isUpdateEventForm, setIsUpdateEventForm] = useState(false)
    const [showRemoveEvent, setShowRemoveEvent] = useState(false)
    const [eventToUpdate, setEventToUpdate] = useState('')
    const [removeEventId, setRemoveEventId] = useState('')

    const contextProps = {
        showEventForm,
        setShowEventForm,
        isUpdateEventForm,
        setIsUpdateEventForm,
        showRemoveEvent,
        setShowRemoveEvent,
        removeEventId,
        setRemoveEventId,
        eventToUpdate,
        setEventToUpdate,
    }

    return (
        <EventFormContext.Provider value={contextProps}>
            {children}
        </EventFormContext.Provider>
    );
}

export function useEventForm() {
    return useContext(EventFormContext);
}
