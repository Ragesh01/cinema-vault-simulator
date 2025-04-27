
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ComponentCard from './ComponentCard';
import PlaceholderCard from './PlaceholderCard';

type Component = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ComponentSectionProps = {
  title: string;
  onSelect: (component: Component | undefined) => void;
};

const ComponentSection = ({ title, onSelect }: ComponentSectionProps) => {
  const [selectedComponent, setSelectedComponent] = useState<Component | undefined>(undefined);
  
  // Mock data - in a real app this would come from an API
  const components: Component[] = [
    {
      id: 1,
      name: 'AMD Ryzen 5 5600X',
      price: 24999,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'AMD Ryzen 7 5800X',
      price: 34999,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'AMD Ryzen 9 5900X',
      price: 44999,
      image: '/placeholder.svg'
    },
    {
      id: 4, 
      name: 'AMD Ryzen 5 5600G',
      price: 19999,
      image: '/placeholder.svg'
    }
  ];

  const handleSelectComponent = (component: Component) => {
    setSelectedComponent(component);
    onSelect(component);
  };
  
  const handleClearComponent = () => {
    setSelectedComponent(undefined);
    onSelect(undefined);
  };

  return (
    <section className="relative">
      <h2 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{title}</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none relative">
        <PlaceholderCard 
          selectedComponent={selectedComponent} 
          onClear={handleClearComponent} 
        />
        {components.map(component => (
          <ComponentCard
            key={component.id}
            component={component}
            onSelect={handleSelectComponent}
          />
        ))}
        <PlaceholderCard variant="find-more" />
        {components.length > 3 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gradient-to-l from-white dark:from-gray-900 pointer-events-none">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ComponentSection;
