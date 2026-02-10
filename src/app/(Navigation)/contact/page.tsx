'use client';
import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#faf7fc]">
      {/* Hero Section */}
      <HeroSection 
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" 
        title="Contact Us" 
      />

      {/* Main Content */}
      <div className="pt-16 pb-2">
        <div className="max-w-7xl mx-auto px-standard">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about studying abroad? We're here to help you every step of the way. 
              Reach out and let's start your educational journey together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6B4FA1]/10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#6B4FA1]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+977 1-4500074</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6B4FA1]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#6B4FA1]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 break-all">educampaign2008@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6B4FA1]/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#6B4FA1]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                  <p className="text-gray-600">Dillibazar-30, Gurjumarga</p>
                  <p className="text-gray-600">Kathmandu, Nepal</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <iframe
              src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=Edu.%20Campaign%20Pvt&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Edu. Campaign Location"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
