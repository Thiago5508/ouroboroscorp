import Container from "@/components/container";
import Image from "next/image";
import construindo from '@/assets/construindo.png'
import marque from '@/assets/marque.png'
import produtos from '@/assets/produtos.png'
import alavanque from '@/assets/alavanque.png'

export default function Produto() {
 return (
   <Container>
    <main className="flex items-center justify-center mx-auto w-full">
      <section className="ml-9 sm:grid sm:grid-cols-2 flex flex-col w-full text-white">
        <div className=" flex flex-row w-full items-center">
          <div className="text-jam  -rotate-90 flex -m-10 h-24 w-40 font-thin text-slate-400"><p>People illustrations by Storyset</p></div>
          <div className="flex flex-row w-full -ml-10 gap-10 items-center">
          <Image
          src={construindo}
          alt="construindo"
          className="flex w-60 h-56 "/>
            <div className="ml-6 w-60 text-xl">
              <p className=" text-orange-500">Construindo Sua Marca:</p>
              <p>Identidade visual</p>
              <p>Gestão de marca</p>
              <p>Branding e Logo</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-row w-full items-center">
        <div className="text-jam -rotate-90 flex -m-10 h-24 w-40 font-thin text-slate-400 "><p>Online illustrations by Storyset</p></div>
          <div className=" flex flex-row w-full -ml-10 gap-10 items-center">
          <Image
          src={marque}
          alt="marque"
          className="flex w-56 h-56"/>
            <div className="ml-6 w-60 text-xl">
              <p className="text-lime-300">Marque Presença Digital:</p>
              <p>Sites e Landing pages</p>
              <p>Portfolios digitais</p>
              <p>Gestão de conteúdo para</p>
              <p>redes sociais</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-row w-full items-center">
          <div className="text-jam -rotate-90 flex -m-10 h-24 w-40 font-thin text-slate-400 "><p>People illustrations by Storyset</p></div>
          <div className=" flex flex-row w-full -ml-10 gap-10 items-center">
          <Image
          src={produtos}
          alt="produtos"
          className="flex w-56 h-56"/>
            <div className=" ml-6 w-60 text-xl">
              <p className="text-purple-400">Produtos Design Gráfico:</p>
              <p>Banners</p>
              <p>Cartões de visitas</p>
              <p>Artes para impressão e afins</p>
            </div>
          </div>
        </div>
        
        <div className=" flex flex-row w-full items-center">
        <div className="text-jam -rotate-90 flex -m-10 h-24 w-40 font-thin text-slate-400"><p>Business illustrations by Storyset</p></div>
        <div className=" flex flex-row w-full -ml-10 gap-10 items-center">
        <Image
          src={alavanque}
          alt="alavanque"
          className="flex w-56 h-56"/>
            <div className=" ml-6 w-60 text-xl">
              <p className="text-cyan-300">Alavanque Seu Negócio:</p>
              <p>SEO</p>
              <p>Marketing e</p>
              <p>Consultoria Digital</p>
            </div>
        </div>
        </div>
      </section>
      
      <section>
        
      </section>
    </main>
   </Container>
  );
}