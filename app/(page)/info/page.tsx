"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Mail, Clock, Sparkles, Droplets, Shield, Award, TrendingUp, Send } from 'lucide-react';

const GlandryProfile: React.FC = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const services = [
        { icon: Droplets, title: 'Dry Clean', desc: 'Professional dry cleaning service' },
        { icon: Sparkles, title: 'Setrika Premium', desc: 'Premium Iron' },
        { icon: Shield, title: 'Clean Guarantee', desc: '100% customer satisfaction' },
    ];

    const stats = [
        { icon: Award, value: '10K+', label: 'Customer satisfied' },
        { icon: TrendingUp, value: '5 Years', label: 'Experience' },
        { icon: Star, value: '4.9/5', label: 'Ratings' },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -80 },
        show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
    };

    const fadeTop = {
        hidden: { opacity: 0, y: -60 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 80 },
        show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
    };

    const handleSubmit = () => {
        alert(`Message from ${formData.name} has been sent!`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 ml-0 md:ml-64 transition-all"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Background Animasi */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>

                <div className="relative max-w-6xl mx-auto px-6 py-16">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Logo */}
                        <motion.div
                            className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
                            variants={{
                                hidden: { opacity: 0, x: -60 },
                                show: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 80,
                                    },
                                },
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-blue-400 p-8 rounded-3xl shadow-2xl">
                                    <img
                                        src="/glaundry.png"
                                        alt="Glandry Logo"
                                        width="160"
                                        height="160"
                                        className="w-40 h-40 object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Info Perusahaan */}
                        <div className="flex-1 text-white text-center md:text-left">
                            <motion.div
                                className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium animate-pulse"
                                variants={fadeTop}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                ✨ #1 Trusted Laundry in Sampang
                            </motion.div>
                            <motion.h1
                                className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Glandry
                            </motion.h1>
                            <motion.p
                                className="text-xl text-blue-100 mb-6 max-w-2xl"
                                variants={fadeRight}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Modern laundry solutions with the latest technology and the best service for your clothes
                            </motion.p>

                            {/* Rating */}
                            <motion.div
                                className="flex items-center justify-center md:justify-start gap-2 mb-6"
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-lg font-semibold">5.0</span>
                                <span className="text-blue-200">(2,847 reviews)</span>
                            </motion.div>

                            {/* Info Singkat */}
                            <motion.div
                                className="flex flex-col md:flex-row gap-4 text-sm"
                                variants={fadeRight}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <MapPin className="w-4 h-4" />
                                    <span>Jl. Karang Penang, Sampang</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <Clock className="w-4 h-4" />
                                    <span>Open 07:00 - 21:00</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <motion.div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-100 rounded-xl">
                                    <stat.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Tabs */}
                <motion.div
                    className="flex gap-4 mb-8 overflow-x-auto pb-2"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {['about', 'services', 'contact'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                ? 'bg-blue-600 text-white shadow-lg scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            {tab === 'about' ? 'About' : tab === 'services' ? 'Services' : 'Contact'}
                        </button>
                    ))}
                </motion.div>

                {/* Tab Content */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    {activeTab === 'about' && (
                        <div className="space-y-8 animate-fadeIn">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Glandry</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Glandry is a modern laundry company located on Jl. Karang Penang, Sampang.
                                We are committed to providing the best service with the latest washing technology and environmentally friendly detergents. With over 5 years of experience, we have served thousands of customers with a 99% satisfaction rate.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                                    <h3 className="font-bold text-xl text-blue-800 mb-3">Our Vision</h3>
                                    <p className="text-gray-700">
                                        To be a leading laundry service provider that prioritizes quality, speed, and customer satisfaction.
                                    </p>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                                    <h3 className="font-bold text-xl text-purple-800 mb-3">Our Mission</h3>
                                    <p className="text-gray-700">
                                        Providing the best clothing care solutions at affordable prices
                                        and fast, professional service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'services' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Service</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                    >
                                        <div className="p-4 bg-blue-100 rounded-xl inline-block mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                            <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
                                <h3 className="text-2xl font-bold mb-4">Economical Package</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                        <div className="text-3xl font-bold mb-2">Rp 5.000</div>
                                        <div className="text-blue-100">Per Kilogram</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                        <div className="text-3xl font-bold mb-2">2 day</div>
                                        <div className="text-blue-100">Proses Express</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                        <div className="text-3xl font-bold mb-2">Free</div>
                                        <div className="text-blue-100">Shuttle</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact us</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="p-3 bg-blue-100 rounded-lg">
                                            <MapPin className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                                            <p className="text-gray-600">Jl. Karang Penang, Sampang, Madura, Jawa Timur</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="p-3 bg-green-100 rounded-lg">
                                            <Phone className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-1">Telepon</h4>
                                            <p className="text-gray-600">+62 812-3456-7890</p>
                                            <p className="text-gray-600">+62 856-7890-1234</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="p-3 bg-purple-100 rounded-lg">
                                            <Mail className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                                            <p className="text-gray-600">info@glandry.com</p>
                                            <p className="text-gray-600">cs@glandry.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="p-3 bg-orange-100 rounded-lg">
                                            <Clock className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-1">Operating Hours</h4>
                                            <p className="text-gray-600">Monday - Saturday: 07:00 - 21:00</p>
                                            <p className="text-gray-600">Sunday: 08:00 - 20:00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                                        />
                                        <textarea
                                            placeholder="Message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                        />
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">Glandry</h3>
                        <p className="text-gray-400">Quality Laundry, Affordable Prices</p>
                    </div>
                    <div className="flex justify-center gap-6 mb-6">
                        <button className="hover:text-blue-400 transition-colors">Facebook</button>
                        <button className="hover:text-blue-400 transition-colors">Instagram</button>
                        <button className="hover:text-blue-400 transition-colors">WhatsApp</button>
                    </div>
                    <p className="text-gray-500 text-sm">© 2024 Maz Ulex. All rights reserved.</p>
                </div>
            </footer>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </motion.div>
    );
};

export default GlandryProfile;