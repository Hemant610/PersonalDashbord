import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2021 - Present",
      location: "New York, USA",
      description: "Led development of enterprise applications using React, Node.js, and AWS. Implemented CI/CD pipelines and improved team productivity by 40%."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      location: "San Francisco, USA",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to implement responsive UIs."
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2018 - 2019",
      location: "Boston, USA",
      description: "Built and maintained web applications using React and Node.js. Participated in code reviews and implemented best practices."
    }
  ]

  return (
    <div id="experience" className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <FaBriefcase className="mr-3 text-indigo-500" />
        Work Experience
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <FaBriefcase className="text-white" />
            </div>
            
            <div className="ml-8 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-indigo-500" />
                  {exp.period}
                </span>
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                  {exp.location}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience 