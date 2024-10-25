import Container from "@/components/container";
import Link from "next/link";
import foto1 from '@/assets/foto1.png'
import foto2 from '@/assets/foto2.jpg'
import Image from "next/image";
import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export default function Institucional() {
 return (
    <Container>
      <main className= " max-w-7xl mt-5 mx-auto px-2 text-white w-full h-max flex flex-col gap-8 row-start-2 items-center justify-center sm:items-center">
        <div className="flex items-center justify-center flex-col">
            <h1 className="sm:text-2xl text-xl font-semibold my-4 items-center sm:ml-10 sm:w-2/4">Sobre a Oub</h1>
            <div className="text-lg sm:w-2/4 items-center justify-center sm:ml-10 ">
              <p>Somos uma empresa voltada a oferecer soluções em design gráfico e web design para pessoas, micro, média ou grandes empresas.</p>
              
              <p>Nossa visão é ser uma empresa referência em design e web desenvolvimento.</p>
              <p>Criada por Jamisson Machado e Thiago Oliveira.</p> 
            </div>
            <div className="flex flex-col mt-6 ">
            <div className="text-lg  justify-items-end justify-center flex ">
            
            </div>
              <div className="flex sm:flex-row flex-col items-center  gap-6 mt-6">
                <div className="flex sm:w-1/4">
                  <Image src={foto1} alt="foto1" />
                </div>
                
                <div className="flex flex-col sm:w-2/4" >
                <h2 className="text-xl font-semibold sm:w-2/4 mb-10">Jamisson Machado</h2>
                  <p>Cofundador da Oub, estudante de Design Gráfico, Web Designer, voluntário na 
                    <Link 
                    className=" text-blue-500"
                      target="blank" 
                      rel="noopener noreferrer" 
                      href="https://www.projectool.com.br/" 
                      > Projectool, </Link>
                      Desenvolvedor Front-End e Artista Plástico nas horas vagas.</p>
                      <div>
                        <div>
                          <span>Tecnologias que domino:</span>
                          <span className="flex flex-row text-3xl gap-2">
                          <FaHtml5 title="HTML5"/>
                          <FaCss3Alt title="CSS"/>
                          <FaFigma title="Figma"/>
                          <FaBootstrap title="bootstrap" />
                          </span>
                          <div>
                          <span>O que estou apredendo agora:</span>
                          <span className="flex flex-row text-3xl gap-2">
                          <FaJsSquare title="JavaScript"/>
                          <FaReact title="React"/>
                          <RiNextjsFill title="Nextjs"/>
                          </span>
                        </div>
                        </div>
                      </div>
                  </div>
                  
              </div>
              <div className="flex w-full flex-col items-end justify-end">
                
                <div className="flex sm:flex-row-reverse flex-col text-right items-center  gap-6 mt-6">
                  <div className="flex sm:w-1/4">
                    <Image src={foto2} alt="foto1" className="rounded-full"/>
                  </div>
                  <div className="flex flex-col sm:w-2/4" >
                  <h2 className="text-xl font-semibold mb-10">Thiago Oliveira</h2>
                    <p>Cofundador da Oub, estudante de Análise e Desenvolvimento de Sistemas, Web Designer e Desenvolvedor Fullstack.</p>
                        <div>
                          <div>
                            <span>Tecnologias que domino</span>
                            <span className="flex flex-row-reverse text-3xl gap-2">
                            <FaHtml5 title="HTML5"/>
                            <FaCss3Alt title="CSS"/>
                            <FaJsSquare title="JavaScript"/>
                            <FaReact title="React"/>
                            <RiNextjsFill title="Nextjs"/>
                            </span>
                            <div>
                            <span>O que estou apredendo agora</span>
                            <span className="flex flex-row-reverse text-3xl gap-2">
                            <FaNodeJs title="Nodejs" />
                            
                            </span>
                          </div>
                          </div>
                        </div>
                    </div>
                    
                </div>
              </div>
            </div>
        </div>
      </main>
    </Container>
  );
}