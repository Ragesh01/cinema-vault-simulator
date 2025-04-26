
import { Plus } from 'lucide-react';

const PlaceholderCard = () => {
  return (
    <div className="relative min-w-[240px] h-full p-4 border-2 border-dashed border-[#7C3AED] rounded-lg bg-white shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center">
      <Plus className="w-8 h-8 text-[#7C3AED]" />
      <div className="absolute -top-8 left-0 right-0 text-sm text-gray-500 text-center">
        Click the + icon on a card to fill this slot with that component's image, name, and price.
      </div>
    </div>
  );
};

export default PlaceholderCard;
