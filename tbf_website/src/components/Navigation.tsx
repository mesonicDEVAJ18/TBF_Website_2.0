import React, { useState } from 'react';
import { Home, Heart, HandHelping, Image, Mail, Users, Info, Menu, X } from 'lucide-react';
import Logo from './Logo';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1B4332] p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Logo />
            <span className="text-white text-xl md:text-2xl font-serif">THE BRIJWASI FOUNDATION</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/" icon={<Home size={18} />} text="Home" />
            <NavLink href="/about" icon={<Info size={18} />} text="About" />
            <NavLink href="/donate" icon={<Heart size={18} />} text="Donate" />
            <NavLink href="/volunteer" icon={<HandHelping size={18} />} text="Volunteer" />
            <NavLink href="/album" icon={<Image size={18} />} text="Album" />
            <NavLink href="/contact" icon={<Mail size={18} />} text="Contact" />
            <NavLink href="/credits" icon={<Users size={18} />} text="Credits" />
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-3 bg-[#1B4332] rounded-lg p-4">
            <MobileNavLink href="/" icon={<Home size={18} />} text="Home" onClick={toggleMenu} />
            <MobileNavLink href="/about" icon={<Info size={18} />} text="About" onClick={toggleMenu} />
            <MobileNavLink href="/donate" icon={<Heart size={18} />} text="Donate" onClick={toggleMenu} />
            <MobileNavLink href="/volunteer" icon={<HandHelping size={18} />} text="Volunteer" onClick={toggleMenu} />
            <MobileNavLink href="/album" icon={<Image size={18} />} text="Album" onClick={toggleMenu} />
            <MobileNavLink href="/contact" icon={<Mail size={18} />} text="Contact" onClick={toggleMenu} />
            <MobileNavLink href="/credits" icon={<Users size={18} />} text="Credits" onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, text }: { href: string; icon?: React.ReactNode; text: string }) {
  return (
    <a 
      href={href} 
      className="text-white flex items-center space-x-1 hover:text-gray-200 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function MobileNavLink({ 
  href, 
  icon, 
  text, 
  onClick 
}: { 
  href: string; 
  icon?: React.ReactNode; 
  text: string;
  onClick: () => void;
}) {
  return (
    <a 
      href={href} 
      className="text-white flex items-center space-x-2 hover:bg-[#2D5A45] p-2 rounded-lg transition-colors"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}