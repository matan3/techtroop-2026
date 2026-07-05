import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('app-theme') || 'light';
    });

    const [fontSize, setFontSize] = useState(() => {
        return localStorage.getItem('app-fontSize') || 'medium';
    });

    useEffect(() => {
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('app-fontSize', fontSize);
    }, [fontSize]);

    const value = { theme, setTheme, fontSize, setFontSize };

    return (
        <ThemeContext value={value}>
            {children}
        </ThemeContext>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}
