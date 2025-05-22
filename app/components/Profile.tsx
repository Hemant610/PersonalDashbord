import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaCode, FaLaptopCode } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="profile" className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="relative w-48 h-48 group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 animate-pulse"></div>
            <Image
              src="/profile-placeholder.jpg"
              alt="Hemant Yadav"
              width={192}
              height={192}
              className="rounded-full object-cover border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hemant Yadav
            </h2>
            <p className="text-gray-600 mt-2 text-lg font-medium">Full Stack Developer</p>
            
            {/* About Me */}
            <p className="text-gray-600 mt-4 leading-relaxed">
              Dynamic and results-driven Full Stack Developer with React proficiency, passionate about creating visually appealing, user-friendly, and effective websites. Seeking to leverage versatile technical skills, creative problem-solving abilities, and passion for delivering exceptional user experiences, while continuously learning and growing professionally.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a href="https://github.com/Hemant610/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-indigo-600 transform hover:scale-110 transition-all duration-300">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/hemantyadav" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-indigo-600 transform hover:scale-110 transition-all duration-300">
                <FaLinkedin size={28} />
              </a>
              <a href="https://twitter.com/hemant_aspx_dev" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-indigo-600 transform hover:scale-110 transition-all duration-300">
                <FaTwitter size={28} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <p className="text-gray-600 flex items-center justify-center md:justify-start hover:text-indigo-600 transition-colors duration-300 group">
                <FaEnvelope className="mr-3 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">yadavhemant610@gmail.com</span>
              </p>
              <p className="text-gray-600 flex items-center justify-center md:justify-start hover:text-indigo-600 transition-colors duration-300 group">
                <FaMapMarkerAlt className="mr-3 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">India</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-10 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mr-3"></span>
            About Me
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            A passionate developer with experience in building web applications
            using modern technologies. Always eager to learn and take on new challenges.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-10 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mr-3"></span>
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <FaCode className="text-indigo-500" />
              <span>Frontend Development</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <FaLaptopCode className="text-indigo-50" />
              <span>Backend Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 