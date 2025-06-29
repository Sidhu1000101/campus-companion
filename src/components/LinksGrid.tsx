import { LinkItem, Category } from '../types';
import LinkCard from './LinkCard';

interface LinksGridProps {
  links: LinkItem[];
  categories: Category[];
  searchTerm: string;
}

const LinksGrid: React.FC<LinksGridProps> = ({ links, categories, searchTerm }) => {
  const filteredLinks = links.filter(link =>
    link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedLinks = categories.map(category => ({
    ...category,
    links: filteredLinks.filter(link => link.category === category.id)
  })).filter(group => group.links.length > 0);

  if (filteredLinks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-white/70 text-xl font-body">
          No services found matching "{searchTerm}"
        </div>
        <div className="text-white/50 text-sm mt-3 font-body">
          Try searching for something else
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {groupedLinks.map((category) => (
        <div key={category.id}>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 flex items-center holographic">
            <div className={`p-4 rounded-2xl ${category.color} text-white mr-6 shadow-2xl neon-glow`}>
              {/* You can add category icons here if needed */}
            </div>
            {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.links.map((link) => (
              <div key={link.id}>
                <LinkCard link={link} categoryColor={category.color} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksGrid; 