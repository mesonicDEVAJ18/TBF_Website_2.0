import { Mail, Phone, MapPin, Hash, Link} from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

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
                <p>the.brijwasi.foundation@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-[#1B4332]" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p>+91 98912 91294</p>
                <p>+91 96677 54191</p>
                <p>+91 98112 82850</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-[#1B4332]" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p>New Delhi, India</p>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Hash className="text-[#1B4332]" />
              <div className="flex justify-center space-x-6">
                <SocialIcon
                  icon={<FaInstagram size={24} color="#E4405F" />}
                  link="https://www.instagram.com/the.brijwasi.foundation/"
                />
                <SocialIcon
                  icon={<Link size={24} color="#000" />} // You can customize this color
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