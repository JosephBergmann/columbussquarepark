import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityModalContext = createContext();
const AccessiblitySettingsContext = createContext();

export function AccessibilityProvider({children}) {
    const [showAccessibility, setShowAccessibility] = useState(false);

    // darkMode = boolean
    // textSize = boolean
    const [accessibilitySettings, setAccessibilitySettings] = useState({
        darkMode: false,
        textSize: false,
    });

    useEffect(() => {
        const savedSettings = localStorage.getItem('csp-accessbility');
        if (savedSettings) {
            setAccessibilitySettings(JSON.parse(savedSettings))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('csp-accessibility', JSON.stringify(accessibilitySettings))
    }, [accessibilitySettings])

    return (
        <AccessibilityModalContext.Provider value={{ showAccessibility, setShowAccessibility }}>
            <AccessiblitySettingsContext.Provider value={{ accessibilitySettings, setAccessibilitySettings }}>
                {children}
            </AccessiblitySettingsContext.Provider>
        </AccessibilityModalContext.Provider>
    );
}

export function useAccessibilityModal() {
    return useContext(AccessibilityModalContext);
}

export function useAccessibilitySettings() {
    return useContext(AccessiblitySettingsContext)
}
