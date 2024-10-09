'use client'
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import hero3 from '../../assets/hero3.png';
import hero5 from '../../assets/hero5.jpg';
import hero6 from '../../assets/hero6.webp';
import Image from 'next/image';
import './index.css'



export default function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: hero5, alt: 'Imagem 1', text: 'A empresa que estará com você do inicio ao fim.' },
        { src: hero3, alt: 'Imagem 2', text: 'Solucões tecnologicas que fazem a diferença.' },
        { src: hero6, alt: 'Imagem 3', text: 'Transformando Negócios com Design inovador' },
        { src: hero3, alt: 'Imagem 4', text: 'Tudo que você precisa a um clique!' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Troca a imagem a cada 5 segundos

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleDotClick = (index:number) => {
        setCurrentImageIndex(index); // Muda para a imagem correspondente ao índice do indicador
    };

    return (
        <div className='relative flex flex-col justify-center items-center w-full h-44 sm:h-96 overflow-hidden'>
            <AnimatePresence>
                <motion.div
                    key={currentImageIndex}
                    initial={{ x: '100%', opacity: 0 }} // Começa fora da tela à direita
                    animate={{ x: 0, opacity: 1 }} // Mova para a posição original
                    exit={{ x: '-100%', opacity: 0 }} // Sai pela esquerda
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='absolute h-full w-full'
                >
                    <Image 
                        src={images[currentImageIndex].src} 
                        alt={images[currentImageIndex].alt} 
                        className='rounded-md object-cover h-full w-full'
                    />
                    <div className="absolute top-0 left-0 w-full bg-opacity-50 p-2">
                        <h2 className="md:text-2xl text-base font-bold text-emerald-900 bg-slate-100 opacity-90 rounded-full text-center">
                            {images[currentImageIndex].text}
                        </h2>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Indicadores de imagem */}
            <div className="flex z-10 justify-center mt-auto px-2  mb-1"> {/* Adicione z-10 para garantir que os indicadores fiquem acima das imagens */}
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`indicator  ${currentImageIndex === index ? 'indicator-active' : 'indicator-inactive'}`}
                    />
                ))}
            </div>
        </div>
    );
}
