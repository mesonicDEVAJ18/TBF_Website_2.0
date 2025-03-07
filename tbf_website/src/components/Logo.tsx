import React from 'react';
import { Leaf } from 'lucide-react';

export default function Logo() {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
      <Leaf className="text-[#1B4332] w-6 h-6 md:w-8 md:h-8" />
    </div>
  );
}