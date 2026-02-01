'use client';
import React from 'react';
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [hubValue, setHubValue] = React.useState('');
    
    return (
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
                className="w-full bg-[#6B4FA1] hover:bg-[#5a3f8a] text-white font-medium 
                         py-3.5 px-6 rounded-lg transition-all duration-200 
                         flex items-center justify-center gap-2 group
                         shadow-md hover:shadow-lg"
            >
                <span>Send Message</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </motion.button>
        </form>
    );
}
