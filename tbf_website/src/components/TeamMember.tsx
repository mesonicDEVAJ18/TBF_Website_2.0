import React from 'react';
import { User } from 'lucide-react';

export function TeamMember() {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
        <User size={48} className="text-gray-400" />
      </div>
      <h3 className="text-xl font-medium">Name</h3>
      <p className="text-gray-600">Designation</p>
    </div>
  );
}