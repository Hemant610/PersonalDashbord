import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaBriefcase, FaCode, FaHeart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 group">
              <FaHome className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Home</span>
            </Link>
            <Link href="#profile" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 group">
              <FaUser className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Profile</span>
            </Link>
            <Link href="#experience" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 group">
              <FaBriefcase className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Experience</span>
            </Link>
            <Link href="#skills" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 group">
              <FaCode className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Skills</span>
            </Link>
            <Link href="#hobbies" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 group">
              <FaHeart className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Hobbies</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 