import { Award, Users, Heart, Handshake } from 'lucide-react';
import prishasingh from '../assets/credits/prishasingh.jpg';
import anshjagota from '../assets/credits/anshjagota.jpg';
import pavanimittal from '../assets/credits/pavanimittal.jpg';
import nityasingh from '../assets/credits/nityasingh.jpg';
import sashamishra from '../assets/credits/sashamishra.jpg';
import dakshthakur from '../assets/credits/dakshthakur.jpg';
import jayeshbanerjee from '../assets/credits/jayeshbanerjee.jpg';
import mishasarin from '../assets/credits/mishasarin.jpg';
import anshikasharma from '../assets/credits/anshikasharma.jpg';
import paridhidewan from '../assets/credits/paridhidewan.jpg';
import tiyasharma from '../assets/credits/tiyasharma.jpg';
import angelinamehra from '../assets/credits/angelinamehra.jpg';
import ayeshasingh from '../assets/credits/ayeshasingh.jpg';
import devajrathore from '../assets/credits/devajrathore.jpg';
import jhanakgoel from '../assets/credits/jhanakgoel.jpg';
import aadyaupadhya from '../assets/credits/aadyaupadhaya.jpg';
import shreya from '../assets/credits/shreya.jpg';
import siyachahal from '../assets/credits/siyachahal.jpg';
import palakgarg from '../assets/credits/palakgarg.jpg';
import advikyadav from '../assets/credits/advikyadav.jpg';
import gauranshkhurana from '../assets/credits/gauranshkhurana.jpg';
import kashvisingh from '../assets/credits/kashvisingh.jpg';
import vishwanisethia from '../assets/credits/vishwanisethia.jpg';
import rijulagarwal from '../assets/credits/rijulaggarwal.jpg';
//import midhunarajagopalar from '../assets/credits/midhunarajagopalar.jpg';
//import abeergupta from '../assets/credits/abeergupta.jpg';
//import abhilekhbakshi from '../assets/credits/abhilekhbakshi.jpg';
//import hanshika from '../assets/credits/hanshika.jpg';
//import asmisingh from '../assets/credits/asmisingh.jpg';
//import yashpratapsingh from '../assets/credits/yashpratapsingh.jpg';
//import adrikajain from '../assets/credits/adrikajain.jpg';
//import prachikalra from '../assets/credits/prachikalra.jpg';
//import lekishapatel from '../assets/credits/lekishapatel.jpg';
//import mishikaoberoi from '../assets/credits/mishikaoberoi.jpg';
//import nishkamatkar from '../assets/credits/nishkamatkar.jpg';
//import kartavyataneja from '../assets/credits/kartavyataneja.jpg';
//import rohansingh from '../assets/credits/rohansingh.jpg';

export function Credits() {
  const categories = {
    Founder: [
      { name: "Prisha Singh", role: "Founder & President", image: prishasingh },
    ],
    Advisory:[
      { name: "Ansh Jagota", role: "Chief Advisor", image: anshjagota }
    ],
    "Web Ops": [
      { name: "Devaj Rathore", role: "Web Ops Director & Content Management", image: devajrathore },
      { name: "Rohan Singh", role: " Web Developer", image: "" },
      { name: "Rijul Agarwal", role: "Web Developer", image: rijulagarwal },
    ],
    Logistics: [
      { name: "Pavani Mittal", role: "Director of Logistics", image: pavanimittal },
      { name: "Anshika Sharma", role: "Event Logistics", image: anshikasharma },
      { name: "Paridhi Dewan", role: "Event Logistics", image: paridhidewan },
      { name: "Tiya Sharma", role: "Event Logistics", image: tiyasharma },
      { name: "Angelina Mehra", role: "Event Logistics", image: angelinamehra },
      { name: "Jhanak Goel", role: "Event Logistics & Social Engagement", image: jhanakgoel },
      { name: "Ayesha Singh", role: "Event Logistics", image: ayeshasingh },
      { name: "Devaj Rathore", role: "Web Operations & Content Management", image: devajrathore }
    ],
    "Digital Engagement Lead":[
      { name: "Advik Yadav", role: "Social Engagement", image: advikyadav },
      { name: "Jhanak Goel", role: "Event Logistics & Social Engagement", image: jhanakgoel },
      { name: "Sasha Mishra", role: "Visual Design & Social Engagement", image: sashamishra },
      { name: "Gauransh Khurana", role: "Visual Design & Social Engagement", image: gauranshkhurana },
      { name: "Shreya", role: "Content & Social Engagement", image: shreya },
      { name: "Siya Chahal", role: "Content & Social Engagement", image: siyachahal },
      { name: "Palak Garg", role: "Content, Public Relations & Outreach", image: palakgarg }
    ],
    Graphics: [
      { name: "Sasha Mishra", designation: "Graphics, Social Media", role: "Visual Design & Social Engagement", image: sashamishra },
      { name: "Daksh Thakur", role: "Visual Design", image: dakshthakur },
      { name: "Jayesh Banerjee", role: "Visual Design", image: jayeshbanerjee },
      { name: "Gauransh Khurana", role: "Visual Design & Social Engagement", image: gauranshkhurana },
      { name: "Kashvi Singh", role: "Visual Design", image: kashvisingh },
      { name: "Misha Sarin", role: "Visual Design & Public Relations", image: mishasarin },
      { name: "Vishwani Sethia", role: "Visual Design", image: vishwanisethia },
    ],
    Content: [
      { name: "Aadya Upadhyaya", role: "Content Creation", image: aadyaupadhya },
      { name: "Devaj Rathore", role: "Web Operations & Content Management", image: devajrathore },
      { name: "Shreya", role: "Content & Social Engagement", image: shreya },
      { name: "Siya Chahal", role: "Content & Social Engagement", image: siyachahal },
      { name: "Midhuna Rajagopalar", role: "Content Creation", image: "" },
      { name: "Palak Garg", role: "Content, Public Relations & Outreach", image: palakgarg }
    ],
    "Creative Vision Lead": [
      { name: "Nitya Singh", role: "Creative Director", image: nityasingh }
    ],
    Volunteers:[
      { name: "Abeer Gupta", role: "Volunteer", image: "" },
      { name: "Abhilekh Bakshi", role: "Volunteer", image: "" },
      { name: "Hanshika", role: "Volunteer", image: "" },
      { name: "Asmi Singh", role: "Volunteer", image: "" },
      { name: "Yash Pratap Singh", role: "Volunteer", image: "" },
      { name: "Adrika Jain", role: "Volunteer", image: "" },
      { name: "Prachi Kalra", role: "Volunteer", image: "" },
      { name: "Lekisha Patel", role: "Volunteer", image: "" },
      { name: "Mishika Oberoi", role: "Volunteer", image: "" },
      { name: "Nishka Matkar", role: "Volunteer", image: "" },
      { name: "Kartavya Taneja", role: "Volunteer", image: "" } 
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
