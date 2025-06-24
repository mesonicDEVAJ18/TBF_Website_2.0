"use client"
import { useNavigate } from "react-router-dom"

interface Photo {
  id: number
  src: string
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
      title: "Our 1st Food drive",
      description: "This was an heartfelt experience and we were thrilled to kick off with the very first drive of our NGO on 23rd December 2023.",
      date: "23rd December 2023"
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      title: "Winter Drive '23",
      description: "This was an incredible opportunity to donate winter clothes and put smiles on people’s faces. We had entered a phase of growth and expansion during this period.",
      date: "23 December 2023"
    },
    {
      id: 4,
      src: "/placeholder.svg?height=500&width=400",
      title: "TBF Drive 4",
      description: "We had organised 3 drives in Noida, Indirapuram and Gurgaon. In Noida, we took a major step and hosted a bhandara. In Indirapuram, A dog drive was initiated. In Gurgaon, our team distributed essential resources. Helped 20 families with monthly rashan along with 100+ kids.",
      date: "22 May 2024"
    },
    {
      id: 5,
      src: "/placeholder.svg?height=500&width=400",
      title: "Hydration Drive",
      description: "The Brijwasi Foundation organized a successful hydration drive managed by Tiya with the help of Khushal, Vibhav, Reyna, and Akshita. They served 'chabeel,' a refreshing Roohafza milk-water drink. Over 600 people were served, spreading joy and relief in the community with help from the NDMC office at Connaught Place.",
      date: "26 June 2024"
    },
    {
      id: 6,
      src: "/placeholder.svg?height=500&width=400",
      title: "The Brijwasi Foundation X Project Kitaab: Feeding and Teaching Children",
      description: "We collaborated with Project Kitaab to serve around 55–60 kids. Our dedicated volunteers provided engaging lessons and served Lahori Jeera and homemade sweet corn. The children's happiness and excitement made this collaboration a truly joyful and unforgettable experience.",
      date: "7 July 2024"
    },
    {
      id: 7,
      src: "/placeholder.svg?height=500&width=400",
      title: "Diggin X TBF",
      description: "On the occasion of Diggin's birthday, they collaborated with The Brijwasi Foundation and generously provided food packets for the underprivileged. Their support helped us extend kindness and nourishment to those in need.",
      date: "16 July 2024"
    },
    {
      id: 8,
      src: "/placeholder.svg?height=500&width=400",
      title: "RHA X TBF",
      description: "The Brijwasi Foundation collaborated with the Robin Hood Army — a volunteer-based organization that works to eliminate hunger by redistributing surplus food from restaurants and individuals to those in need. This joint initiative marked a powerful step towards our shared mission of zero hunger, as we united to serve hundreds of meals across the city, amplifying impact through collective action.",
      date: "15 December 2024"
    },
    {
      id: 9,
      src: "/placeholder.svg?height=500&width=400",
      title: "Project Sukh X TBF",
      description: "The Brijwasi Foundation partnered with Project Sukh — a youth-led initiative committed to spreading happiness and well-being through grassroots outreach. Together, we visited low-income neighborhoods to distribute nutritious food and essential stationery supplies to children and families. This heartfelt collaboration brought smiles and support to underserved communities.",
      date: "8 January 2025"
    },
  ]

  return (
    <div className="min-h-screen bg-amber-50 py-4 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-green-800">Captured Moments</h1>
        <p className="text-gray-700 mb-10 max-w-2xl">
          A collection of cherished memories, captured and preserved. Click any card to view more.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/collage/${photo.id}`)}
              style={{ aspectRatio: "6/5" }}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-bg-[#fdf8e4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
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
