
import { ButtonCustom } from './ui/button-custom';
import { Menu, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">PC Builder</h1>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-primary transition">Home</a>
              <a href="/specs" className="text-gray-600 hover:text-primary transition">Specs</a>
              <a href="/build" className="text-gray-600 hover:text-primary transition">Build</a>
              <a href="/feeds" className="text-gray-600 hover:text-primary transition">Feeds</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ButtonCustom variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </ButtonCustom>
            <ButtonCustom variant="ghost">
              <User className="w-5 h-5" />
            </ButtonCustom>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
