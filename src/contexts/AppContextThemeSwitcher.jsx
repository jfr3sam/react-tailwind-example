// src/contexts/AppContextThemeSwitcher.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AppThemeContext = createContext();

export const useAppTheme = () => useContext(AppThemeContext);

export const AppThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('app-display-theme');
        return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark'); 
        } else {
            root.classList.remove('dark'); 
        }
        localStorage.setItem('app-display-theme', theme);
        console.log("Demo App Theme Applied:", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <AppThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppThemeContext.Provider>
    );
};