"use client"
import { useParams } from "react-router-dom"

interface CollagePhoto {
  id: number
  src: string
  alt: string
  caption: string
}

interface CollageData {
  [key: string]: {
    title: string
    description: string
    photos: CollagePhoto[]
  }
}

export default function Collage() {
  const { photoId } = useParams<{ photoId: string }>()

  const collageData: CollageData = {
    "1": {
      title: "Wedding Memories",
      description: "A collection of beautiful moments from the perfect wedding day",
      photos: [
        { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Bride getting ready", caption: "Getting ready for the big moment" },
        { id: 2, src: "/placeholder.svg?height=400&width=300", alt: "Wedding ceremony", caption: "Walking down the aisle" },
        { id: 3, src: "/placeholder.svg?height=350&width=500", alt: "First kiss", caption: "The first kiss as married couple" },
        { id: 4, src: "/placeholder.svg?height=400&width=400", alt: "Wedding party", caption: "Celebrating with friends" },
        { id: 5, src: "/placeholder.svg?height=300&width=450", alt: "Reception dance", caption: "Dancing the night away" },
        { id: 6, src: "/placeholder.svg?height=450&width=350", alt: "Cake cutting", caption: "Sweet moments together" },
        { id: 7, src: "/placeholder.svg?height=350&width=400", alt: "Bouquet toss", caption: "Passing on the luck" },
        { id: 8, src: "/placeholder.svg?height=400&width=350", alt: "Sunset photos", caption: "Golden hour romance" },
      ],
    },
    "2": {
      title: "Birthday Celebration",
      description: "Sweet sixteen moments filled with joy and laughter",
      photos: [
        { id: 1, src: "/placeholder.svg?height=350&width=400", alt: "Birthday surprise", caption: "The moment of surprise" },
        { id: 2, src: "/placeholder.svg?height=400&width=350", alt: "Cake presentation", caption: "The perfect birthday cake" },
        { id: 3, src: "/placeholder.svg?height=300&width=500", alt: "Friends gathering", caption: "All the best friends together" },
        { id: 4, src: "/placeholder.svg?height=450&width=300", alt: "Gift opening", caption: "Unwrapping precious gifts" },
        { id: 5, src: "/placeholder.svg?height=350&width=450", alt: "Party games", caption: "Fun and games all around" },
        { id: 6, src: "/placeholder.svg?height=400&width=400", alt: "Group photo", caption: "Memories to last forever" },
      ],
    },
    "3": {
      title: "Graduation Journey",
      description: "The culmination of years of hard work and dedication",
      photos: [
        { id: 1, src: "/placeholder.svg?height=400&width=350", alt: "Cap and gown", caption: "Ready for the ceremony" },
        { id: 2, src: "/placeholder.svg?height=350&width=500", alt: "Walking across stage", caption: "The moment of achievement" },
        { id: 3, src: "/placeholder.svg?height=450&width=350", alt: "Diploma received", caption: "Dreams becoming reality" },
        { id: 4, src: "/placeholder.svg?height=300&width=450", alt: "Family celebration", caption: "Proud family moments" },
        { id: 5, src: "/placeholder.svg?height=400&width=400", alt: "Graduation party", caption: "Celebrating success together" },
        { id: 6, src: "/placeholder.svg?height=350&width=400", alt: "Future plans", caption: "Looking towards tomorrow" },
      ],
    },
  }

  const defaultCollage = {
    title: "More Memories",
    description: "A beautiful collection of related moments",
    photos: [
      { id: 1, src: "/placeholder.svg?height=350&width=400", alt: "Memory 1", caption: "A precious moment in time" },
      { id: 2, src: "/placeholder.svg?height=400&width=350", alt: "Memory 2", caption: "Laughter and joy captured" },
      { id: 3, src: "/placeholder.svg?height=300&width=500", alt: "Memory 3", caption: "Friends and family together" },
      { id: 4, src: "/placeholder.svg?height=450&width=300", alt: "Memory 4", caption: "Special celebrations" },
      { id: 5, src: "/placeholder.svg?height=350&width=450", alt: "Memory 5", caption: "Beautiful moments shared" },
      { id: 6, src: "/placeholder.svg?height=400&width=400", alt: "Memory 6", caption: "Memories to treasure forever" },
    ],
  }

  const currentCollage = photoId && collageData[photoId] ? collageData[photoId] : defaultCollage

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      {/* Title Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-800 mb-3">{currentCollage.title}</h1>
        <p className="text-green-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {currentCollage.description}
        </p>
      </div>

      {/* Photo Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCollage.photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${
                index % 5 === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover min-h-[250px]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm md:text-base font-medium">{photo.caption}</p>
              </div>
              <div className="absolute inset-0 border-4 border-green-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}