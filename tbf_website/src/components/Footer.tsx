import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'lucide-react'; // You can keep this if you want your existing Link icon

export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif mb-4">Contact Us</h3>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img
              src="/images/gmail.png"
              alt="Gmail"
              style={{ width: 18, height: 'auto', display: 'inline-block', verticalAlign: 'middle' }}
            />
            <span className="text-sm md:text-base">the.brijwasi.foundation@gmail.com</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-serif mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <SocialIcon
              icon={<FaInstagram size={24} color="#E4405F" />}
              link="https://www.instagram.com/the.brijwasi.foundation/"
            />
            <SocialIcon
              icon={<Link size={24} color="#fff" />} // You can customize this color
              link="https://linktr.ee/The.Brijwasi.Foundation?fbclid=PAZXh0bgNhZW0CMTEAAabKKK2bgymH0L6j942m4l3KEiOUm6MBJEzjbWsCQIVVYbZ7WVYYTb_0y2E_aem_jxweI1ymmm2w8kPbce9aRQ"
            />
            <SocialIcon
              icon={<FaLinkedin size={24} color="#0077B5" />} 
              link="https://www.linkedin.com/company/the-brijwasi-foundation/posts/?feedView=all"
            />
            <SocialIcon
              icon={<img
                  src="/images/gmail.png"
                  alt="Gmail"
                  style={{ width: 24, height: 'auto', display: 'inline-block', verticalAlign: 'middle' }}
                />}
              link="mailto:the.brijwasi.foundation@gmail.com"
            />
          </div>
        </div>
        <div className="text-center md:text-right flex flex-col md:items-end relative">
          <h3 className="text-xl font-serif mb-4 md:pr-6">Support Us</h3>
          <a
            href="https://milaap.org/fundraisers/support-underprivileged-people-and-animals"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1B4332] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-200 text-center"
          >
            Donate Now
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, link }: { icon: React.ReactNode; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-200 transition-colors transform hover:scale-110 duration-200"
    >
      {icon}
    </a>
  );
}
