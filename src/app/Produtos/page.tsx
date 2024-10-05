import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import produto1 from '@/assets/produto1.svg'
import produto2 from '@/assets/pexels-olly-3769021.png'


export default function Produtos() {
 return (
   <Container>
    <main className= " max-w-7xl mt-5 mx-auto px-2 text-white w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <h1 className=" w-full text-base sm:text-3xl font-semibold">Conheça todos os serviços que oferecemos!</h1>
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
                    <span className="font-semibold indent-3">WebSistema com tecnologia Next.js voltado a abertura chamados
                        e cadastramento de clientes, armazenando informações com segurança em 
                        formularios dos seus clientes você no controle do seu negocio!
                        </span>
                        <Link 
                        target="blank"
                        href='https://devcontrole-theta.vercel.app'
                        rel="noopener noreferrer"
                        className=" text-blue-500 font-bold">Clique no banner ou aqui faça um teste gratis.</Link>
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
                        <span className="font-semibold indent-3">WEBSite voltado a apresentação da sua empresa para divulgação, facilitação para que sua empresa seja preferência no googles maps, maior alcance digital,
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
    </main>
   </Container>
  );
}