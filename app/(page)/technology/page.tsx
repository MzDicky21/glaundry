"use client"

import { useState, useEffect } from 'react';

export default function TechStackPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      name: 'TypeScript',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
      ),
      description: 'Strongly typed programming language that builds on JavaScript, providing better tooling and error detection at scale.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-[#3178C6]',
      features: ['Type Safety', 'Better IDE Support', 'Enhanced Refactoring']
    },
    {
      id: 2,
      name: 'React',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
      description: 'A JavaScript library for building user interfaces with reusable components and efficient rendering.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-[#61DAFB]',
      features: ['Component-Based', 'Virtual DOM', 'Rich Ecosystem']
    },
    {
      id: 3,
      name: 'Next.js',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current">
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
        </svg>
      ),
      description: 'The React framework for production-grade applications with server-side rendering and optimizations.',
      color: 'from-gray-800 to-gray-900',
      bgColor: 'bg-black',
      features: ['SSR & SSG', 'API Routes', 'Optimized Performance']
    },
    {
      id: 4,
      name: 'shadcn/ui',
      icon: (
        <svg role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current">
          <rect width="256" height="256" fill="none" />
          <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      ),
      description: 'Beautifully designed components built with Radix UI and Tailwind CSS, highly customizable and accessible.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-black',
      features: ['Accessible', 'Customizable', 'Copy & Paste']
    },
    {
      id: 5,
      name: 'Hono',
      icon: (
        <svg
          role="img"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 fill-current"
        >
          <path
            d="M128 0c0 48-40 64-40 96 0 18.4 13.6 32 32 32 17.6 0 32-14.4 32-32 0-8.8-2.4-16.8-7.2-24 18.4 9.6 31.2 27.2 31.2 48 0 35.2-28.8 64-64 64s-64-28.8-64-64C48 76.8 84.8 44 128 0z"
            fill="url(#honoGradient)"
          />
          <defs>
            <linearGradient id="honoGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#FF2E00" />
            </linearGradient>
          </defs>
        </svg>
      ),
      description:
        'Ultrafast web framework designed for modern edge environments like Cloudflare Workers and Deno.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-[#FF8C42]',
      features: ['Lightning Fast', 'Edge Ready', 'TypeScript First'],
    },
    {
      id: 6,
      name: 'MongoDB',
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
        </svg>
      ),
      description: 'Flexible and scalable NoSQL document database ideal for modern applications requiring rapid development.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-[#47A248]',
      features: ['Flexible Schema', 'Scalable', 'Document-Based']
    }
  ];

  return (
    <div className="min-h-screen ml-64 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 transition-all duration-500">

      {/* Hero Section */}
      <div className={`relative overflow-hidden py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <h1 className="relative text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Technologies
        </h1>
        <p className="relative text-xl font-extrabold max-w-3xl mx-auto leading-relaxed text-black-600">
          Leveraging a modern tech stack designed for high performance, scalability, development efficiency, and the best user experience.
        </p>
      </div>

      {/* Tech Cards Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const isHovered = hoveredCard === tech.id;

            return (
              <div
                key={tech.id}
                onMouseEnter={() => setHoveredCard(tech.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative transform transition-all duration-700 hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>

                <div className={`
                  relative bg-white border border-gray-200 rounded-2xl shadow-lg p-8 transition-all duration-500 overflow-hidden h-full flex flex-col
                  ${isHovered ? 'shadow-2xl border-transparent' : ''}
                `}>

                  {/* Background Gradient Overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-all duration-700 -translate-y-16 translate-x-16`}></div>

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${tech.bgColor} text-white transition-all duration-500 ${isHovered ? 'scale-110 rotate-6 shadow-xl' : 'shadow-md'}`}>
                    {tech.icon}
                  </div>

                  <h3 className="relative text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">{tech.name}</h3>
                  <p className="relative text-gray-600 mb-6 leading-relaxed flex-grow text-sm">{tech.description}</p>

                  <div className="relative space-y-2.5">
                    {tech.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 text-sm transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} ${isHovered ? 'scale-125' : ''} transition-transform duration-300`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* About Programmer Section */}
      <div className={`border-t border-gray-200 py-16 text-center bg-gradient-to-b from-transparent to-gray-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Created by</h2>
        <p className="text-xl font-semibold text-gray-800">Maz Ulex</p>
        <p className="text-gray-600">Email: mazprom65@gmail.com</p>
      </div>

    </div>
  );
}