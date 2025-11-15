"use client"

import React from 'react';
import { Droplets, Shirt } from 'lucide-react';

const LaundryLoading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="text-center">
        {/* Washing Machine */}
        <div className="relative w-52 h-60 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl mx-auto mb-8 p-5">
          {/* Machine Top */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-3xl flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          </div>

          {/* Drum Container */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-inner overflow-hidden">
            {/* Rotating Drum */}
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '2s' }}>
              {/* Water Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-blue-400/60 to-blue-300/40 animate-pulse"></div>

              {/* Bubbles */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/60 animate-bounce"
                  style={{
                    width: `${Math.random() * 8 + 8}px`,
                    height: `${Math.random() * 8 + 8}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    bottom: `${Math.random() * 20}%`,
                    animationDuration: `${Math.random() * 2 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                ></div>
              ))}

              {/* Clothes Icons */}
              <div className="absolute top-1/4 left-1/4 opacity-80">
                <Shirt className="w-6 h-6 text-pink-400 transform rotate-45" />
              </div>
              <div className="absolute top-1/2 right-1/4 opacity-80">
                <Shirt className="w-6 h-6 text-blue-400 transform -rotate-30" />
              </div>
              <div className="absolute bottom-1/3 left-1/3 opacity-80">
                <Shirt className="w-6 h-6 text-green-400 transform rotate-60" />
              </div>

              {/* Water Droplets */}
              <div className="absolute top-1/3 right-1/3">
                <Droplets className="w-5 h-5 text-blue-300/70 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
            {[0, 300, 600].map((delay, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-pulse"
                style={{
                  animationDuration: '1s',
                  animationDelay: `${delay}ms`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-2xl font-semibold animate-pulse">
          Loading
          <span className="inline-block w-8 text-left">
            <span className="animate-pulse">...</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-52 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-white/60 rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LaundryLoading;