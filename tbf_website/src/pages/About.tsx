import { Users, Heart, Globe, ShieldCheck, Star, Award, Target, Leaf } from 'lucide-react';

export function About() {
  return (
    <div className="bg-[#fdf8e4] min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-green-900 to-green-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/15 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white/10 rounded-full"></div>
        </div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-3 mb-8 border border-white/20">
              <Leaf className="h-5 w-5 text-amber-300" />
              <span className="text-sm font-medium tracking-wide">Spreading Hope Since 2023</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight font-serif text-white">
              About <span className="text-amber-300 font-normal">TBF</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light opacity-90 leading-relaxed max-w-4xl mx-auto text-white/90">
              Transforming communities through compassion, one meal at a time
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fdf8e4] to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Mission & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl p-10 md:p-12 transform group-hover:scale-[1.02] transition-all duration-500 border border-green-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl shadow-lg">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-4xl font-light text-green-900 font-serif">Our Mission</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl font-light">
                  At <span className="font-medium text-green-800">The Brijwasi Foundation</span>, we believe that kindness can feed the world—literally.
                  Founded in November 2023 by Prisha Singh, our youth-led NGO is dedicated to ending hunger in our communities,
                  in line with <span className="font-medium text-amber-700">SDG 2: Zero Hunger</span>.
                </p>
                <p className="text-xl font-light">
                  From food distribution drives to providing essential resources like grains, clean water, and clothes,
                  we're here to ensure no one sleeps hungry. To date, we've helped over 1,500 people, spreading not just food—but hope.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-xl p-10 md:p-12 transform group-hover:scale-[1.02] transition-all duration-500 border border-amber-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-3xl shadow-lg">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-4xl font-light text-green-900 font-serif">About Our Founder</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl font-light">
                  Our Founder and President, <span className="font-medium text-amber-700">Prisha Singh</span>, began her journey in social service at the age of five, distributing blankets
                  to those in need during the harsh Delhi winters. In November 2023, while in 11th grade, she officially launched
                  The Brijwasi Foundation with a clear mission in mind: Zero Hunger.
                </p>
                <p className="text-xl font-light">
                  What began as a small team of just four members has since grown into a dedicated community.
                  Yet, Prisha's passion for helping people continues to drive her commitment in ensuring that no one goes to bed hungry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-green-800 via-emerald-800 to-green-900 rounded-[2.5rem] shadow-2xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
            <div className="relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-3 mb-6 border border-white/20">
                  <Award className="h-6 w-6 text-amber-300" />
                  <span className="text-sm font-medium tracking-wide">Making a Difference</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-light mb-6 font-serif">Our Impact</h3>
                <p className="text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Every number represents a life touched, a family helped, and hope restored
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl shadow-lg">
                      <Users className="h-10 w-10 text-gray-800" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-light mb-3">6000+</div>
                  <div className="text-lg opacity-90 font-light tracking-wide">meals served</div>
                </div>
                
                <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-light mb-3">20+</div>
                  <div className="text-lg opacity-90 font-light tracking-wide">distribution drives</div>
                </div>
                
                <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl shadow-lg">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-light mb-3">100+</div>
                  <div className="text-lg opacity-90 font-light tracking-wide">volunteers engaged</div>
                </div>
                
                <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl shadow-lg">
                      <ShieldCheck className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-light mb-3">7</div>
                  <div className="text-lg opacity-90 font-light tracking-wide">communities served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}