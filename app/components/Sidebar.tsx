'use client'

import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaBriefcase, FaCode, FaHeart, FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const menuItems = [
    { icon: <FaHome />, text: "Dashboard", href: "/" },
    { icon: <FaUser />, text: "Profile", href: "#profile" },
    { icon: <FaBriefcase />, text: "Experience", href: "#experience" },
    { icon: <FaCode />, text: "Skills", href: "#skills" },
    { icon: <FaHeart />, text: "Hobbies", href: "#hobbies" }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-[60] p-2 rounded-lg bg-white/80 backdrop-blur-lg shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full bg-white/80 backdrop-blur-lg shadow-xl transition-all duration-300 z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-64`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 group"
                onClick={() => isMobile && setIsOpen(false)}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-medium">{item.text}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Hemant Yadav
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar 