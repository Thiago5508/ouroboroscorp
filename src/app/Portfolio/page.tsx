import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import produto1 from '@/assets/produto1.svg'
import produto2 from '@/assets/pexels-olly-3769021.png'
import hero2Img from '@/assets/laptop.png'
import BannerAmpliado from "@/components/ImageZoom";
import ima1 from '@/assets/trabalhos/aescolha.png'
import ima2 from '@/assets/trabalhos/a_escolha1.png'
import ima3 from '@/assets/trabalhos/ht.png'
import ima4 from '@/assets/trabalhos/ht1.png'
import ima5 from '@/assets/trabalhos/pf.png'
import ima6 from '@/assets/trabalhos/pf1.png'
import ima7 from '@/assets/trabalhos/v6.jpg'
import ima8 from '@/assets/trabalhos/va.png'
import ima9 from '@/assets/trabalhos/va1.png'
import ima10 from '@/assets/trabalhos/vcb.png'
import ima11 from '@/assets/trabalhos/vcblogo.png'
import ima12 from '@/assets/trabalhos/v61.png'

import { i } from "framer-motion/client";

export default function Portfolio() {
    const phoneNumber = '5579998431776'; // Substitua pelo seu número de telefone
    const message = `Olá! Eu gostaria de mais informações sobre seus serviços!` ; // Mensagem opcional
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

 return (
   <Container>
    <main className= " max-w-7xl mt-5 mx-auto px-2 text-white w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <h1 className=" w-full text-base sm:text-3xl font-semibold ml-4">Conheça nossos trabalhos!</h1>

        <div className="mb-20 px-2 ">


            <div className="flex flex-wrap gap-6 sm:justify-between justify-around">
                
                
                <BannerAmpliado 
                imagecardURL={ima2}
                imageURL={ima1}
                title="Cartazes e Banners"
                shortContent="Clique para conferir nosso último cartaz, vamos criar juntos o próximo."
                expandedContent="Cartazes, banners e folders digitais criados sob medida para seu empreendimento." 
                />

                <BannerAmpliado 
                imagecardURL={ima4}
                imageURL={ima3}
                title="WEBsites"
                shortContent="Clique para conferir a riqueza de detalhes de nossos websites."
                expandedContent="Aqui estão os detalhes ampliados sobre a informação 2."
                />

                <BannerAmpliado
                imagecardURL={ima6} 
                imageURL={ima5}
                title="WEBgalerias"
                shortContent="Clique para conferir as possibilidades de demonstrar a sua arte também."
                expandedContent="Você pode salvar e apresentar o seu portfolio em um só lugar ."
                />

                <BannerAmpliado
                imageURL={ima7}
                imagecardURL={ima12} 
                title="Blogs"
                shortContent="Clique para conferir, o blog resgistra a tragetoria e biografia sua ou de seu empreendimento."
                expandedContent="Blogs servem com rede informativa sobre novidades que você quer compatilhar." 
                />

                <BannerAmpliado 
                imagecardURL={ima9}
                imageURL={ima8}
                title="Websistemas e redes sociais"
                shortContent="Clique para conferir possibilidades de como utiliza-las de forma dinâmica."
                expandedContent="Criação dinamica de perfis onde você escolhe quais informações podem ser acessadas por todos."
                />

                <BannerAmpliado
                imagecardURL={ima10} 
                imageURL={ima11}
                title="Logomarcas e cartões de visita"
                shortContent="Clique para conferir o que estará a disposição para você e sua marca."
                expandedContent="Criamos desde as logomarcas quanto a paleta de cores, sua empresa sempre na moda."
                />
            
            </div>
        </div>

        <div className=" w-full flex flex-col mx-auto gap-10 sm:gap-14 bg-white text-black rounded-md h-full ">

            <div className=" w-full flex sm:flex-row flex-col justify-start gap-5 h-full">
                
                <Link
                        target="blank"
                        href='https://mercadooliveira.vercel.app/'
                        rel="noopener noreferrer"
                        className="sm:w-1/4 w-2/3 m-10"
                        >
                            <Image
                            src={produto2}
                            alt="produto1"
                            className="rounded-md"
                        />
                </Link>
                <div className="w-2/3 sm:w-2/4 flex flex-col ml-4 gap-4 mt-20 h-full text-lg">
                    <h2 className="font-semibold text-base sm:text-lg text-bold ">Em que podemos te ajudar?</h2>
                        <p>
                            Fale conosco para conhecer mais sobre nossos serviços e 
                            conte-nos sobre seu negócio.
                            <p>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                 <button className="bg-slate-900 text-white py-3 px-6 rounded-md mt-4">Fale com a gente!</button>
                                </a>
                            </p>
                        </p>
                        <p className="flex flex-col max-w-xl gap-4 mt-10">
                                "Desenvolvemos Aplicaçoes Web para solucionar dificuldades do dia-a-dia,
                                sejam elas organizacional,
                                fluxo de caixa, agendas, banco de dados, cadastros de clientes e muito mais..."

                        <span className="mb-10"> Renata Oliveira - Diretor(a) Marketing</span>
                    </p>
                </div>
            </div>
        </div>
    </main>
   </Container>
  );
}