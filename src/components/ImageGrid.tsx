import React, { useState } from 'react';
import { ImageModal } from './ImageModal';

interface ImageGridProps {
  images: string[];
}

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  if (images.length === 1) {
    return (
      <>
        <button
          onClick={() => setSelectedImageIndex(0)}
          className="block w-full max-w-lg mx-auto mt-4 overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
        >
          <img
            src={images[0]}
            alt="Post content"
            className="w-full h-auto object-cover"
          />
        </button>

        {selectedImageIndex !== null && (
          <ImageModal
            images={images}
            currentIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setSelectedImageIndex(index)}
            className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
          >
            <img
              src={image}
              alt={`Content ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <ImageModal
          images={images}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}