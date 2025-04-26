
import { X, Save } from 'lucide-react';
import { ButtonCustom } from './ui/button-custom';

const BuildSummary = () => {
  return (
    <div className="w-[400px] h-fit sticky top-24 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-medium mb-2 text-gray-800">My Reg Name</h2>
      <p className="text-gray-500 text-sm mb-6">Description any if you have type here</p>
      
      <div className="mb-6">
        <h3 className="font-medium mb-4 text-gray-800">Selected components</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">CPU</span>
            <span className="text-gray-900">AMD Ryzen 5 5600X</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">RAM</span>
            <span className="text-gray-900">Corsair 16GB DDR4</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6 py-4 border-t border-gray-200">
        <span className="font-medium text-gray-800">Total cost to build</span>
        <span className="text-xl font-bold text-gray-900">₹45,678</span>
      </div>
      
      <div className="flex gap-4">
        <ButtonCustom variant="outline" className="flex-1">
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
