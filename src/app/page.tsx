import Container from "@/components/container";
import Image from "next/image";
import heroImg from '../assets/hero3.png'
import hero2Img from '../assets/laptop.png'

export default function Home() {
  return (
    <Container>
      <main className= " max-w-7xl mx-auto px-2 text-white w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 
        className="w-full text-3xl font-semibold flex items-center justify-center">
          Soluções inovadoras para sua empresa 
          </h1>
      <div>
        <Image 
        src={heroImg}
        alt="banner"
        className="w-full"/>
      </div>
      <div className="w-full flex justify-end mx-auto h-full">
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
