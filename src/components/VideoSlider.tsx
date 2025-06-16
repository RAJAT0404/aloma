'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Get Carried Away",
      subtitle: "From gym bags to totes and everything in between",
      buttonText: "View All Bags",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      imageUrl: "https://images.unsplash.com/photo-1705290304455-35ffb433f560?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Custom Apparel",
      subtitle: "Professional quality custom t-shirts and more",
      buttonText: "Start Designing",
      videoUrl: "https://videos.pexels.com/video-files/5926239/5926239-uhd_2560_1440_30fps.mp4",
      imageUrl: "https://images.unsplash.com/photo-1737108398624-8359474a0989?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Premium Quality",
      subtitle: "State-of-the-art printing and embroidery services",
      buttonText: "Learn More",
      videoUrl: "https://videos.pexels.com/video-files/4148834/4148834-uhd_2560_1440_30fps.mp4",
      imageUrl: "https://images.unsplash.com/photo-1537274942065-eda9d00a6293?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Video Background */}
  
   

    <div className="absolute inset-0">
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`
        absolute inset-0
        bg-center bg-cover
        transition-opacity duration-1000
        ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ backgroundImage: `url(${slide.imageUrl})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* Your slide content goes here, e.g. caption, buttons, etc. */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* <h2 className="text-white text-3xl">{slide.title}</h2> */}
      </div>
    </div>
  ))}
</div>




      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>
          <Button 
            size="lg" variant='blue'
            className=" text-white px-8 py-4 text-lg animate-fade-in"
          >
            {slides[currentSlide].buttonText}
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 border-white/30 text-white hover:bg-white/30 h-12 w-12"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 border-white/30 text-white hover:bg-white/30 h-12 w-12"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default VideoSlider;