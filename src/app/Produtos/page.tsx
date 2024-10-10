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

export default function Produtos() {

 return (
   <Container>
    <main className= " max-w-7xl mt-5 mx-auto px-2 text-white w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <h1 className=" w-full text-base sm:text-3xl font-semibold">Conheça todos os serviços que oferecemos!</h1>

        <div className="mb-20">
            <h2 className="font-semibold text-lg sm:text-xl mb-4"><span className="text-blue-500 font-bold text-xl sm:text-2xl mr-1">
            Designer Gráfico</span>: compartilhe suas ideias e nós elaboramos a arte perfeita!</h2>
            <div className="flex flex-wrap gap-6 sm:justify-between justify-around">
                
                
                <BannerAmpliado 
                imagecardURL={ima2}
                imageURL={ima1}
                title="Cartazes e Banners"
                shortContent="Clique para conferir nosso último cartaz, vamos criar juntos o próximo."
                expandedContent="Cartazes, banners e folders digitais criados sob medida para seu empreendimento." 
                price="200,00 - 850,00"/>

                <BannerAmpliado 
                imagecardURL={ima4}
                imageURL={ima3}
                title="WEBsites"
                shortContent="Clique para conferir a riqueza de detalhes de nossos websites."
                expandedContent="Aqui estão os detalhes ampliados sobre a informação 2."
                price="1.500,00 - 3.000,00"/>

                <BannerAmpliado
                imagecardURL={ima6} 
                imageURL={ima5}
                title="WEBgalerias"
                shortContent="Clique para conferir as possibilidades de demonstrar a sua arte também."
                expandedContent="Você pode salvar e apresentar o seu portfolio em um só lugar ."
                price="1.000,00 - 2.000,00"/>

                <BannerAmpliado
                imageURL={ima7}
                imagecardURL={ima12} 
                title="Blogs"
                shortContent="Clique para conferir o blog resgistra a tragetoria e biografia sua ou de seu empreendimento."
                expandedContent="Blogs servem com rede informativa sobre novidades que você quer compatilhar." 
                price="1.650,00 - 5.000,00"/>

                <BannerAmpliado 
                imagecardURL={ima9}
                imageURL={ima8}
                title="Websistemas e redes sociais"
                shortContent="Clique para conferir possibilidades de como utiliza-las de forma dinâmica."
                expandedContent="Criação dinamica de perfis onde você escolhe quais informações podem ser acessadas por todos."
                price="2.500,00 - 6.550,00"/>

                <BannerAmpliado
                imagecardURL={ima10} 
                imageURL={ima11}
                title="Logomarcas e cartões de visita"
                shortContent="Clique para conferir o que estará a disposição para você e sua marca."
                expandedContent="Criamos desde as logomarcas quanto a paleta de cores, sua empresa sempre na moda."
                price="150,00 - 650,00"/>
            
            </div>
        </div>
        <h2 className="font-semibold text-base sm:text-lg ">Criação de sites para impulsionar o seu negócio </h2>
        <div className=" w-full flex flex-col mx-auto gap-10 sm:gap-14">
            <div className=" w-full flex flex-row">
                <Link
                    target="blank"
                    href='https://devcontrole-theta.vercel.app'
                    rel="noopener noreferrer"
                    className="h-28 sm:w-1/4 w-2/3"
                    >
                        <Image
                        src={produto1}
                        alt="produto1"
                    />
                </Link>
                <div className="w-full sm:w-2/4 flex flex-col text-sm sm:text-base ml-4">
                    <span className="font-semibold indent-3">WEBsistema com tecnologia Next.js voltado a abertura chamados
                        e cadastramento de clientes, armazenando informações com segurança em 
                        formularios dos seus clientes você no controle do seu negocio!
                        </span>
                        <Link 
                        target="blank"
                        href='https://devcontrole-theta.vercel.app'
                        rel="noopener noreferrer"
                        className=" text-blue-500 font-bold">Clique no banner ou aqui e faça um teste gratis.</Link>
                        <span className=" indent-3 hidden sm:block">Ex: "Infelizmente não consegui passar na loja hoje, mas queria saber quantos clientes apareceram
                        e quem foram. Além disso,será que meu colaborador conseguiu resolver todos os pedidos que estavam pendentes? Vou olhar no sitema da empresa!"
                        </span>
                </div>
            </div>

            <div className=" w-full flex flex-row">
                <Link
                        target="blank"
                        href='https://mercadooliveira.vercel.app/'
                        rel="noopener noreferrer"
                        className="h-28 sm:w-1/4 w-2/3"
                        >
                            <Image
                            src={produto2}
                            alt="produto1"
                        />
                    </Link>
                    <div className="w-full sm:w-2/4 flex flex-col text-sm sm:text-base ml-4">
                        <span className="font-semibold indent-3">WEBsite voltado a apresentação da sua empresa para divulgação, facilitação para que sua empresa seja preferência no googles maps, maior alcance digital,
                            informaçoes de contato com seu departamento de administração para que novos fornecedores encontrem o seu negocio gerando oportunidades de renda e aquisições de patrimonio. 
                            </span>
                            <span className="font-semibold indent-3 hidden sm:block" >O modelo institucional tambem inclui a historia e a tradiçao da sua empresa, contando para o mundo como foi o seu trajeto para alcaçar o sucesso. </span>
                            <Link 
                            target="blank"
                            href='https://mercadooliveira.vercel.app/'
                            rel="noopener noreferrer"
                            className=" text-blue-500 font-bold">Clique no banner ou aqui e confira nosso ultimo trabalho.</Link>
                            <span className=" indent-3 hidden sm:block">Ex: "Onde será que tem uma padaria neste bairro? Qual seria o hotel bem avaliado mais proximo?"
                            </span>
                    </div>
                </div>
            <div>
                
            </div>
        </div>
        <div className="w-full flex justify-end mx-auto h-full gap-4">
            <div>
                <p className="flex text-right flex-col max-w-xl font-semibold">
                    <span>
                        "Desenvolvemos Aplicaçoes Web para solucionar dificuldades do dia-a-dia,
                        sejam elas organizacional,
                        fluxo de caixa, agendas, banco de dados, cadastros de clientes e muito mais..."
                        </span>
                    <span> Renata Oliveira - Diretor(a) Marketing</span>
                </p>
            </div>
            <div className="max-w-96">
                <Image 
                src={hero2Img}
                alt="imagem2"
                className="w-24 sm:w-72"/>
            </div>
        
        </div>
    </main>
   </Container>
  );
}