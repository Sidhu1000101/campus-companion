import * as LucideIcons from 'lucide-react';
import { LinkItem } from '../types';

interface LinkCardProps {
  link: LinkItem;
  categoryColor: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, categoryColor }) => {
  const IconComponent = (LucideIcons as any)[link.icon] || LucideIcons.Link;

  const handleClick = () => {
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="card p-8 text-left w-full group hover:scale-110 transition-all duration-500 relative overflow-hidden bg-white/10 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/30 backdrop-blur-xl"
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <div className="flex items-start space-x-6 relative z-10">
        <div className={`p-4 rounded-2xl ${categoryColor} text-white group-hover:scale-125 transition-transform duration-300 shadow-2xl neon-glow`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300 font-body text-xl leading-tight mb-3">
            {link.title}
          </h3>
          {link.description && (
            <p className="text-white/70 dark:text-gray-300 group-hover:text-white/90 dark:group-hover:text-gray-100 transition-colors duration-300 font-body leading-relaxed">
              {link.description}
            </p>
          )}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <LucideIcons.ExternalLink className="w-6 h-6 text-white/60 group-hover:text-white" />
        </div>
      </div>
    </button>
  );
};

export default LinkCard; 