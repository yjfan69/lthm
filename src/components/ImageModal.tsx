import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageModal({ images, currentIndex, onClose, onNext, onPrev }: ImageModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X size={24} />
      </button>
      
      <button
        onClick={onPrev}
        className={clsx(
          "absolute left-4 text-white hover:text-gray-300 p-2",
          currentIndex === 0 && "opacity-50 cursor-not-allowed"
        )}
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={24} />
      </button>

      <img
        src={images[currentIndex]}
        alt={`Content ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      <button
        onClick={onNext}
        className={clsx(
          "absolute right-4 text-white hover:text-gray-300 p-2",
          currentIndex === images.length - 1 && "opacity-50 cursor-not-allowed"
        )}
        disabled={currentIndex === images.length - 1}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}