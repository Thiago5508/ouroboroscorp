// components/ImageZoom.js
'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";

interface BannerAmpliadoProps {
  title: string;
  shortContent: string;
  expandedContent: string;
  imageURL: (StaticImageData | string)[]; // ✅ agora é ARRAY
  imagecardURL: StaticImageData | string;
}

export default function BannerAmpliado({
  title,
  shortContent,
  expandedContent,
  imageURL,
  imagecardURL
}: BannerAmpliadoProps){

  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(true);
  const handleClose = () => setIsExpanded(false);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  return (
    <div className="relative flex text-black">
      {/* Overlay */}
      <div className={`${isExpanded ? 'fixed inset-0 bg-black bg-opacity-50 z-50' : ''}`}>
        
        {/* Banner */}
        <div
          className={`cursor-pointer text-left sm:text-center transition-all duration-500 ease-in-out ${
            isExpanded
              ? 'max-w-4xl h-full bg-white mx-auto mt-10 overflow-y-auto custom-scrollbar'
              : 'md:w-90 w-75 h-full p-4'
          } bg-transparent`}
          onClick={handleClick}
        >
          {!isExpanded ? (
            <Image
              src={imagecardURL}
              alt={title}
              className="rounded-md"
            />
          ) : (
            <>
              <div className="flex justify-between sm:flex-row ml-4 mt-4">
                <div className="flex flex-col items-start ml-2 mt-4">
                  <h2 className="text-2xl font-bold mb-4">{title}</h2>
                  <p>{shortContent}</p>
                </div>

                <button
                  className="text-5xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                >
                  <IoClose/>
                </button>
              </div>

              {/* ✅ várias imagens */}
              <div className="mt-4 flex flex-col gap-">
                {imageURL.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${title} ${index + 1}`}
                    className="h-full"
                  />
                ))}
              </div>

              <h4 className="p-4">{expandedContent}</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

  


