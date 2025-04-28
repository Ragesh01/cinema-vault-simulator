
import { useState, useEffect } from 'react';
import { Search, ArrowLeft, Moon, Sun, X } from 'lucide-react';
import ComponentSection from './ComponentSection';
import BuildSummary from './BuildSummary';
import { Switch } from './ui/switch';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ButtonCustom } from './ui/button-custom';
import { useIsMobile } from '@/hooks/use-mobile';

type Component = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type SelectedComponents = {
  [key: string]: Component;
};

const PCBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponents>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  useEffect(() => {
    // Apply or remove dark mode class based on state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  const categories = [
    { id: 'cpu', name: 'CPU' },
    { id: 'ram', name: 'RAM' },
    { id: 'storage', name: 'Storage' },
    { id: 'motherboard', name: 'Motherboard' },
    { id: 'cooler', name: 'Cooler' },
    { id: 'cabinet', name: 'Cabinet' },
  ];

  const handleComponentSelect = (categoryId: string, component: Component | undefined) => {
    setSelectedComponents(prev => {
      const newComponents = { ...prev };
      if (component) {
        newComponents[categoryId] = component;
      } else {
        delete newComponents[categoryId];
      }
      return newComponents;
    });
  };

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((total, component) => total + component.price, 0);
  };

  const summaryContent = (
    <BuildSummary 
      selectedComponents={Object.entries(selectedComponents).map(([category, component]) => ({
        category,
        ...component
      }))}
      total={calculateTotal()}
    />
  );

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-primary transition-colors dark:text-gray-400">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200">Custom Build / My Reg Name</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-yellow-500" />
            <Switch 
              checked={isDarkMode} 
              onCheckedChange={setIsDarkMode} 
              className="data-[state=checked]:bg-[#7C3AED]"
            />
            <Moon className="w-4 h-4 text-gray-500 dark:text-gray-400" />

            {isMobile && (
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <ButtonCustom variant="outline" size="sm" className="ml-4">
                    Summary
                  </ButtonCustom>
                </SheetTrigger>
                <SheetContent className="w-[85vw] sm:max-w-md p-0">
                  {summaryContent}
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 w-full overflow-x-hidden">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search components"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            
            <div className="space-y-8">
              {categories.map(category => (
                <ComponentSection 
                  key={category.id}
                  title={category.name}
                  onSelect={(component) => handleComponentSelect(category.id, component)}
                />
              ))}
            </div>
          </div>
          
          {!isMobile && (
            <div className="hidden lg:block">
              {summaryContent}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PCBuilder;
