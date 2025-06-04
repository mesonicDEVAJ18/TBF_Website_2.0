import React from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Donate } from './pages/Donate';
import { Volunteer } from './pages/Volunteer';
import { Album } from './pages/Album';
import { Contact } from './pages/Contact';
import { Credits } from './pages/Credits';
import { Helmet } from 'react-helmet-async';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
      // Update page title based on current page
      const titles: { [key: string]: string } = {
        home: 'Home',
        about: 'About Us',
        donate: 'Donate',
        volunteer: 'Volunteer',
        album: 'Photo Album',
        contact: 'Contact Us',
        credits: 'Credits'
      };
      document.title = `${titles[hash]} - The Brijwasi Foundation`;
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'donate':
        return <Donate />;
      case 'volunteer':
        return <Volunteer />;
      case 'album':
        return <Album />;
      case 'contact':
        return <Contact />;
      case 'credits':
        return <Credits />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      <Helmet>
        <meta name="description" content={getMetaDescription(currentPage)} />
        <meta name="keywords" content={getMetaKeywords(currentPage)} />
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </Helmet>
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  );
}

function getMetaDescription(page: string): string {
  const descriptions: { [key: string]: string } = {
    home: "The Brijwasi Foundation is dedicated to making lives better through acts of kindness. Join us in our mission to create positive change.",
    about: "Learn about The Brijwasi Foundation's Impact, mission, vision, and impact in creating positive change through sustainable community development with the goal of meeting SG 2:Zero Hunger.",
    donate: "Support our cause by donating to The Brijwasi Foundation through Volunteering, in kind and monetarily. Your contribution helps us serve communities in need.",
    volunteer: "Join The Brijwasi Foundation as a volunteer. Make a difference in your community through various programs and initiatives. Flexible scheduling and multiple locations",
    album: "View our photo gallery showcasing The Brijwasi Foundation's impact and community engagement activities.",
    contact: "Get in touch with The Brijwasi Foundation. We're here to answer your questions and discuss collaboration opportunities.",
    credits: "Meet the team behind The Brijwasi Foundation and learn about our partners and supporters."
  };
  return descriptions[page] || descriptions.home;
}

function getMetaKeywords(page: string): string {
  const keywords: { [key: string]: string } = {
    home: "NGO, charity, community service, social impact, health, Delhi, Mumbai",
    about: "mission, vision, impact, community development, foundation history, SDG2, Zero Hunger",
    donate: "donations, support, charity, giving, fundraising, Milaap, Volunteer",
    volunteer: "volunteering, community service, social work, help, flexible, multiple",
    album: "photo gallery, impact, community work, events, activities",
    contact: "contact information, get in touch, location, email, instagram, linktree, linkedin, phone numbers",
    credits: "team, partners, supporters, acknowledgments, thank you, glad"
  };
  return `The Brijwasi Foundation, ${keywords[page] || keywords.home}`;
}

export default App;