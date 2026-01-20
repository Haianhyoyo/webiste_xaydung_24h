'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
    images: string[];
    title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                <Image
                    src={images[selectedImage]}
                    alt={`${title} - Ảnh ${selectedImage + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={selectedImage === 0}
                />
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-[4/3] overflow-hidden rounded-md border-2 transition-all ${selectedImage === index
                                ? 'border-primary ring-2 ring-primary/30'
                                : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`${title} - Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 25vw, 12vw"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
