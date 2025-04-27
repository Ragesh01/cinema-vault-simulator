
import { Plus } from 'lucide-react';

type PlaceholderCardProps = {
  selectedComponent?: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onClear?: () => void;
  variant?: 'empty' | 'find-more';
};

const PlaceholderCard = ({ selectedComponent, onClear, variant = 'empty' }: PlaceholderCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (selectedComponent) {
    return (
      <div className="flex flex-col min-w-[240px] sm:min-w-[200px] lg:min-w-[240px] h-[216px] p-4 border border-[#7C3AED] rounded-lg bg-white shadow-sm hover:shadow-md transition-all dark:bg-gray-800 dark:border-[#9b87f5] dark:text-white">
        <img
          src={selectedComponent.image}
          alt={selectedComponent.name}
          className="w-full h-24 sm:h-32 object-contain mb-4"
        />
        <h3 className="font-medium text-sm mb-2 text-gray-800 dark:text-gray-200">{selectedComponent.name}</h3>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-base sm:text-lg text-gray-900 dark:text-gray-100">
            {formatPrice(selectedComponent.price)}
          </span>
          <button 
            onClick={onClear} 
            className="text-gray-500 hover:text-red-500 transition-colors dark:text-gray-400"
          >
            <Plus className="w-4 h-4 rotate-45" />
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'find-more') {
    return (
      <div className="flex items-center justify-center min-w-[240px] sm:min-w-[200px] lg:min-w-[240px] h-[216px] p-4 border border-[#7C3AED] rounded-lg bg-white shadow-sm hover:shadow-md transition-all dark:bg-gray-800 dark:border-[#9b87f5]">
        <span className="flex items-center gap-2 text-[#7C3AED] dark:text-[#9b87f5] font-medium">
          <Plus className="w-5 h-5" />
          Find More
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-w-[240px] sm:min-w-[200px] lg:min-w-[240px] h-[216px] p-4 border-2 border-dashed border-[#7C3AED] rounded-lg bg-gray-50 hover:border-solid transition-all dark:bg-gray-800/50 dark:border-[#9b87f5]">
      <Plus className="w-12 h-12 text-[#7C3AED] dark:text-[#9b87f5]" />
    </div>
  );
};

export default PlaceholderCard;
