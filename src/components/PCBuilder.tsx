
import { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import ComponentSection from './ComponentSection';
import BuildSummary from './BuildSummary';

const PCBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const categories = [
    { id: 'cpu', name: 'CPU' },
    { id: 'ram', name: 'RAM' },
    { id: 'storage', name: 'Storage' },
    { id: 'motherboard', name: 'Motherboard' },
    { id: 'cooler', name: 'Cooler' },
    { id: 'cabinet', name: 'Cabinet' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button className="text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-medium text-gray-800">Custom Build / My Reg Name</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search and select your rig Component"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800"
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
      </main>
    </div>
  );
};

export default PCBuilder;
