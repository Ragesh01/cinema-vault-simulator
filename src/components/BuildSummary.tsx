
import { X, Save } from 'lucide-react';
import { ButtonCustom } from './ui/button-custom';

type ComponentWithCategory = {
  category: string;
  id: number;
  name: string;
  price: number;
  image: string;
};

type BuildSummaryProps = {
  selectedComponents: ComponentWithCategory[];
  total: number;
};

const BuildSummary = ({ selectedComponents, total }: BuildSummaryProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryName = (category: string) => {
    // Convert id to proper category name display
    const categories: { [key: string]: string } = {
      cpu: 'CPU',
      ram: 'RAM',
      storage: 'Storage',
      motherboard: 'Motherboard',
      cooler: 'Cooler',
      cabinet: 'Cabinet'
    };
    
    return categories[category] || category;
  };

  return (
    <div className="w-full lg:max-w-[380px] h-fit lg:sticky lg:top-24 p-4 sm:p-6 border border-gray-200 rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      <h2 className="text-lg sm:text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">My Reg Name</h2>
      <p className="text-sm mb-6 text-gray-500 dark:text-gray-400">Description any if you have type here</p>
      
      <div className="mb-6">
        <h3 className="font-medium mb-4 text-gray-800 dark:text-gray-200">Selected components</h3>
        <div className="space-y-4">
          {selectedComponents.length > 0 ? (
            selectedComponents.map(component => (
              <div key={component.category} className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">{getCategoryName(component.category)}</span>
                <span className="text-gray-900 dark:text-gray-200 text-right max-w-[60%] truncate">{component.name}</span>
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">No components selected yet</div>
          )}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <span className="font-medium text-gray-800 dark:text-gray-200">Total cost to build</span>
        <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{formatPrice(total)}</span>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <ButtonCustom variant="outline" className="flex-1 dark:bg-transparent dark:text-gray-200 dark:border-gray-600">
          <X className="w-4 h-4 mr-2" />
          Cancel
        </ButtonCustom>
        <ButtonCustom className="flex-1">
          <Save className="w-4 h-4 mr-2" />
          Save
        </ButtonCustom>
      </div>
    </div>
  );
};

export default BuildSummary;
