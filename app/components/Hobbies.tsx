import React from 'react'
import { FaBook, FaMusic, FaCamera, FaHiking, FaGamepad, FaPalette } from 'react-icons/fa'

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Reading",
      description: "Love exploring new worlds through books, especially science fiction and fantasy."
    },
    {
      icon: <FaMusic className="w-8 h-8" />,
      title: "Music",
      description: "Playing guitar and piano, attending live concerts, and discovering new artists."
    },
    {
      icon: <FaCamera className="w-8 h-8" />,
      title: "Photography",
      description: "Capturing moments and landscapes, experimenting with different techniques."
    },
    {
      icon: <FaHiking className="w-8 h-8" />,
      title: "Hiking",
      description: "Exploring nature trails and mountains, enjoying the great outdoors."
    },
    {
      icon: <FaGamepad className="w-8 h-8" />,
      title: "Gaming",
      description: "Playing strategy games and exploring virtual worlds in my free time."
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "Art",
      description: "Creating digital art and experimenting with different styles and mediums."
    }
  ]

  return (
    <div id="hobbies" className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Hobbies & Interests</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => (
          <div 
            key={index}
            className="group bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                {hobby.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{hobby.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hobbies 