import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-[#1B4332]" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p>info@brijwasifoundation.org</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-[#1B4332]" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p>+91 XXX XXX XXXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-[#1B4332]" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full p-2 border rounded h-32"></textarea>
            </div>
            <button className="w-full bg-[#1B4332] text-white py-2 rounded hover:bg-opacity-90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}