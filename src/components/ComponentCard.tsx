
import { Plus } from 'lucide-react';
import { ButtonCustom } from './ui/button-custom';

type ComponentProps = {
  component: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onSelect: (component: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => void;
};

const ComponentCard = ({ component, onSelect }: ComponentProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex flex-col min-w-[240px] p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-primary hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:border-primary">
      <img
        src={component.image}
        alt={component.name}
        className="w-full h-32 object-contain mb-4"
      />
      <h3 className="font-medium text-sm mb-2 text-gray-800 dark:text-gray-200">{component.name}</h3>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-lg text-gray-900 dark:text-gray-100">{formatPrice(component.price)}</span>
        <ButtonCustom variant="ghost" size="sm" onClick={() => onSelect(component)}>
          <Plus className="w-4 h-4" />
        </ButtonCustom>
      </div>
    </div>
  );
};

export default ComponentCard;
