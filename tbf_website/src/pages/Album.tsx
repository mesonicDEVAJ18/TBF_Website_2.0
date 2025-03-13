export function Album() {
  const images = [
    {
      src: "/distribution-image.jpg",
      title: "Food Distribution Drive",
      description: "Providing meals to families in need",
      date: "February 2024"
    },
    {
      src: "/team-image.jpg",
      title: "Team Activity",
      description: "Our volunteers working together",
      date: "January 2024"
    },
    {
      src: "/distribution-image.jpg",
      title: "Community Outreach",
      description: "Engaging with local communities",
      date: "December 2023"
    },
    {
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
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={image.src} 
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-serif mb-2">{image.title}</h3>
              <p className="text-gray-600 mb-2">{image.description}</p>
              <p className="text-sm text-gray-500">{image.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}