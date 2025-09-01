import { UpdateCard } from '../components/UpdateCard';

export function Home() {
  const updates = [
    {
      title: "22nd may drives",
      content: "On 22nd May 2025, we organized food drives at Greater Noida West and Indirapuram, where our team distributed over 200 meals and beverages. These drives were a small step toward spreading care and ensuring that no one is left unheard or unfed."
    },
    {
      title: "Actually Recruiting",
      content: "Obsessed with Instagram? Got a soft spot for social good?Then you’ll feel right at home on our Graphics Team. From capturing smiles during food drives to turning everyday moments with our kids into meaningful reels, you'll help bring our mission to life one post at a time.You’ll get hands-on with our work towards SDG 2 – Zero Hunger, grow your content game, and yes- your creations (and maybe even your face 👀) will show up on our social media platforms with 750+ followers.Come for the cause, stay for the creativity 💛Apply NOW!"
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
          src="/images/2024/3_2024.webp" 
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
                 At The Brijwasi Foundation, we believe that meaningful change starts with small, consistent actions. Our team works passionately to lead initiatives that uplift underserved communities and bring us closer to our mission of Zero Hunger.
                 We are truly proud of the initiatives taken so far:
              </p>
              <ul className="space-y-4 text-lg">
                <li>• Food Distribution Programs</li>
                <li>• Education Support</li>
                <li>• Community Development</li>
              </ul>
            </div>
            <img 
              src="/images/2024/2_2024.webp" 
              alt="Team at work"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}