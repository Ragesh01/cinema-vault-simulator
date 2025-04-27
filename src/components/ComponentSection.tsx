
import { useState } from 'react';
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
    <section>
      <h2 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
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
      </div>
    </section>
  );
};

export default ComponentSection;
