import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onThemeChange }) => {
  const toggleTheme = () => {
    onThemeChange(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className={`relative p-4 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl group ${
          theme === 'dark' 
            ? 'bg-gray-800/80 border-gray-600/50' 
            : 'bg-white/20 border-white/30'
        } border backdrop-blur-xl`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
        
        <div className="relative z-10">
          {theme === 'light' ? (
            <Moon className="w-8 h-8 text-white group-hover:text-blue-300 transition-colors duration-300" />
          ) : (
            <Sun className="w-8 h-8 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle; 