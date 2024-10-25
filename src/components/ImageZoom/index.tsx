// components/ImageZoom.js
'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegWindowClose, FaWhatsapp } from 'react-icons/fa';


interface BannerAmpliadoProps {
  title: string; // Título do banner
  shortContent: string; // Conteúdo curto exibido inicialmente
  expandedContent: string; // Conteúdo exibido quando ampliado
  imageURL: StaticImageData | string;
  imagecardURL: StaticImageData | string;
  price: string;
}

export default function BannerAmpliado({title, shortContent, expandedContent, imageURL,imagecardURL,price}:BannerAmpliadoProps){
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };
  useEffect(() => {
    if (isExpanded) {
      // Adiciona a classe para desativar o scroll da página
      document.body.style.overflow = 'hidden';
    } else {
      // Remove a classe quando o modal é fechado
      document.body.style.overflow = 'auto';
    }

    // Limpa o efeito ao desmontar
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);


                              // whatssap
  const phoneNumber = '5579998431776'; // Substitua pelo seu número de telefone
  const message = `Olá! Eu gostaria de adquirir ${title} no valor  R$ ${price}` ; // Mensagem opcional
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative flex  text-black ">
      {/* Overlay */}
      <div className={`${isExpanded ? 'fixed inset-0 bg-black bg-opacity-50 z-50 ' : ''}`} 
      >
        
        {/* Banner */}
        <div
          className={`cursor-pointer text-center transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-w-6xl items-baseline justify-end h-full bg-white mx-auto mt-10 rounded-lg overflow-y-auto  ' : 'w-96 h-full p-4 rounded-lg'
          } bg-gray-100`}
          onClick={handleClick}
        >
          {!isExpanded ? (
            <>
              <h2 className="text-lg font-bold">{title}</h2>
              <p>{shortContent}</p>
              <Image src={imagecardURL} alt='{title}' className='max-h-52'/>
              <div className='flex flex-row justify-center items-center gap-2 mt-2'>
                <span>R$ {price}</span> 
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <button 
                    className='flex flex-row bg-white rounded-md text-black border-2 border-slate-300 hover:tracking-widest duration-300 font-semibold px-1 py-1'
                    >Obter<FaWhatsapp className='sm:text-xl text-lg text-green-600'/></button>
                </a>
              </div>
            </>
          ) : (
            <>
              <div className='flex justify-between flex-row ml-4 mt-4'>
                <h2 className="text-2xl font-bold mb-4">{expandedContent}</h2>
                <button
                  className="px-4 text-3xl py-2 sm:fixed sm:right-52 sm:top-10"
                  onClick={(e) => {
                    e.stopPropagation(); // Impede que o clique feche o banner imediatamente
                    handleClose();}}>
                  <FaRegWindowClose/>
                </button>
              </div>
              <div className=" ">
                <Image src={imageURL} alt='{title}' className='px-4 rounded-lg h-full'/>
              </div>
              <h4>{title}</h4>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};
  


