"use client"

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { Sparkles, Timer, Droplets, Award, ArrowRight, Zap, Atom, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function GlandryHomepage() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const navigate = useRouter();

  const handleNavigate = () => navigate.push('/info')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Timer,
      title: 'Fast',
      description: 'We deliver high–quality laundry service in a short amount of time. With our express cleaning workflow and optimized process efficiency, your clothes are washed, dried, and neatly folded within 24 hours—without compromising cleanliness or fabric care.',
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&q=80',
      gradient: 'from-blue-500 to-cyan-400',
      color: 'text-blue-600'
    },
    {
      icon: Droplets,
      title: 'Clean',
      description: 'We use modern washing machines and premium, fabric–friendly detergents to remove stains effectively while maintaining the original softness of the material. Every item goes through a thorough cleaning process to ensure it comes back fresh, bright, and spotless.',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80',
      gradient: 'from-indigo-500 to-blue-400',
      color: 'text-indigo-600'
    },
    {
      icon: Sparkles,
      title: 'Pure',
      description: 'Our cleanliness process follows halal and hygienic washing standards. We strictly separate laundry loads, utilize water purification steps, and ensure that every piece of clothing is processed with full cleanliness awareness. This offers comfort and peace of mind for you and your family.',
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80',
      gradient: 'from-purple-500 to-indigo-400',
      color: 'text-purple-600'
    }
  ];

  const technologies = [
    {
      name: 'React',
      gradient: 'from-cyan-400 to-blue-500',
      icon: <Atom className="w-10 h-10 text-white" />,
      description:
        'A powerful JavaScript library used to build dynamic and responsive user interfaces. React makes it easy to create reusable UI components and ensures high performance in modern web applications.'
    },
    {
      name: 'Next.js',
      gradient: 'from-slate-700 to-slate-900',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
          alt="Next.js Logo"
          className="w-10 h-10 invert"
        />
      ),
      description:
        'A React framework that boosts performance and SEO with features like server-side rendering, static site generation, and file-based routing. Ideal for building fast, scalable, production-ready websites.'
    },
    {
      name: 'shadcn/ui',
      gradient: 'from-indigo-500 to-purple-600',
      icon: <Palette className="w-10 h-10 text-white" />,
      description:
        'A custom-tailored UI component system built on top of Radix UI and Tailwind CSS. shadcn/ui provides elegant, accessible, and easily customizable components for building polished interfaces.'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center relative">
        <motion.div
          className={`transform transition-all duration-1000 ${scrolled ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Logo from Image */}
          <div className="flex justify-center mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-b from-indigo-600 to-blue-500 p-3 rounded-3xl shadow-2xl transform group-hover:scale-110 transition-all duration-500">
              <img
                src="/glaundry.png"
                alt="Glandry Logo"
                className="w-32 h-32 rounded-2xl"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 animate-gradient-x">
              Glaundry
            </span>
          </h1>

          <p className="text-2xl md:text-4xl text-slate-700 mb-4 max-w-3xl mx-auto font-medium tracking-wide">
            <span className="font-bold text-blue-600">Solutions for your Laundry website</span>
          </p>
          <p className="text-2xl md:text-4xl mb-12 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            ✨
          </p>

          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 font-semibold group"
            onClick={handleNavigate}
          >
            Start Now to the Page!
            <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-bounce animation-delay-1000">
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="absolute top-40 right-10 animate-bounce animation-delay-2000">
          <Droplets className="w-8 h-8 text-blue-400" />
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Advantages</span>
          </h2>
          <p className="text-slate-800 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Three reasons why  <span className="font-extrabold text-blue-600">Glandry</span> is the best choice for your laundry needs.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index ? 'translateY(-16px) rotate(2deg)' : 'translateY(0) rotate(0)',
              }}
            >
              <CardContent className="p-0">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-14 h-14" />
                    </div>
                    <h3 className="text-4xl font-extrabold tracking-tight mb-3">{feature.title}</h3>
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${feature.gradient}`}></div>
                  <p className="text-slate-700 leading-relaxed pl-4 font-normal">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="container mx-auto px-4 py-20"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 border-none shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <CardContent className="p-12 md:p-16 text-center relative z-10">
            <Zap className="w-20 h-20 text-yellow-300 mx-auto mb-6 animate-pulse" />
            <motion.h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Try Our Service ?
            </motion.h2>
            <motion.p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto font-normal">
              Join <span className="font-bold text-yellow-300">1000 of satisfied customers</span> who trust our premium laundry service.
            </motion.p>
            <Button onClick={() => navigate.push('/info')} className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-7 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold">
              Contact Us Now
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-4">
            Modern <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Technology</span>
          </h2>
          <p className="text-slate-600 text-xl font-bold">
            Built with leading web technologies for the best experience
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}>
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <span className="text-4xl">{tech.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {tech.name}
                </h3>
                <p className="text-slate-600 leading-relaxed font-normal">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 text-yellow-400" />
          </div>
          <p className="text-slate-300 text-lg font-light">
            © 2024 <span className="font-bold text-blue-400">Maz Ulex</span>. All rights reserved.
          </p>
          <p className="text-slate-400 mt-2 text-sm">
            Trusted laundry service with top cleanliness standards
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}