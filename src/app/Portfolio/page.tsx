import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import produto1 from '@/assets/produto1.svg'
import produto2 from '@/assets/pexels-olly-3769021.png'
import hero2Img from '@/assets/laptop.png'
import BannerAmpliado from "@/components/ImageZoom";
import ima1 from '@/assets/trabalhos/personT.png'
import ima2 from '@/assets/trabalhos/person.png'
import ima3 from '@/assets/trabalhos/ht.png'
import ima4 from '@/assets/trabalhos/ht2.png'
import ima5 from '@/assets/trabalhos/pf.png'
import ima6 from '@/assets/trabalhos/pf2.png'
import ima7 from '@/assets/trabalhos/v6.jpg'
import ima8 from '@/assets/trabalhos/cm.png'
import { contrateMyImages } from '@/assets/trabalhos/contratemy/cm';
import ima10 from '@/assets/trabalhos/vcb.jpg'
import ima11 from '@/assets/trabalhos/vcb1.jpg'
import ima12 from '@/assets/trabalhos/v62.png'
import rmc from '@/assets/trabalhos/rmc.jpg'
import rmc1 from '@/assets/trabalhos/rmc1.jpg'
import Social from "@/components/Social";

export default function Portfolio() {

    const phoneNumber = '5579998431776'; // Substitua pelo seu número de telefone
    const message = `Olá! Eu gostaria de mais informações sobre seus serviços!` ; // Mensagem opcional
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

 return (
   <Container>
    <main  className= "mx-auto w-full h-max flex flex-col gap-8 row-start-2 items-start sm:items-center">
        <div className= "max-w-7xl mx-auto px-2 w-full h-max flex flex-col gap-8 row-start-2 items-start sm:items-start">
            <h1 className="text-[clamp(20px,2.5vw,28px)] mt-15">Conheça nossos trabalhos!</h1>

            <div className="mb-20">


                <div className="flex flex-wrap gap-10 sm:justify-between justify-around">
                    
                    <BannerAmpliado 
                    imagecardURL={ima8}
                    imageURL={contrateMyImages}
                    title="ContrateMy"
                    shortContent="Estudo de caso para plataforma de contratação de serviços profissionais."
                    expandedContent=""
                    />

                    <BannerAmpliado
                    imagecardURL={rmc} 
                    imageURL={[rmc1]}
                    title="Raquel Machado Crochê"
                    shortContent="Branding e identidade visual."
                    expandedContent=""
                    />

                    <BannerAmpliado
                    imagecardURL={ima10} 
                    imageURL={[ima11]}
                    title="Vince's Cult Café"
                    shortContent="Landing page para espaço cultural."
                    expandedContent=""
                    />

                    <BannerAmpliado 
                    imagecardURL={ima2}
                    imageURL={[ima1]} 
                    title="Tiki Tattoo"
                    shortContent="Site institucional para estúdio de tatuagem."
                    expandedContent="" 
                    />

                    <BannerAmpliado 
                    imagecardURL={ima4}
                    imageURL={[ima3]}
                    title="Horizontal Turismo"
                    shortContent="E-Commerce para agência de turismo."
                    expandedContent=""
                    />

                    <BannerAmpliado
                    imagecardURL={ima6} 
                    imageURL={[ima5]}
                    title="Jhon Doe - Fotógrafo"
                    shortContent="Portfólio online de fotografias."
                    expandedContent=""
                    />

                    <BannerAmpliado
                    imagecardURL={ima12} 
                    imageURL={[ima7]}
                    title="V6 Rock Bar"
                    shortContent="Site com sistema de compra de ingressos para casa de shows."
                    expandedContent="" 
                    />
                
                </div>
            </div>
        </div>

        <Social/>
    </main>
   </Container>
  );
}