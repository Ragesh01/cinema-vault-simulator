
import { Plus, X } from 'lucide-react';

type PlaceholderCardProps = {
  selectedComponent?: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onClear?: () => void;
};

const PlaceholderCard = ({ selectedComponent, onClear }: PlaceholderCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (selectedComponent) {
    return (
      <div className="flex flex-col min-w-[240px] p-4 border border-[#7C3AED] rounded-lg bg-white shadow-sm hover:shadow-md transition-all dark:bg-gray-800 dark:border-[#9b87f5] dark:text-white">
        <img
          src={selectedComponent.image}
          alt={selectedComponent.name}
          className="w-full h-32 object-contain mb-4"
        />
        <h3 className="font-medium text-sm mb-2 text-gray-800 dark:text-gray-200">{selectedComponent.name}</h3>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-lg text-gray-900 dark:text-gray-100">{formatPrice(selectedComponent.price)}</span>
          <button onClick={onClear} className="text-gray-500 hover:text-red-500 transition-colors dark:text-gray-400">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-w-[240px] p-4 border-2 border-dashed border-[#7C3AED] rounded-lg bg-white shadow-sm hover:border-primary hover:shadow-md transition-all dark:bg-gray-800 dark:border-[#9b87f5] dark:text-gray-200">
      <div className="w-full h-32 mb-4 flex items-center justify-center">
        <Plus className="w-8 h-8 text-[#7C3AED] dark:text-[#9b87f5]" />
      </div>
      <h3 className="font-medium text-sm mb-2 text-gray-800 dark:text-gray-200">Add Component</h3>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-gray-500 dark:text-gray-400">Click to select</span>
        <div className="text-[#7C3AED] dark:text-[#9b87f5]">
          <Plus className="w-4 h-4" />
        </div>
      </div>
      <div className="absolute -top-8 left-0 right-0 text-xs text-gray-500 text-center dark:text-gray-400">
        Click the + icon on a card to fill this slot with that component's image, name, and price.
      </div>
    </div>
  );
};

export default PlaceholderCard;
