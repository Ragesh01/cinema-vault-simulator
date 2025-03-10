
import { Card } from './ui/card';
import { Cpu, HardDrive, Monitor } from 'lucide-react';

const PCBuilder = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Popular Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComponentCard
          icon={<Cpu className="w-8 h-8" />}
          title="Processors"
          description="Latest generation CPUs from top manufacturers"
        />
        <ComponentCard
          icon={<HardDrive className="w-8 h-8" />}
          title="Storage"
          description="SSDs and HDDs for all your storage needs"
        />
        <ComponentCard
          icon={<Monitor className="w-8 h-8" />}
          title="Monitors"
          description="High refresh rate displays for gaming"
        />
      </div>
    </div>
  );
};

const ComponentCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card className="p-6 bg-[#2F2F2F] border-[#403E43] hover:border-[#9b87f5] transition-colors">
      <div className="flex items-start space-x-4">
        <div className="text-[#9b87f5]">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default PCBuilder;
