'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// Sample blog data (replace this with your actual data source)
const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    excerpt: 'A deep dive into the world of React Hooks and how they can simplify your code.',
    date: '2023-10-01',
    slug: 'understanding-react-hooks',
    category: 'React'
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox',
    excerpt: 'A comparison of CSS Grid and Flexbox, and when to use each layout technique.',
    date: '2023-09-15',
    slug: 'css-grid-vs-flexbox',
    category: 'CSS'
  },
  {
    id: 3,
    title: 'Building a REST API with Node.js',
    excerpt: 'Learn how to build a RESTful API using Node.js and Express.',
    date: '2023-08-20',
    slug: 'building-a-rest-api-with-nodejs',
    category: 'Backend'
  },
  // Add more blog posts as needed
];
// Get unique categories
const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-800 py-16">
      <div className="container mx-auto px-4 pt-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-primary">Blog</h1>
          <p className="text-xl text-gray-500">Latest insights and articles</p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex overflow-x-auto pb-2 gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-full placeholder-gray-700  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              className="group"
            >
              <div className="relative overflow-hidden bg-transparent rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-300">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                <div className="pl-6 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold text-primary group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium flex items-center group-hover:underline"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No articles found. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}