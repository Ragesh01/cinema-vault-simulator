
import { Plus } from 'lucide-react';
import { ButtonCustom } from './ui/button-custom';

interface ComponentCardProps {
  component: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onSelect: () => void;
}

const ComponentCard = ({ component, onSelect }: ComponentCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex flex-col min-w-[240px] p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
      <img
        src={component.image}
        alt={component.name}
        className="w-full h-32 object-contain mb-4"
      />
      <h3 className="font-medium text-sm mb-2">{component.name}</h3>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-lg">{formatPrice(component.price)}</span>
        <ButtonCustom variant="ghost" size="sm" onClick={onSelect}>
          <Plus className="w-4 h-4" />
        </ButtonCustom>
      </div>
    </div>
  );
};

export default ComponentCard;
