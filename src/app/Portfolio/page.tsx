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
import ima8 from '@/assets/trabalhos/va.png'
import ima9 from '@/assets/trabalhos/va1.png'
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
    <main  className= "mx-auto w-full h-max flex flex-col gap-8 row-start-2 items-center">
        <div className= "max-w-7xl mt-15 mx-auto px-2 w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1 className="text-[clamp(20px,2.5vw,28px)]">Conheça nossos trabalhos!</h1>

            <div className="mb-20">


                <div className="flex flex-wrap gap-10 sm:justify-between justify-around">
                    
                    <BannerAmpliado
                    imagecardURL={rmc} 
                    imageURL={rmc1} 
                    title="Branding e identidade visual"
                    shortContent="Branding e identidade visual."
                    expandedContent="Raquel Machado Crochê"
                    />

                    <BannerAmpliado
                    imagecardURL={ima10} 
                    imageURL={ima11}
                    title="Desenvolvimento de landings pages"
                    shortContent="Landing page para espaço cultural."
                    expandedContent="Vince's Cult Café"
                    />

                    <BannerAmpliado 
                    imagecardURL={ima2}
                    imageURL={ima1}
                    title="Website"
                    shortContent="Site institucional para estúdio de tatuagem."
                    expandedContent="Tiki Tattoo" 
                    />

                    <BannerAmpliado 
                    imagecardURL={ima4}
                    imageURL={ima3}
                    title="Website"
                    shortContent="E-Commerce para agência de turismo."
                    expandedContent="Horizontal Turismo"
                    />

                    <BannerAmpliado
                    imagecardURL={ima6} 
                    imageURL={ima5}
                    title="Sites instituicionais e portfólios online"
                    shortContent="Portfólio online de fotográfico."
                    expandedContent="Jhon Doe - Fotógrafo"
                    />

                    <BannerAmpliado
                    imageURL={ima7}
                    imagecardURL={ima12} 
                    title="sistema de compra de ingressos "
                    shortContent="Site e sistema de compra de ingressos para casa de shows."
                    expandedContent="V6 Rock Bar" 
                    />

                    <BannerAmpliado 
                    imagecardURL={ima9}
                    imageURL={ima8}
                    title="Websistemas e redes sociais"
                    shortContent="Identidade visual para aplicativo."
                    expandedContent="ContrateMy"
                    />
                
                </div>
            </div>
        </div>

        <Social/>
    </main>
   </Container>
  );
}