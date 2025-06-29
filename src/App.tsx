import { useState, useEffect } from 'react';
import { Theme } from './types';
import { links, categories } from './data/links';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import LinksGrid from './components/LinksGrid';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [searchTerm, setSearchTerm] = useState('');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  // Dynamic background classes based on theme
  const backgroundClass = theme === 'dark' 
    ? 'min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white'
    : 'min-h-screen bg-gradient-to-br from-blue-900 to-blue-400 text-white';

  const headerTextClass = theme === 'dark' 
    ? 'text-blue-100' 
    : 'text-blue-100';

  const footerTextClass = theme === 'dark' 
    ? 'text-blue-200' 
    : 'text-blue-100';

  const footerBorderClass = theme === 'dark' 
    ? 'border-blue-300/20' 
    : 'border-blue-200/20';

  return (
    <div className={`${backgroundClass} transition-colors duration-300 relative overflow-hidden`}>
      <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* Header */}
        <header className="text-center mb-12">
          <img src="https://andhrauniversity.edu.in/img/logo.png" alt="Andhra University Logo" className="mx-auto mb-6 w-64 h-40 rounded-2xl bg-white p-3 shadow-2xl border-4 border-blue-200" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight">Andhra University</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide text-blue-100">Campus Companion</h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${headerTextClass}`}>
            Your gateway to all essential AU student resources and services.<br />
            NAAC A++ | NIRF 2024: 7th (State), 25th (University), 41st (Overall)
          </p>
        </header>

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* Links Grid */}
        <LinksGrid 
          links={links} 
          categories={categories} 
          searchTerm={searchTerm} 
        />

        {/* Footer */}
        <footer className={`mt-20 pt-8 border-t ${footerBorderClass} text-center`}>
          <p className={`${footerTextClass} text-sm mb-2`}>
            © {new Date().getFullYear()} Andhra University Campus Companion. Built for AU students.
          </p>
          <p className={`${footerTextClass} text-xs`}>
            Andhra University, Visakhapatnam, Andhra Pradesh, India &bull; Celebrating 99+ years of academic excellence
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App; 