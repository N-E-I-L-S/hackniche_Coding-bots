import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
// git the blogs array containing blogs objects from mongodb and pass it to the blog card component


export default function Blog() {
  
  
  
  return (
    <>
      <Navbar/>
      {/* make a page with blog cards , title and 100 words with author and date posted, make it static */}
        
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Blog
          </h1>
          <div className="flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full">
            
            <BlogCard title="dhantanu"/>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            
          </div>
        </main>
      </div>
      
        
    </>
  ) 
} 

