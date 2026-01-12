import Container from "@/components/container";
import foto1 from '@/assets/foto1.png'
import foto2 from '@/assets/foto2.jpg'
import Image from "next/image";

export default function Institucional() {
 return (
    <Container>
      <main className= "mx-auto text-black w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start text-xl">
        <div className="bg-white text-black rounded-md px-4 py-4 my-4 text-justify max-w-4xl items-center  mx-auto">
            <h1 className="sm:text-2xl text-xl  my-4 items-center sm:ml-10 sm:w-2/4">Sobre a Oub</h1>

            <div className="text-lg  items-center justify-center ">
              <p>Desenvolvemos soluções em design gráfico e sistemas digitais, integrando design e tecnologia por meio de processos centrados no ser humano. </p>
              <p>Atuamos com o objetivo de ser referência no desenvolvimento de soluções digitais orientadas pela centralidade no ser humano, acessibilidade como princípio, usabilidade e clareza.</p>
            </div>

            <div className="flex flex-col md:flex-row mt-6 ">
              <div className="flex flex-col items-center  gap-6 mt-6">
                <div className="flex sm:w-1/4">
                  <Image src={foto1} alt="foto1" />
                </div>
                
                <div className="flex flex-col sm:w-2/4 gap-2" >
                  <h2 className="text-xl font-semibold sm:w-2/4 mb-10">Jamisson Machado</h2>
                  <p>Designer de Interfaces</p>
                  <p> Desenvolvedor Front-End</p>
                </div>
              </div>

              <div className="flex  flex-col items-center">
                <div className="flex flex-col items-center  gap-6 mt-6">
                  <div className="flex sm:w-1/4">
                    <Image src={foto2} alt="foto1" className="rounded-lg"/>
                  </div>
                  <div className="flex flex-col sm:w-2/4 gap-4 " >
                  <h2 className="text-xl font-semibold mb-10">Thiago Oliveira</h2>
                    <p> Desenvolvedor Full-Stack</p>
                    <p>Analista de Banco de Dados</p>
                    </div>
                </div>
              </div>

            </div>
        </div>
      </main>
    </Container>
  );
}