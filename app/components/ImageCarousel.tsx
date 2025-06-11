'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Increased to 5 seconds for better viewing experience

    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div 
      className="relative h-48 bg-gray-200 dark:bg-gray-600 overflow-hidden rounded-t-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label={`${title} image carousel`}
    >
      {/* Previous/Next Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 transform translate-x-0' 
              : index < currentIndex 
                ? 'opacity-0 transform -translate-x-full' 
                : 'opacity-0 transform translate-x-full'
          }`}
          onTransitionEnd={handleTransitionEnd}
          role="group"
          aria-roledescription="slide"
          aria-label={`${title} - Image ${index + 1} of ${images.length}`}
        >
          <Image
            src={image}
            alt={`${title} - Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}

      {/* Image Navigation Dots */}
      <div 
        className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2"
        role="tablist"
        aria-label="Image navigation"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to image ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>

      {/* Pause/Play Indicator */}
      {isPaused && (
        <div className="absolute top-2 right-2 bg-black/30 text-white px-2 py-1 rounded text-sm">
          Paused
        </div>
      )}
    </div>
  );
} 