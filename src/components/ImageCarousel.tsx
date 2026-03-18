"use client";
/* eslint-disable */

import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface ImageCarouselProps {
    images: string[];
    altText: string;
}

export const ImageCarousel = ({ images, altText }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => nextImage(),  
        onSwipedRight: () => prevImage(), 
        trackMouse: true,                 
        preventScrollOnSwipe: true,       
    });

    return (
        <div
        className="relative w-full aspect-square border-b-4 border-black bg-white overflow-hidden group"
        {...handlers} 
        >
        <img
            src={images[currentIndex]}
            alt={`${altText} - Imagem ${currentIndex + 1}`}
            className="w-full h-full object-cover"
        />
        
        
        {images.length > 1 && (
            <>
            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black text-black font-bold w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                aria-label="Imagem anterior"
            >
                &#8592;
            </button>
            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black text-black font-bold w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                aria-label="Próxima imagem"
            >
                &#8594;
            </button>
            <div className="absolute bottom-2 right-2 bg-white border-2 border-black px-2 py-1 text-xs font-bold indicator-text">
                {currentIndex + 1} / {images.length}
            </div>
            </>
        )}
        </div>
    );
};