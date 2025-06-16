import { UpdateCard } from '../components/UpdateCard';

export function Home() {
  const updates = [
    {
      title: "TBF Mumbai",
      content: "The Brijwasi Foundation is based in five major cities, one of them being Mumbai. We conduct drives regularly to feed impoverished children and stray animals. Our latest food drive in this chapter provided food to over 200 families. We’re eradicating hunger in India, one meal, one family, one city at a time. "
    },
    {
      title: "Actually Recruiting",
      content: "We’re growing, and we need your help. Whether you're a student with a free weekend, a professional with skills to offer, or simply someone with the heart to serve — there’s a place for you at The Brijwasi Foundation."
    },
    {
      title: "Recent Initiatives",
      content: "Recently, we made a world record by serving over 1.14 lakh meals in under 8 hours, in collaboration with the Robin Hood Army. Last month, we ran a stall at the Millenium School, Noida, partnering with the Kitaab Club to raise funds and donate food. Another recent initiative was a 3 day drive, ‘Nadaaniyan’ in collaboration with Project Sukh, where we distributed over 300 meals. We also hosted a summer camp for the children living in the slums of Delhi, teaching them first aid, conducting a good & bad touch workshop and much more!"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] md:h-[80vh]">
        <img 
          src="/distribution-image.jpg" 
          alt="Foundation Distribution Drive"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-serif text-center px-4">
            Making Lives Better Through Acts of Kindness
          </h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif mb-4">UPDATES</h2>
          <p className="text-lg mb-8">Stay updated on our initiatives and news.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <UpdateCard 
                key={index}
                title={update.title}
                content={update.content}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grey-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif mb-8">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                Our team is committed to initiating drives as much as they can. We are truly proud of the initiatives taken so far:
              </p>
              <ul className="space-y-4 text-lg">
                <li>• Food Distribution Programs</li>
                <li>• Education Support</li>
                <li>• Healthcare Camps</li>
                <li>• Community Development</li>
              </ul>
            </div>
            <img 
              src="/team-image.jpg" 
              alt="Team at work"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}