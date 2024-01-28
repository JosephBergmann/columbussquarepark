import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({children}) {
    const [showAccessibility, setShowAccessibility] = useState(false);

    return (
        <AccessibilityContext.Provider value={{ showAccessibility, setShowAccessibility }}>
            {children}
        </AccessibilityContext.Provider>
    );
}

export function useAccessibility() {
    return useContext(AccessibilityContext);
}
