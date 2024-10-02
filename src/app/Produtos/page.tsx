import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import produto1 from '@/assets/produto1.svg'


export default function Produtos() {
 return (
   <Container>
    <main className= " max-w-7xl mt-5 mx-auto px-2 text-white w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <h1 className=" w-full text-base sm:text-3xl font-semibold">Conheça todos os serviços que oferecemos!</h1>
        <div className=" w-full flex flex-col mx-auto">
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
                <div className="w-full sm:w-2/4 flex flex-col text-sm sm:text-base">
                    <span className="font-semibold indent-3">WebSistema com tecnologia Next.js voltado a abertura chamados
                        e cadastramento de clientes, armazenando informações com segurança em 
                        formularios dos seus clientes você no controle do seu negocio!
                        </span>
                        <span className=" indent-3 text-blue-500 font-bold">Clique no banner ou aqui faça um teste gratis.</span>
                        <span className=" indent-3 hidden sm:block">Ex: "Infelizmente não consegui passar na loja hoje, mas queria saber quantos clientes apareceram
                        e quem foram. Além disso,será que meu colaborador conseguiu resolver todos os pedidos que estavam pendentes? Vou olhar no sitema da empresa!"
                        </span>
                </div>
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
        </div>
    </main>
   </Container>
  );
}