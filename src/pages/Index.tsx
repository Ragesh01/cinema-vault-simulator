
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import PCBuilder from '@/components/PCBuilder';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button className="hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-medium">Custom Build / My Reg Name</h1>
        </div>
        <PCBuilder />
      </main>
    </div>
  );
};

export default Index;
