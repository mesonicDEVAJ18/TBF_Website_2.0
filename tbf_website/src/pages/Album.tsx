"use client"
import { useNavigate } from "react-router-dom"

interface Photo {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

export default function Album() {
  const navigate = useNavigate()

  const photos: Photo[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Wedding ceremony",
      title: "The Perfect Day",
      description:
        "A beautiful outdoor wedding ceremony under the blooming cherry trees, where two hearts became one in the presence of family and friends.",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Birthday celebration",
      title: "Sweet Sixteen",
      description:
        "An unforgettable birthday celebration filled with laughter, cake, and the warmth of loved ones gathering to celebrate another year of life.",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=500&width=400",
      alt: "Graduation day",
      title: "Achievement Unlocked",
      description:
        "The culmination of years of hard work and dedication, captured in this moment of pure joy and accomplishment on graduation day.",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Family reunion",
      title: "Generations Together",
      description:
        "Three generations coming together for a rare family reunion, sharing stories, creating memories, and strengthening bonds that last forever.",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Beach vacation",
      title: "Ocean Memories",
      description:
        "Golden hour at the beach, where the waves whispered secrets and the sunset painted the sky in shades of dreams and wanderlust.",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=500",
      alt: "Concert night",
      title: "Music & Magic",
      description:
        "An electrifying night of live music where strangers became friends and melodies created memories that would echo in hearts forever.",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=450&width=400",
      alt: "Holiday dinner",
      title: "Feast of Love",
      description:
        "The annual holiday gathering where the table overflowed with delicious food and hearts overflowed with gratitude and togetherness.",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Adventure hiking",
      title: "Mountain High",
      description:
        "Conquering new heights together, where every step up the mountain brought us closer to the clouds and closer to each other.",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=500&width=500",
      alt: "Art exhibition",
      title: "Creative Souls",
      description:
        "An inspiring evening at the local art gallery, where creativity flowed like wine and conversations sparked new perspectives on life.",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Garden party",
      title: "Blooming Friendships",
      description:
        "A delightful afternoon garden party where flowers weren't the only things blooming - friendships flourished under the gentle spring sun.",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Sports victory",
      title: "Champions Rise",
      description:
        "The sweet taste of victory after months of training, where teamwork and determination culminated in this triumphant moment of glory.",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Cozy evening",
      title: "Simple Pleasures",
      description:
        "A quiet evening by the fireplace, where the simple pleasure of good company and warm conversation created the most precious memories.",
    },
  ]

  const handlePhotoClick = (photoId: number) => {
    navigate(`/collage/${photoId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-4">Our Initiatives</h1>
        <p className="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
          A collection of precious moments captured in time. Hover over each photo to discover the story, click to
          explore more.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              style={{ aspectRatio: "4/5" }}
              onClick={() => handlePhotoClick(photo.id)}
            >
              {/* Image */}
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-4">{photo.title}</h3>
                <p className="text-green-700 leading-relaxed text-sm md:text-base mb-4">{photo.description}</p>
                <div className="text-green-600 text-sm font-medium">Click to explore more →</div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-green-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-12 px-4 border-t border-green-200">
        <p className="text-green-600 text-lg">Every picture tells a story. Every story creates a memory.</p>
      </div>
    </div>
  )
}
