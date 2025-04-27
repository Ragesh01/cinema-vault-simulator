
import { Plus } from 'lucide-react';

const PlaceholderCard = () => {
  return (
    <div className="flex flex-col min-w-[240px] p-4 border-2 border-dashed border-[#7C3AED] rounded-lg bg-white shadow-sm hover:border-primary hover:shadow-md transition-all">
      <div className="w-full h-32 mb-4 flex items-center justify-center">
        <Plus className="w-8 h-8 text-[#7C3AED]" />
      </div>
      <h3 className="font-medium text-sm mb-2 text-gray-800">Add Component</h3>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-gray-500">Click to select</span>
        <div className="text-[#7C3AED]">
          <Plus className="w-4 h-4" />
        </div>
      </div>
      <div className="absolute -top-8 left-0 right-0 text-xs text-gray-500 text-center">
        Click the + icon on a card to fill this slot with that component's image, name, and price.
      </div>
    </div>
  );
};

export default PlaceholderCard;

