import { UpdateCard } from '../components/UpdateCard';

export function Home() {
  const updates = [
    {
      title: "TBF Mumbai",
      content: "Sample text test"
    },
    {
      title: "Graphic Applications",
      content: "Supporting communities through innovative solutions and sustainable development practices. Join us in our mission to create lasting change."
    },
    {
      title: "Recent Initiatives",
      content: "Our latest food distribution drive reached over 200 families in the Mumbai region. Together, we're making a difference one meal at a time."
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