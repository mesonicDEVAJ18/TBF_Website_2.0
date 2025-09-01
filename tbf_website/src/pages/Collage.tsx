"use client"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

interface CollagePhoto {
  id: number
  src: string
  alt: string
  caption: string
}

export default function Collage() {
  const { year } = useParams<{ year: string }>()
  const albumYear = year || "default"

  const imageCountByYear: Record<string, number> = {
    "2023": 6,
    "2024": 4,
    "2025": 9,
    default: 3,
  }

  const imageCount = imageCountByYear[albumYear] || imageCountByYear["default"]
  const [photos, setPhotos] = useState<CollagePhoto[]>([])

  useEffect(() => {
    const generatedPhotos: CollagePhoto[] = Array.from({ length: imageCount }, (_, i) => ({
      id: i + 1,
      src: `/images/${albumYear}/${i + 1}_${albumYear}.webp`,
      alt: `Photo ${i + 1}`,
      caption: `Memory ${i + 1}`,
    }))
    setPhotos(generatedPhotos)
  }, [albumYear, imageCount])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-800 mb-3">
          {albumYear} Album
        </h1>
        <p className="text-green-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          A beautiful collection of memories from the year {albumYear}
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-4 pb-16">
        {photos.length === 0 ? (
          <p className="text-center text-gray-500">No images found for {albumYear}.</p>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative break-inside-avoid overflow-hidden rounded-2xl shadow-lg group transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto rounded-t-2xl"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm md:text-base font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}