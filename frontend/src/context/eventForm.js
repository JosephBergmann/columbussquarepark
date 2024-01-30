import React, { createContext, useContext, useState, useEffect } from 'react';

const EventFormContext = createContext();

export function EventFormProvider({children}) {
    const [showEventForm, setShowEventForm] = useState(false);

    return (
        <EventFormContext.Provider value={{ showEventForm, setShowEventForm }}>
            {children}
        </EventFormContext.Provider>
    );
}

export function useEventForm() {
    return useContext(EventFormContext);
}
