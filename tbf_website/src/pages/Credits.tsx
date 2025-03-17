import { Award, Users, Heart, Handshake } from 'lucide-react';
import prishasingh from '../assets/credits/prishasingh.jpg';
//import rahulkumar from '../assets/credits/rahulkumar.jpg';
//import anitadesai from '../assets/credits/anitadesai.jpg';
//import vikrammehta from '../assets/credits/vikrammehta.jpg';
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
//import midhunarajagopalar from '../assets/credits/midhunarajagopalar.jpg';
import shreya from '../assets/credits/shreya.jpg';
import siyachahal from '../assets/credits/siyachahal.jpg';
import palakgarg from '../assets/credits/palakgarg.jpg';
import advikyadav from '../assets/credits/advikyadav.jpg';
import gauranshkhurana from '../assets/credits/gauranshkhurana.jpg';
import kashvisingh from '../assets/credits/kashvisingh.jpg';
import vishwanisethia from '../assets/credits/vishwanisethia.jpg';
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
import rijulagarwal from '../assets/credits/rijulaggarwal.jpg';

export function Credits() {
  const coreTeam = [
    { name: "Prisha Singh", designation: "Founder & President", role: "Strategic Leadership", image: prishasingh },
    { name: "Rahul Kumar", designation: "Operations Director", role: "Program Management", image: "" },
    { name: "Anita Desai", designation: "Community Lead", role: "Outreach Coordination", image: "" },
    { name: "Vikram Mehta", designation: "Volunteer Coordinator", role: "Team Management", image: "" },
    { name: "Ansh Jagota", designation: "Chief Advisor", role: "Advisory", image: anshjagota },
    { name: "Pavani Mittal", designation: "Director of Logistics", role: "Logistics Management", image: pavanimittal },
    { name: "Nitya Singh", designation: "Creative Director", role: "Creative Leadership", image: nityasingh },
    { name: "Sasha Mishra", designation: "Graphics, Social Media", role: "Visual Design & Social Engagement", image: sashamishra },
    { name: "Daksh Thakur", designation: "Graphics", role: "Visual Design", image: dakshthakur },
    { name: "Jayesh Banerjee", designation: "Graphics", role: "Visual Design", image: jayeshbanerjee },
    { name: "Misha Sarin", designation: "Graphics, PR and Outreach", role: "Visual Design & Public Relations", image: mishasarin },
    { name: "Anshika Sharma", designation: "Logistics", role: "Event Logistics", image: anshikasharma },
    { name: "Paridhi Dewan", designation: "Logistics", role: "Event Logistics", image: paridhidewan },
    { name: "Tiya Sharma", designation: "Logistics", role: "Event Logistics", image: tiyasharma },
    { name: "Angelina Mehra", designation: "Logistics", role: "Event Logistics", image: angelinamehra },
    { name: "Ayesha Singh", designation: "Logistics", role: "Event Logistics", image: ayeshasingh },
    { name: "Devaj Rathore", designation: "Web Ops Manager, Logistics, Content", role: "Web Operations & Content Management", image: devajrathore },
    { name: "Jhanak Goel", designation: "Logistics, Social Media", role: "Event Logistics & Social Engagement", image: jhanakgoel },
    { name: "Aadya Upadhyaya", designation: "Content", role: "Content Creation", image: aadyaupadhya },
    { name: "Midhuna Rajagopalar", designation: "Content", role: "Content Creation", image: "" },
    { name: "Shreya", designation: "Content, Social Media", role: "Content & Social Engagement", image: shreya },
    { name: "Siya Chahal", designation: "Content, Social Media", role: "Content & Social Engagement", image: siyachahal },
    { name: "Palak Garg", designation: "Content, Social Media, PR and Outreach", role: "Content, Public Relations & Outreach", image: palakgarg },
    { name: "Advik Yadav", designation: "Social Media", role: "Social Engagement", image: advikyadav },
    { name: "Gauransh Khurana", designation: "Graphics, Social Media", role: "Visual Design & Social Engagement", image: gauranshkhurana },
    { name: "Kashvi Singh", designation: "Graphics", role: "Visual Design", image: kashvisingh },
    { name: "Vishwani Sethia", designation: "Graphics", role: "Visual Design", image: vishwanisethia },
    { name: "Abeer Gupta", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Abhilekh Bakshi", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Hanshika", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Asmi Singh", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Yash Pratap Singh", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Adrika Jain", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Prachi Kalra", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Lekisha Patel", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Mishika Oberoi", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Nishka Matkar", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Kartavya Taneja", designation: "Unspecified", role: "Unspecified", image: "" },
    { name: "Rohan Singh", designation: "Web Ops", role: "Unspecified", image: "" },
    { name: "Rijul Agarwal", designation: "Web Ops", role: "Unspecified", image: rijulagarwal }
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