import { Link } from 'react-router-dom';

export function Album() {
  const albums = [
    {
      id: 'food-distribution',
      src: "/distribution-image.jpg",
      title: "Food Distribution Drive",
      description: "Providing meals to families in need",
      date: "February 2024"
    },
    {
      id: 'team-activity',
      src: "/team-image.jpg",
      title: "Team Activity",
      description: "Our volunteers working together",
      date: "January 2024"
    },
    {
      id: 'community-outreach',
      src: "/distribution-image.jpg",
      title: "Community Outreach",
      description: "Engaging with local communities",
      date: "December 2023"
    },
    {
      id: 'education-initiative',
      src: "/team-image.jpg",
      title: "Education Initiative",
      description: "Supporting children's education",
      date: "November 2023"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-8">Our Impact in Pictures</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          <Link key={album.id} to={`/album/${album.id}`} className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition">
              <img 
                src={album.src} 
                alt={album.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif mb-2">{album.title}</h3>
                <p className="text-gray-600 mb-2">{album.description}</p>
                <p className="text-sm text-gray-500">{album.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}