import React from 'react';
import { Moon, Sun } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full overflow-hidden transition-all duration-300 ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="absolute inset-0 bg-gray-200 dark:bg-gray-800 opacity-20 rounded-full"></span>
      <div className="relative z-10 transition-transform duration-500">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-gray-800" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;