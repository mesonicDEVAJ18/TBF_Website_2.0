import { Users, Heart, Globe, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <div className="bg-[#fdf8e4] min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-serif text-[#1e3d2f] mb-12">About TBF</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-serif text-green-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              At The Brijwasi Foundation, we believe that kindness can feed the world—literally.
              Founded in November 2023 by Prisha Singh, our youth-led NGO is dedicated to ending hunger in our communities,
              in line with SDG 2: Zero Hunger.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              From food distribution drives to providing essential resources like grains, clean water, and clothes,
              we’re here to ensure no one sleeps hungry. To date, we’ve helped over 1,500 people, spreading not just food—but hope.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-green-900 mb-4">About Our Founder</h2>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              Our Founder and President, Prisha Singh, began her journey in social service at the age of five, distributing blankets
              to those in need during the harsh Delhi winters. In November 2023, while in 11th grade, she officially launched
              The Brijwasi Foundation with a clear mission in mind: Zero Hunger.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              What began as a small team of just four members has since grown into a dedicated community.
              Yet, Prisha’s passion for helping people continues to drive her commitment in ensuring that no one goes to bed hungry.
            </p>
          </div>
        </div>

        {/* Impact Box */}
        <div className="bg-white rounded-2xl shadow-xl max-w-5xl mx-auto p-8">
          <h3 className="text-2xl font-serif text-green-900 mb-6">Our Impact</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-800 text-lg">
            <div className="flex items-center gap-3">
              <Users className="text-green-800" />
              1,500+ people helped
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-green-800" />
              20+ distribution drives
            </div>
            <div className="flex items-center gap-3">
              <Heart className="text-green-800" />
              100+ volunteers engaged
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-800" />
              5 communities served
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}