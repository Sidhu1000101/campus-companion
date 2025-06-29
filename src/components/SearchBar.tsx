import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
        <Search className="h-6 w-6 text-white/70 dark:text-gray-300" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for services, resources, or information..."
        className="block w-full pl-12 pr-4 py-4 rounded-2xl text-white placeholder-white/50 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 dark:focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 text-lg font-body bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/30 backdrop-blur-xl"
      />
    </div>
  );
};

export default SearchBar; 