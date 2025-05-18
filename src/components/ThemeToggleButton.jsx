// src/components/ThemeToggleButton.jsx
import React from 'react';
import { useAppTheme } from '../contexts/AppContextThemeSwitcher';
import { Sun, Moon } from 'lucide-react';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useAppTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-surface-2 text-icon-default hover:bg-primary-subtle hover:text-primary dark:hover:bg-primary-subtle dark:hover:text-primary transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};
export default ThemeToggleButton;