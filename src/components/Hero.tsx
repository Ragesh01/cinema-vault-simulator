
import { ButtonCustom } from './ui/button-custom';
import { Computer } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#1A1F2C] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
            Build Your Dream PC with AI Assistance
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Get personalized recommendations and real-time help from our AI assistant
            to build the perfect PC for your needs.
          </p>
          <div className="flex gap-4">
            <ButtonCustom size="lg">
              Start Building
            </ButtonCustom>
            <ButtonCustom variant="outline" size="lg">
              View Guides
            </ButtonCustom>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/10 to-transparent -z-10" />
    </div>
  );
};

export default Hero;
