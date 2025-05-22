import React from 'react'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Sidebar />
      
      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Hemant!</h1>
            <p className="text-gray-600">Here's an overview of your Dashboard</p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <Profile />
            </div>

            {/* Experience Card */}
            <div className="lg:col-span-2">
              <Experience />
            </div>

            {/* Skills Card */}
            <div className="lg:col-span-1">
              <Skills />
            </div>

            {/* Hobbies Card */}
            <div className="lg:col-span-1">
              <Hobbies />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 