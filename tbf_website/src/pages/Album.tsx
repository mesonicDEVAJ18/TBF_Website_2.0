"use client"
import { useNavigate } from "react-router-dom"

interface AlbumProject {
  id: number
  title: string
  description: string
  date?: string
}

interface AlbumYear {
  year: string
  cover: string
  projects: AlbumProject[]
}

// Replace this with your real data or load via API later
const albumData: AlbumYear[] = [
  {
    year: "2023",
    cover: "/images/2023/5_2023.jpg",
    projects: [
      {
        id: 1,
        title: "Our 1st Food drive",
        description: "Heartfelt experience, the first drive of our NGO.",
        date: "23 December 2023",
      },
      {
        id: 2,
        title: "Winter Drive '23",
        description: "Donated winter clothes, expanded our efforts.",
        date: "23 December 2023",
      },
    ],
  },
  {
    year: "2024",
    cover: "/images/2024/2_2024.jpg",
    projects: [
      {
        id: 4,
        title: "TBF Drive 4",
        description: "3 drives across NCR: bhandara, dog drive, and ration kits.",
        date: "22 May 2024",
      },
      {
        id: 5,
        title: "Hydration Drive",
        description: "Served 600+ people with Roohafza drink at CP.",
        date: "26 June 2024",
      },
      {
        id: 6,
        title: "Project Kitaab X TBF",
        description: "Taught and fed 60 kids: Lahori Jeera and sweet corn.",
        date: "7 July 2024",
      },
      {
        id: 7,
        title: "Diggin X TBF",
        description: "Diggin provided food packets to the underprivileged.",
        date: "16 July 2024",
      },
      {
        id: 8,
        title: "RHA X TBF",
        description: "Robin Hood Army & TBF served hundreds with surplus food.",
        date: "15 December 2024",
      },
    ],
  },
  {
    year: "2025",
    cover: "/images/2025/1_2025.jpg",
    projects: [
      {
        id: 9,
        title: "Project Sukh X TBF",
        description: "Distributed food and stationery in low-income areas.",
        date: "8 January 2025",
      },
      {
        id: 10,
        title: "May Noida Drive",
        description: "Organized food drives at Greater Noida West and Indirapuram, where our team distributed over 200 meals and beverages",
        date: "22 May 2025",
      },
    ],
  },
]

export default function Album() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-amber-50 py-4 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-green-800">Yearly Albums</h1>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Each album captures the spirit of a year full of meaningful work and beautiful moments.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albumData.map(({ year, cover, projects }) => (
            <div
              key={year}
              onClick={() => navigate(`/album/${year}`)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border-l-4 border-green-600 cursor-pointer transition duration-300 overflow-hidden"
            >
              <img
                src={cover}
                alt={`Cover for ${year}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-3">{year}</h2>
                <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <span className="font-medium">{project.title}</span>
                      {project.date && (
                        <span className="text-green-600 text-xs"> — {project.date}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-green-500 font-medium mt-4">Click to view full album →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}