
import { ButtonCustom } from './ui/button-custom';
import { Calendar, GalleryHorizontal } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#1A1F2C] py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
            Join the Biggest Art Collage Event of the Year
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Connect with fellow artists, showcase your work, and participate in workshops.
            Three days of creativity, inspiration, and artistic collaboration.
          </p>
          <div className="flex gap-4">
            <ButtonCustom size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              View Schedule
            </ButtonCustom>
            <ButtonCustom variant="outline" size="lg">
              <GalleryHorizontal className="w-5 h-5 mr-2" />
              Past Events
            </ButtonCustom>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/10 to-transparent -z-10" />
    </div>
  );
};

export default Hero;
