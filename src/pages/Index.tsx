
import Navbar from '@/components/Navbar';
import PCBuilder from '@/components/PCBuilder';

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden bg-white dark:bg-gray-900">
      <Navbar />
      <PCBuilder />
    </div>
  );
};

export default Index;
