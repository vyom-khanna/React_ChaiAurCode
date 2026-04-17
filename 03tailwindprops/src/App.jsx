import { useState } from 'react'
import './App.css'

export default function MusicCard() {
  return (
    <div className="bg-[#020617] min-h-screen flex items-center justify-center p-6">
      <div className="flex items-center gap-8 bg-[#020617] border border-gray-800 rounded-2xl p-6 shadow-xl max-w-3xl w-full">

        {/* Left Card */}
        <div className="bg-black rounded-xl border border-gray-700 overflow-hidden w-48">
          <div className="flex">
            <img
              src="/img1.jpg"
              alt=""
              className="w-1/3 h-40 object-cover brightness-110 contrast-125 saturate-150 hue-rotate-[300deg]"
            />
            <img
              src="/img2.jpg"
              alt=""
              className="w-1/3 h-40 object-cover brightness-110 contrast-125 saturate-150 sepia"
            />
            <img
              src="/img3.jpg"
              alt=""
              className="w-1/3 h-40 object-cover brightness-110 contrast-125 saturate-150 hue-rotate-[180deg]"
            />
          </div>

          <div className="flex justify-between items-center text-xs text-gray-300 px-2 py-1">
            <span>The Anti-Patterns</span>
            <span>No. 4</span>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-3xl font-semibold text-white">
            Class Warfare
          </h1>

          <p className="text-blue-400 mt-1 font-medium">
            The Anti-Patterns
          </p>

          <p className="text-gray-400 mt-1 text-sm">
            No. 4 • 2025
          </p>
        </div>

      </div>
    </div>
  );
}
function App() {
  return (
    <>
    
    </>
  )
}

export default App
