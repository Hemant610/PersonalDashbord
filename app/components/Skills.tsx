import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaAws, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      icon: <FaReact className="w-8 h-8" />,
      name: "React",
      level: 90,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <SiTypescript className="w-8 h-8" />,
      name: "TypeScript",
      level: 85,
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <FaNodeJs className="w-8 h-8" />,
      name: "Node.js",
      level: 80,
      color: "from-green-500 to-green-400"
    },
    {
      icon: <SiNextdotjs className="w-8 h-8" />,
      name: "Next.js",
      level: 85,
      color: "from-gray-800 to-gray-600"
    },
    {
      icon: <SiTailwindcss className="w-8 h-8" />,
      name: "Tailwind CSS",
      level: 90,
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      name: "Databases",
      level: 75,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaGitAlt className="w-8 h-8" />,
      name: "Git",
      level: 85,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaAws className="w-8 h-8" />,
      name: "AWS",
      level: 70,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaDocker className="w-8 h-8" />,
      name: "Docker",
      level: 65,
      color: "from-blue-600 to-blue-400"
    }
  ]

  return (
    <div id="skills" className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills 