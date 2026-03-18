"use client";
import { useState } from 'react';
import { ImageCarousel } from './ImageCarousel';

interface ProductMediaManagerProps {
    images: string[];
    videoUrl?: string;
    altText: string;
}

export const ProductMediaManager = ({ images, videoUrl, altText }: ProductMediaManagerProps) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="relative w-full aspect-square border-b-4 border-black bg-gray-100 overflow-hidden group">
        
        {showVideo && videoUrl ? (
            <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <video
                src={videoUrl}
                controls={true}
                autoPlay={true}
                className="w-full h-full object-contain"
                aria-label={`Vídeo do produto ${altText}`}
            />
            <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 bg-white border-2 border-black text-black font-bold w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-colors z-20"
                aria-label="Fechar vídeo"
            >
                &#10005;
            </button>
            </div>
        ) : (
            <ImageCarousel images={images} altText={altText} />
        )}

        {!showVideo && videoUrl && (
            <button
            onClick={() => setShowVideo(true)}
            className="absolute bottom-2 right-2 bg-white border-2 border-black px-3 py-1 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors z-20 flex items-center gap-1.5"
            aria-label="Ver vídeo do produto"
            >
            <span className="text-[0.7rem]">&#9658;</span> Ver Vídeo
            </button>
        )}
        </div>
    );
};