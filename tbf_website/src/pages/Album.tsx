"use client"
import { useNavigate } from "react-router-dom"

interface Photo {
  id: number
  src: string
  alt: string
  title: string
  description: string
  date?: string
}

export default function Album() {
  const navigate = useNavigate()

  const photos: Photo[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Wedding ceremony",
      title: "The Perfect Day",
      description: "A beautiful outdoor wedding ceremony under the blooming cherry trees.",
      date: "April 2024"
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Birthday celebration",
      title: "Sweet Sixteen",
      description: "An unforgettable birthday celebration with cake and joy.",
      date: "March 2024"
    },
    {
      id: 3,
      src: "/placeholder.svg?height=500&width=400",
      alt: "Graduation day",
      title: "Achievement Unlocked",
      description: "Years of hard work culminating in graduation day.",
      date: "February 2024"
    },
    // Add more if needed
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-green-800">Captured Moments</h1>
        <p className="text-gray-700 mb-10 max-w-2xl">
          A collection of cherished memories, captured and preserved. Click any card to view more.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/collage/${photo.id}`)}
              style={{ aspectRatio: "4/5" }}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{photo.title}</h3>
                <p className="text-green-700 leading-relaxed text-sm md:text-base mb-2">{photo.description}</p>
                {photo.date && (
                  <p className="text-green-600 text-xs font-medium">{photo.date}</p>
                )}
                <div className="mt-3 text-green-600 text-sm font-medium">Click to explore more →</div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-green-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
