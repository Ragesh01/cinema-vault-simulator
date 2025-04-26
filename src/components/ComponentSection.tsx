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
  onSelect: () => void;
};

const ComponentSection = ({ title, onSelect }: ComponentSectionProps) => {
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

  return (
    <section>
      <h2 className="text-lg font-medium mb-4 text-gray-800">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        <PlaceholderCard />
        {components.map(component => (
          <ComponentCard
            key={component.id}
            component={component}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default ComponentSection;
