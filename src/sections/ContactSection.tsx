'use client';
import React, { forwardRef } from 'react'
import { ScrollReveal } from "@/components/ui/transitions";
import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
    const [hubValue, setHubValue] = React.useState('');
    
    return (
        <section className="py-16 md:py-24 bg-white" ref={ref}>
            <div className="max-w-4xl mx-auto px-standard">
                <ScrollReveal>
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Start Your Journey Today
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Reach out and let&apos;s explore the best possibilities together for your study abroad dreams.
                        </p>
                    </div>

                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
                    >
                        <form className="space-y-5">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        autoComplete="given-name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 
                                                 focus:border-[#6B4FA1] focus:ring-2 focus:ring-[#6B4FA1]/20 
                                                 transition-all duration-200 outline-none"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        autoComplete="family-name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 
                                                 focus:border-[#6B4FA1] focus:ring-2 focus:ring-[#6B4FA1]/20 
                                                 transition-all duration-200 outline-none"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 
                                             focus:border-[#6B4FA1] focus:ring-2 focus:ring-[#6B4FA1]/20 
                                             transition-all duration-200 outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 
                                             focus:border-[#6B4FA1] focus:ring-2 focus:ring-[#6B4FA1]/20 
                                             transition-all duration-200 outline-none"
                                    placeholder="+977 98XXXXXXXX"
                                />
                            </div>

                            {/* Study Destination */}
                            <div>
                                <label htmlFor="hub" className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Study Destination
                                </label>
                                <select
                                    id="hub"
                                    name="hub"
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border border-gray-200 bg-white 
                                              focus:border-[#6B4FA1] focus:ring-2 focus:ring-[#6B4FA1]/20 
                                              transition-all duration-200 outline-none appearance-none
                                              ${hubValue === '' ? 'text-gray-400' : 'text-gray-900'}`}
                                    value={hubValue}
                                    onChange={e => setHubValue(e.target.value)}
                                >
                                    <option value="" disabled>Select a destination</option>
                                    <option value="japan">Japan</option>
                                    <option value="australia">Australia</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="canada">Canada</option>
                                    <option value="newzealand">New Zealand</option>
                                    <option value="korea">South Korea</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 
                                             focus:border-[#6B4FA1] focus:ring-2 focus:ring-[#6B4FA1]/20 
                                             transition-all duration-200 outline-none resize-none"
                                    placeholder="Tell us about your goals and any questions you have..."
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full bg-[#3d1a4d] hover:bg-[#2a1136] text-white font-semibold 
                                         py-4 px-8 rounded-lg shadow-sm hover:shadow-md 
                                         transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-[#6B4FA1]/10 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-[#6B4FA1]" />
                            </div>
                            <p className="text-sm font-medium text-gray-900">Kathmandu, Nepal</p>
                            <p className="text-sm text-gray-500">Putalisadak</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-[#6B4FA1]/10 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-[#6B4FA1]" />
                            </div>
                            <p className="text-sm font-medium text-gray-900">+977-01-4168374</p>
                            <p className="text-sm text-gray-500">Mon-Fri 9am-6pm</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-[#6B4FA1]/10 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-[#6B4FA1]" />
                            </div>
                            <p className="text-sm font-medium text-gray-900">info@educampaign.com.np</p>
                            <p className="text-sm text-gray-500">We reply within 24h</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
});

ContactSection.displayName = 'ContactSection';

export default ContactSection
