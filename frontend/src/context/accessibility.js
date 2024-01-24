import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export function MarketsProvider({children}) {
    const [toggleAccessibility, setToggleAccessibility] = useState(false);

    return (
        <AccessibilityContext.Provider value={{ toggleAccessibility, setToggleAccessibility }}>
            {children}
        </AccessibilityContext.Provider>
    );
}

export function useAccessibility() {
    return useContext(AccessibilityContext);
}
