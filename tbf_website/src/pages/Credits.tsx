import { Award, Users, Heart, Handshake } from 'lucide-react';
const prishasingh = "/images/credits/prishasingh.jpg";
const anshjagota = "/images/credits/anshjagota.jpg";
const pavanimittal = "/images/credits/pavanimittal.jpg";
const nityasingh = "/images/credits/nityasingh.jpg";
const dakshthakur = "/images/credits/dakshthakur.jpg";
const jayeshbanerjee = "/images/credits/jayeshbanerjee.jpg";
const mishasarin = "/images/credits/mishasarin.jpg";
const anshikasharma = "/images/credits/anshikasharma.jpg";
const paridhidewan = "/images/credits/paridhidewan.jpg";
const tiyasharma = "/images/credits/tiyasharma.jpg";
const angelinamehra = "/images/credits/angelinamehra.jpg";
const ayeshasingh = "/images/credits/ayeshasingh.jpg";
const devajrathore = "/images/credits/devajrathore.jpg";
const jhanakgoel = "/images/credits/jhanakgoel.jpg";
const aadyaupadhya = "/images/credits/aadyaupadhaya.jpg";
const shreya = "/images/credits/shreya.jpg";
const siyachahal = "/images/credits/siyachahal.jpg";
const palakgarg = "/images/credits/palakgarg.jpg";
const advikyadav = "/images/credits/advikyadav.jpg";
const gauranshkhurana = "/images/credits/gauranshkhurana.jpg";
const kashvisingh = "/images/credits/kashvisingh.jpg";
const vishwanisethia = "/images/credits/vishwanisethia.jpg";
const rijulagarwal = "/images/credits/rijulaggarwal.jpg";
const midhunarajagopalar = "/images/credits/midhunarajagopalan.jpg";
const adrikajain = "/images/credits/adrikajain.jpg";
const prachikalra = "/images/credits/prachi.jpg";
const mishikaoberoi = "/images/credits/mishikaoberoi.jpg";
const nishkamatkar = "/images/credits/nishkamatkar.jpg";
const kartavyataneja = "/images/credits/kartavyataneja.jpg";
const rohansingh = "/images/credits/rohansingh.jpg";
// const abhilekhbakshi = "/images/credits/abhilekhbakshi.jpg";
// const lekishapatel = "/images/credits/lekishapatel.jpg";

export function Credits() {
  const categories = {
    Founder: [
      { name: "Prisha Singh", role: "Founder & CEO", image: prishasingh },
    ],
    Leadership:[
      { name: "Ansh Jagota", role: "Chief Advisor", image: anshjagota },
      { name: "Devaj Rathore", role: "Web Ops Director", image: devajrathore },
      { name: "Tiya Sharma", role: "Logistics Manager", image: tiyasharma },
      { name: "Gauransh Khurana", role: "Graphics Manager", image: gauranshkhurana },
      { name: "Abhilekh Bakshi", role: "Social Media Manager", image: "" },
      { name: "Nitya Singh", role: "Creative Director", image: nityasingh }
    ],
    "Web Ops": [
      { name: "Devaj Rathore", role: "Web Ops Director", image: devajrathore },
      { name: "Rohan Singh", role: " Web Developer", image: rohansingh },
      { name: "Rijul Agarwal", role: "Web Developer", image: rijulagarwal }
    ],
    Logistics: [
      { name: "Tiya Sharma", role: "Logistics Manager", image: tiyasharma },
      { name: "Pavani Mittal", role: "Event Logistics", image: pavanimittal },
      { name: "Anshika Sharma", role: "Event Logistics", image: anshikasharma },
      { name: "Paridhi Dewan", role: "Event Logistics", image: paridhidewan },
      { name: "Angelina Mehra", role: "Event Logistics", image: angelinamehra },
      { name: "Jhanak Goel", role: "Event Logistics", image: jhanakgoel },
      { name: "Ayesha Singh", role: "Event Logistics", image: ayeshasingh },
      { name: "Devaj Rathore", role: "Event Logistics", image: devajrathore }
    ],
    Graphics: [
      { name: "Gauransh Khurana", role: "Graphics Manager", image: gauranshkhurana },
      { name: "Daksh Thakur", role: "Visual Design", image: dakshthakur },
      { name: "Jayesh Banerjee", role: "Visual Design", image: jayeshbanerjee },
      { name: "Kashvi Singh", role: "Visual Design", image: kashvisingh },
      { name: "Misha Sarin", role: "Visual Design & Public Relations", image: mishasarin },
      { name: "Vishwani Sethia", role: "Visual Design", image: vishwanisethia },
      { name: "Kartavya Taneja", role: "Visual Design", image: kartavyataneja }
    ],
    Content: [
      { name: "Devaj Rathore", role: "Content Creation", image: devajrathore },
      { name: "Aadya Upadhyaya", role: "Content Creation", image: aadyaupadhya },
      { name: "Shreya", role: "Content Creation", image: shreya },
      { name: "Siya Chahal", role: "Content Creation", image: siyachahal },
      { name: "Midhuna Rajagopalan", role: "Content Creation", image: midhunarajagopalar },
      { name: "Palak Garg", role: "Content Creation", image: palakgarg },
      { name: "Adrika Jain", role: "Content Creation", image: adrikajain },
      { name: "Lekisha Patel", role: "Content Creation", image: "" }
    ],
    "Social Media" :[
      { name: "Abhilekh Bakshi", role: "Digital Manager", image: "" },
      { name: "Prachi Kalra", role: "Social Engagement", image: prachikalra },
      { name: "Mishika Oberoi", role: "Social Engagement", image: mishikaoberoi },
      { name: "Nishka Matkar", role: "Social Engagement", image: nishkamatkar },
      { name: "Advik Yadav", role: "Social Engagement", image: advikyadav },
      { name: "Jhanak Goel", role: "Event Logistics & Social Engagement", image: jhanakgoel },
      { name: "Shreya", role: "Content & Social Engagement", image: shreya },
      { name: "Siya Chahal", role: "Content & Social Engagement", image: siyachahal },
      { name: "Palak Garg", role: "Content, Public Relations & Outreach", image: palakgarg }
    ],
    "PR and Outreach":[
      { name: "Misha Sarin", role: "Public Relations & Outreach", image: mishasarin },
      { name: "Palak Garg", role: "Public Relations & Outreach", image: palakgarg }
    ]
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">The People Who Help Us Make It Possible...</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The Brijwasi Foundation is proud to introduce our team and acknowledge their valuable contributions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#FAFAF9] p-8 rounded-xl shadow-lg border border-[#E7E5E4]">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="text-[#1B4332] w-8 h-8" />
            <h2 className="text-2xl font-serif">Our Founder</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Special thanks to Prisha Singh for founding The Brijwasi Foundation 
            and leading our mission to create positive change in society. Her vision
            and dedication continue to inspire our work every day.
          </p>
        </div>

        <div className="bg-[#FAFAF9] p-8 rounded-xl shadow-lg border border-[#E7E5E4]">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="text-[#1B4332] w-8 h-8" />
            <h2 className="text-2xl font-serif">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Together, we work towards creating a more equitable society through
            sustainable initiatives and community engagement. Every team member
            plays a crucial role in achieving our goals.
          </p>
        </div>
      </div>

      {Object.entries(categories).map(([category, members]) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl font-serif mb-6 text-[#1B4332] border-b pb-2">{category}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <div key={index} className="bg-[#FAFAF9] p-6 rounded-lg border border-[#E7E5E4] hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-4 border border-gray-300">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <Users className="w-10 h-10 text-[#1B4332]" />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-[#FAFAF9] rounded-xl shadow-lg p-8 border border-[#E7E5E4]">
        <div className="flex items-center space-x-3 mb-6">
          <Handshake className="text-[#1B4332] w-8 h-8" />
          <h2 className="text-2xl font-serif">Partners & Supporters</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-serif mb-3">Corporate Partners</h3>
            <p className="text-gray-700 leading-relaxed">
              We are grateful to our corporate partners who support our initiatives
              through CSR programs and sustainable partnerships.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-3">Community Supporters</h3>
            <p className="text-gray-700 leading-relaxed">
              Our heartfelt thanks to local communities and individual supporters
              who contribute their time and resources to our cause.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
