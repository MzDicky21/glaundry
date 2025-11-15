"use client"

import { useRouter } from 'next/navigation';
import { Shirt, Home, Sparkles, Droplets } from 'lucide-react';

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Washing Machine */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            {/* Washing Machine Body */}
            <div className="w-48 h-56 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Control Panel */}
              <div className="absolute top-4 left-4 right-4 h-8 bg-blue-700 rounded-lg flex items-center justify-around px-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>

              {/* Washing Machine Window */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full border-8 border-blue-700 overflow-hidden">
                <div className="absolute inset-0 bg-blue-400 opacity-60 animate-spin" style={{ animationDuration: '3s' }}>
                  <Shirt className="absolute top-1/4 left-1/4 text-white opacity-80" size={24} />
                  <Droplets className="absolute bottom-1/4 right-1/4 text-blue-100" size={20} />
                </div>
                {/* Bubbles */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute bottom-4 left-3 w-2 h-2 bg-white rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute top-8 left-6 w-2.5 h-2.5 bg-white rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>

            {/* Sparkles Effect */}
            <Sparkles className="absolute -top-4 -right-4 text-yellow-400 animate-pulse" size={32} />
            <Sparkles className="absolute -bottom-2 -left-2 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} size={24} />
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-8xl font-bold text-blue-600 mb-2 tracking-tight">404</h1>
          <div className="flex items-center justify-center gap-2 text-blue-500 mb-4">
            <div className="h-px bg-blue-300 w-12"></div>
            <Shirt className="text-blue-400" size={24} />
            <div className="h-px bg-blue-300 w-12"></div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Oops! Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
          It looks like the page you're looking for is currently being cleaned or doesn't exist yet.
          Let's go back to the main page!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.push('/')}
            className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-8 text-blue-300">
          <Droplets className="animate-bounce" size={20} style={{ animationDelay: '0s', animationDuration: '2s' }} />
          <Droplets className="animate-bounce" size={24} style={{ animationDelay: '0.3s', animationDuration: '2s' }} />
          <Droplets className="animate-bounce" size={20} style={{ animationDelay: '0.6s', animationDuration: '2s' }} />
        </div>
      </div>
    </div>
  );
}