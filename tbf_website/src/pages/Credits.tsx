import { Award, Users, Heart, Handshake } from 'lucide-react';

export function Credits() {
  const coreTeam = [
    {
      name: "Prisha Singh",
      designation: "Founder & President",
      role: "Strategic Leadership",
      image: "/credits/prishasingh.JPG"
    },
    {
      name: "Rahul Kumar",
      designation: "Operations Director",
      role: "Program Management",
      image: "credits\rahulkumar.jpg"
    },
    {
      name: "Anita Desai",
      designation: "Community Lead",
      role: "Outreach Coordination",
      image: "credits\anitadesai.jpg"
    },
    {
      name: "Vikram Mehta",
      designation: "Volunteer Coordinator",
      role: "Team Management",
      image: "credits\vikrammehta.jpg"
    },
    {
      name: "Ansh Jagota",
      designation: "Chief Advisor",
      role: "Advisory",
      image: "credits\anshjagota.jpg"
    },
    {
      name: "Pavani Mittal",
      designation: "Director of Logistics",
      role: "Logistics Management",
      image: "credits\pavanimittal.jpg"
    },
    {
      name: "Nitya Singh",
      designation: "Creative Director",
      role: "Creative Leadership",
      image: "credits\nityasingh.jpg"
    },
    {
      name: "Sasha Mishra",
      designation: "Graphics, Social Media",
      role: "Visual Design & Social Engagement",
      image: "credits\sashamishra.jpg"
    },
    {
      name: "Daksh Thakur",
      designation: "Graphics",
      role: "Visual Design",
      image: "credits\dakshthakur.jpg"
    },
    {
      name: "Jayesh Banerjee",
      designation: "Graphics",
      role: "Visual Design",
      image: "credits\jayeshbanerjee.jpg"
    },
    {
      name: "Misha Sarin",
      designation: "Graphics, PR and Outreach",
      role: "Visual Design & Public Relations",
      image: "credits\mishasarin.jpg"
    },
    {
      name: "Anshika Sharma",
      designation: "Logistics",
      role: "Event Logistics",
      image: "credits\anshikasharma.jpg"
    },
    {
      name: "Paridhi Dewan",
      designation: "Logistics",
      role: "Event Logistics",
      image: "credits\paridhidewan.jpg"
    },
    {
      name: "Tiya Sharma",
      designation: "Logistics",
      role: "Event Logistics",
      image: "credits\tiyasharma.jpg"
    },
    {
      name: "Angelina Mehra",
      designation: "Logistics",
      role: "Event Logistics",
      image: "credits\angelinamehra.jpg"
    },
    {
      name: "Ayesha Singh",
      designation: "Logistics",
      role: "Event Logistics",
      image: "credits\ayeshasingh.jpg"
    },
    {
      name: "Devaj Rathore",
      designation: "Web Ops Manager, Logistics, Content",
      role: "Web Operations & Content Management",
      image: "credits\devajrathore.jpg"
    },
    {
      name: "Jhanak Goel",
      designation: "Logistics, Social Media",
      role: "Event Logistics & Social Engagement",
      image: "credits\jhanakgoel.jpg"
    },
    {
      name: "Aadya Upadhyaya",
      designation: "Content",
      role: "Content Creation",
      image: "credits\aadyaupadhyaya.jpg"
    },
    {
      name: "Midhuna Rajagopalar",
      designation: "Content",
      role: "Content Creation",
      image: "credits\midhunarajagopalar.jpg"
    },
    {
      name: "Shreya",
      designation: "Content, Social Media",
      role: "Content & Social Engagement",
      image: "credits\shreya.jpg"
    },
    {
      name: "Siya Chahal",
      designation: "Content, Social Media",
      role: "Content & Social Engagement",
      image: "credits\siyachahal.jpg"
    },
    {
      name: "Palak Garg",
      designation: "Content, Social Media, PR and Outreach",
      role: "Content, Public Relations & Outreach",
      image: "credits\palakgarg.jpg"
    },
    {
      name: "Advik Yadav",
      designation: "Social Media",
      role: "Social Engagement",
      image: "credits\advikyadav.jpg"
    },
    {
      name: "Gauransh Khurana",
      designation: "Graphics, Social Media",
      role: "Visual Design & Social Engagement",
      image: "credits\gauranshkhurana.jpg"
    },
    {
      name: "Kashvi Singh",
      designation: "Graphics",
      role: "Visual Design",
      image: "credits\kashvisingh.jpg"
    },
    {
      name: "Vishwani Sethia",
      designation: "Graphics",
      role: "Visual Design",
      image: "credits\vishwanisethia.jpg"
    },
    {
      name: "Abeer Gupta",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\abeergupta.jpg"
    },
    {
      name: "Abhilekh Bakshi",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\abhilekhbakshi.jpg"
    },
    {
      name: "Hanshika",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\hanshika.jpg"
    },
    {
      name: "Asmi Singh",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\asmisingh.jpg"
    },
    {
      name: "Yash Pratap Singh",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\yashpratapsingh.jpg"
    },
    {
      name: "Adrika Jain",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\adrikajain.jpg"
    },
    {
      name: "Prachi Kalra",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\prachikalra.jpg"
    },
    {
      name: "Lekisha Patel",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\lekishapatel.jpg"
    },
    {
      name: "Mishika Oberoi",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\mishikaoberoi.jpg"
    },
    {
      name: "Nishka Matkar",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\nishkamatkar.jpg"
    },
    {
      name: "Kartavya Taneja",
      designation: "Unspecified",
      role: "Unspecified",
      image: "credits\kartavyataneja.jpg"
    },
    {
      name: "Rohan Singh",
      designation: "Web Ops",
      role: "Unspecified",
      image: "credits\rohansingh.jpg"
    },
    {
      name: "Rijul Agarwal",
      designation: "Web Ops",
      role: "Unspecified",
      image: "credits\rijulagarwal.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F4]">
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

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="bg-[#1B4332] p-6">
            <div className="flex items-center space-x-3">
              <Users className="text-white w-8 h-8" />
              <h2 className="text-2xl font-serif text-white">Core Team</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            {coreTeam.map((member, index) => (
              <div 
                key={index} 
                className="bg-[#FAFAF9] p-6 rounded-lg border border-[#E7E5E4] hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-4 border border-gray-300">
                  {member.image ? (
                    <img src={member.image} className="w-full h-full object-cover" />
                  ) : (
                    <Users className="w-10 h-10 text-[#1B4332]" />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                  <p className="text-[#1B4332] font-medium mb-2">{member.designation}</p>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
    </div>
  );
}