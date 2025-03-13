import { Calendar, Clock, MapPin, Heart, Users, BookOpen } from 'lucide-react';

export function Volunteer() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-8">Join us in making a difference</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif mb-6">Volunteer Opportunities</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="text-red-500" />
                <h3 className="text-xl font-serif">Food Distribution</h3>
              </div>
              <p className="text-gray-600">Help us distribute food and essential supplies to communities in need.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="text-blue-500" />
                <h3 className="text-xl font-serif">Education Support</h3>
              </div>
              <p className="text-gray-600">Contribute to our educational programs and help children learn.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="text-green-500" />
                <h3 className="text-xl font-serif">Community Outreach</h3>
              </div>
              <p className="text-gray-600">Engage with communities and help assess their needs.</p>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="text-[#1B4332]" />
              <span>Flexible scheduling available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-[#1B4332]" />
              <span>Choose your time commitment</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-[#1B4332]" />
              <span>Multiple locations across Mumbai</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif mb-6">Volunteer Registration</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" className="w-full p-2 border rounded" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Areas of Interest</label>
              <select className="w-full p-2 border rounded">
                <option value="">Select an area</option>
                <option>Food Distribution</option>
                <option>Education Support</option>
                <option>Community Outreach</option>
                <option>Administrative Support</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Availability</label>
              <select className="w-full p-2 border rounded">
                <option value="">Select availability</option>
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Both</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                className="w-full p-2 border rounded h-32" 
                placeholder="Tell us about yourself and why you'd like to volunteer"
              ></textarea>
            </div>
            <button className="w-full bg-[#1B4332] text-white py-3 rounded hover:bg-opacity-90 transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}