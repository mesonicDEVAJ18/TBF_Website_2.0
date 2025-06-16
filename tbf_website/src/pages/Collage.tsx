import { useParams } from 'react-router-dom';

const albumImagesMap = {
  'food-distribution': [
    '/collage1.jpg',
    '/collage2.jpg',
    '/collage3.jpg',
  ],
  'team-activity': [
    '/team1.jpg',
    '/team2.jpg',
  ],
  'community-outreach': [
    '/outreach1.jpg',
    '/outreach2.jpg',
    '/outreach3.jpg',
    '/outreach4.jpg',
  ],
  'education-initiative': [
    '/education1.jpg',
    '/education2.jpg',
  ]
};

export function Collage() {
  const { albumId } = useParams<{ albumId: keyof typeof albumImagesMap }>();
  const images = albumId ? albumImagesMap[albumId] || [] : [];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-serif mb-8 capitalize">{(albumId ?? '').replace(/-/g, ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt={`Collage ${idx + 1}`} 
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}