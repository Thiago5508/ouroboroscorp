import Container from "@/components/container";
import foto1 from '@/assets/foto1.png'
import foto2 from '@/assets/foto2.png'
import Image from "next/image";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaBehance, FaGithub } from "react-icons/fa";
import Social from "@/components/Social";

export default function Institucional() {
 return (
    <Container>
      <main className= "mx-auto text-black w-full h-max text-xl flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="bg-white text-black rounded-md px-4 py-4 my-4 text-justify max-w-xl items-center  mx-auto">
            <h1 className="sm:text-2xl text-xl items-center my-4 ">Sobre a Oub</h1>

            <div className="text-lg  items-center justify-center gap-4 flex flex-col mb-4 ">
              <p>Desenvolvemos soluções em design gráfico e sistemas digitais, integrando design e tecnologia por meio de processos centrados no ser humano. </p>
              <p>Atuamos com o objetivo de ser referência no desenvolvimento de soluções digitais orientadas pela centralidade no ser humano, acessibilidade como princípio, usabilidade e clareza.</p>
            </div>

            <h2 className="mt-8">Nossa equipe</h2>

            <div className="flex flex-col md:flex-row mt-4 items-center justify-between">
              <div className="flex flex-col items-center  gap-6 mt-6">
                <div className="flex flex-row">
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <FiLinkedin size={30}/>
                    <FaBehance size={30}/>
                    <FiInstagram size={30}/>
                    <FaGithub size={30}/>
                  </div>
                  <Image src={foto1} alt="foto1" className="h-56 w-56"/>
                </div>
                
                <div className="flex flex-col  gap-2" >
                  <h2 className="text-xl font-semibold mb-4">Jamisson Machado</h2>
                  <p>Designer de Interfaces</p>
                  <p> Desenvolvedor Front-End</p>
                </div>
              </div>

              <div className="flex  flex-col items-center">
                <div className="flex flex-col items-center  gap-6 mt-6">
                  <div className="flex flex-row">
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <FiLinkedin size={30}/>
                      <FiInstagram size={30}/>
                      <FaGithub size={30}/>
                    </div>
                    <Image src={foto2} alt="foto1" className=" h-56 w-56 flex"/>
                  </div>
                  <div className="flex flex-col  gap-2" >
                  <h2 className="text-xl font-semibold mb-4">Thiago Oliveira</h2>
                    <p> Desenvolvedor Full-Stack</p>
                    <p>Analista de Banco de Dados</p>
                    </div>
                </div>
              </div>

            </div>
        </div>
        <Social/>
      </main>
    </Container>
  );
}