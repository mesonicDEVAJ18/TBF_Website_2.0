import { Heart, CreditCard, Wallet, Globe } from 'lucide-react';

export function Donate() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-8">Donate, Volunteer & Bring a Change</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif mb-6">Donate Through Milaap</h2>
          <p className="text-lg mb-6">
            Support our cause by making a donation to help those in need. Your contribution 
            will directly impact families and communities we serve.
          </p>
          <button className="w-full bg-[#1B4332] text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Donate Now
          </button>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif mb-6">Why Your Support Matters</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Heart className="text-red-500" />
              <span>Provide meals to families</span>
            </li>
            <li className="flex items-center space-x-3">
              <Globe className="text-blue-500" />
              <span>Support community development</span>
            </li>
            <li className="flex items-center space-x-3">
              <CreditCard className="text-green-500" />
              <span>Fund educational programs</span>
            </li>
            <li className="flex items-center space-x-3">
              <Wallet className="text-purple-500" />
              <span>Enable healthcare initiatives</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-serif mb-6">Other Ways to Support</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Monthly Giving</h3>
            <p className="text-gray-600 mb-4">
              Become a monthly donor and help us plan long-term initiatives for sustainable impact.
            </p>
            <button className="bg-[#1B4332] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Join Monthly Giving
            </button>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Corporate Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Partner with us to create meaningful impact through CSR initiatives.
            </p>
            <button className="bg-[#1B4332] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}