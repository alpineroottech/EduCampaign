'use client';

import { useState, useMemo } from 'react';
import { blogPosts, type BlogCategory } from '@/data/blogData';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogCard from '@/components/blog/BlogCard';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import HeroSection from '@/components/hero/HeroSection';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') {
      return blogPosts;
    }

    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      {/* bg-[#F5F3FF] */}
      {/* Hero */}
      {/* <Breadcrumbs />
      <div className="h-[350px] bg-gradient-to-br from-[#6B4FA1] via-[#7B5FB1] to-[#8B5FD1] text-white py-24 relative overflow-hidden flex justify-center items-center">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF9F66] rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#FFB966] rounded-full opacity-20 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Abroad Blog</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Expert advice, guides, and success stories to help you achieve your study abroad dreams
          </p>
        </div>
      </div> */}
      <div className="relative">
        <Breadcrumbs />
        <HeroSection imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80" title="Blog" />
      </div>
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Category Filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Results Count */}
        {activeCategory !== 'all' && (
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Found <span className="font-semibold text-[#6B4FA1]">{filteredPosts.length}</span> article
              {filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className=" mb-6">
              No articles in this category yet. Check back soon!
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="bg-[#6B4FA1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a3f8a] transition-colors"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-[#6B4FA1] to-[#8B5FD1] text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Book a free consultation with our expert counselors today
          </p>
          <button className="bg-white text-[#6B4FA1] px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors shadow-xl">
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
