
import { useState } from 'react';
import { Search, Plus, X, Save } from 'lucide-react';
import { ButtonCustom } from './ui/button-custom';
import ComponentSection from './ComponentSection';
import BuildSummary from './BuildSummary';

const PCBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    { id: 'cpu', name: 'CPU' },
    { id: 'ram', name: 'RAM' },
    { id: 'storage', name: 'Storage' },
    { id: 'motherboard', name: 'Motherboard' },
    { id: 'cooler', name: 'Cooler' },
    { id: 'cabinet', name: 'Cabinet' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search and select your rig Component"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 bg-white"
          />
        </div>
        
        <div className="space-y-8">
          {categories.map(category => (
            <ComponentSection 
              key={category.id}
              title={category.name}
              onSelect={() => setSelectedCategory(category.id)}
            />
          ))}
        </div>
      </div>
      
      <BuildSummary />
    </div>
  );
};

export default PCBuilder;
