import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Donate } from './pages/Donate';
import { Volunteer } from './pages/Volunteer';
import Album from './pages/Album';
import { Contact } from './pages/Contact';
import { Credits } from './pages/Credits';
import Collage from './pages/Collage'; // Dynamic collage page

function App() {
  const location = useLocation();
  const currentPath = location.pathname.replace('/', '') || 'home';

  const titles: { [key: string]: string } = {
    home: 'Home',
    about: 'About Us',
    donate: 'Donate',
    volunteer: 'Volunteer',
    album: 'Photo Album',
    contact: 'Contact Us',
    credits: 'Credits'

    
  };

  const descriptions: { [key: string]: string } = {
    home: "The Brijwasi Foundation is dedicated to making lives better through acts of kindness. Join us in our mission to create positive change.",
    about: "Learn about The Brijwasi Foundation's mission, vision, and impact in creating positive change through sustainable community development with the goal of meeting SDG 2: Zero Hunger.",
    donate: "Support our cause by donating to The Brijwasi Foundation through volunteering, in-kind, and monetary contributions. Your help reaches communities in need.",
    volunteer: "Join The Brijwasi Foundation as a volunteer. Make a difference in your community through flexible programs and initiatives across multiple locations.",
    album: "View our photo gallery showcasing The Brijwasi Foundation's impact and community engagement activities.",
    contact: "Get in touch with The Brijwasi Foundation. We're here to answer questions and explore collaboration opportunities.",
    credits: "Meet the team behind The Brijwasi Foundation and learn about our partners and supporters."
  };

  const keywords: { [key: string]: string } = {
    home: "NGO, charity, community service, social impact, health, Delhi, Mumbai",
    about: "mission, vision, impact, community development, foundation history, SDG2, Zero Hunger",
    donate: "donations, support, charity, giving, fundraising, Milaap, Volunteer",
    volunteer: "volunteering, community service, social work, help, flexible, multiple",
    album: "photo gallery, impact, community work, events, activities",
    contact: "contact information, get in touch, location, email, instagram, linktree, linkedin, phone numbers",
    credits: "team, partners, supporters, acknowledgments, thank you, glad"
  };

  const pageTitle = titles[currentPath] || 'Home';
  const metaDescription = descriptions[currentPath] || descriptions['home'];
  const metaKeywords = `The Brijwasi Foundation, ${keywords[currentPath] || keywords['home']}`;

  return (
    <div className="min-h-screen bg-yellow-50">
      <Helmet>
        <title>{`${pageTitle} - The Brijwasi Foundation`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </Helmet>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/album" element={<Album />} />
        <Route path="/album/:albumId" element={<Collage />} />
        <Route path="/collage/:photoId" element={<Collage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<h1 className="text-center mt-10 text-2xl">404 - Page Not Found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;