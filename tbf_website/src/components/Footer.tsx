import React from 'react';
import { Mail, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif mb-4">Contact Us</h3>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Mail size={18} />
            <span className="text-sm md:text-base">info@brijwasifoundation.org</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-serif mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <SocialIcon icon={<Instagram size={24} />} />
            <SocialIcon icon={<Facebook size={24} />} />
            <SocialIcon icon={<Twitter size={24} />} />
            <SocialIcon icon={<Youtube size={24} />} />
          </div>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-xl font-serif mb-4">Support Us</h3>
          <button className="bg-white text-[#1B4332] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-200">
            Donate Now
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="hover:text-gray-200 transition-colors transform hover:scale-110 duration-200">
      {icon}
    </a>
  );
}