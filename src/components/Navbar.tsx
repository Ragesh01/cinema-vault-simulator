
import { ButtonCustom } from './ui/button-custom';
import { Menu, Ticket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1A1F2C]/80 backdrop-blur-sm border-b border-[#2F2F2F]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">
              CollageArt 2024
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-[#9b87f5] transition">About</a>
              <a href="#schedule" className="hover:text-[#9b87f5] transition">Schedule</a>
              <a href="#gallery" className="hover:text-[#9b87f5] transition">Gallery</a>
              <a href="#contact" className="hover:text-[#9b87f5] transition">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ButtonCustom variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </ButtonCustom>
            <ButtonCustom>
              <Ticket className="w-4 h-4 mr-2" />
              Register Now
            </ButtonCustom>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
