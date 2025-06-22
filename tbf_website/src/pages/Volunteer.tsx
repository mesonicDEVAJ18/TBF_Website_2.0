import { Calendar, Clock, MapPin, Heart, Users, BookOpen } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Volunteer() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendVolunteerForm = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_meq3eph',       // your service ID
        'template_gov01yk',        // your template ID
        formRef.current!,
        'q_02bZITAYRc1wLmH'      // your public key
      )
      .then(
        () => {
          alert('Application submitted!');
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          alert('Failed to submit application.');
          setLoading(false);
        }
      );
  };
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
              <span>Multiple locations across Delhi-NCR and Mumbai</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif mb-6">Volunteer Registration</h2>
          <form ref={formRef} onSubmit={sendVolunteerForm} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input name="full_name" type="text" className="w-full p-2 border rounded" placeholder="Enter your name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" className="w-full p-2 border rounded" placeholder="Enter your email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input name="phone" type="tel" className="w-full p-2 border rounded" placeholder="Enter your phone number" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Areas of Interest</label>
              <select name="interest" className="w-full p-2 border rounded" required>
                <option value="">Select an area</option>
                <option>Food Distribution</option>
                <option>Education Support</option>
                <option>Community Outreach</option>
                <option>Administrative Support</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Availability</label>
              <select name="availability" className="w-full p-2 border rounded" required>
                <option value="">Select availability</option>
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Both</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                className="w-full p-2 border rounded h-32"
                placeholder="Tell us about yourself and why you'd like to volunteer"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1B4332] text-white py-3 rounded hover:bg-opacity-90 transition-colors disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}