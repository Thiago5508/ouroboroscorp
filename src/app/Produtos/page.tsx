import Container from "@/components/container";
import Image from "next/image";
import construindo from '@/assets/construindo.png'
import marque from '@/assets/marque.png'
import produtos from '@/assets/produtos.png'
import alavanque from '@/assets/alavanque.png'
import Link from "next/link";

export default function Produto() {
 return (
   <Container>
    <main className="flex items-center justify-center mx-auto w-full flex-col">
      <section className="ml-9 sm:grid sm:grid-cols-2 flex flex-col w-full text-white">

        <div className=" flex flex-row w-full items-center">
          <div className=" flex sm:mb-10"><p className="text-jam  -rotate-90 flex sm:-m-10 h-24 w-40 font-thin text-slate-400">People illustrations by Storyset</p></div>
            <div className="flex sm:flex-row flex-col w-full sm:-ml-10 -ml-48 gap-10 items-center">
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
          <div className="flex sm:mb-10"><p className="text-jam  -rotate-90 flex sm:-m-10 h-24 w-40 font-thin text-slate-400">Online illustrations by Storyset</p></div>
            <div className=" flex sm:flex-row flex-col w-full sm:-ml-10 -ml-48 gap-10 items-center">
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
          <div className="flex sm:mb-10"><p className="text-jam  -rotate-90 flex sm:-m-10 h-24 w-40 font-thin text-slate-400">People illustrations by Storyset</p></div>
          <div className=" flex sm:flex-row flex-col w-full sm:-ml-10 -ml-48 gap-10 items-center">
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
        <div className="flex sm:mb-10"><p className="text-jam  -rotate-90 flex sm:-m-10 h-24 w-40 font-thin text-slate-400">Business illustrations by Storyset</p></div>
        <div className=" flex sm:flex-row flex-col w-full sm:-ml-10 -ml-48 gap-10 items-center">
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
      
      <section className="flex flex-col text-lg w-full items-center justify-center">
        <div className="w-full items-center justify-center flex mt-24 mb-16">
            <Link href='https://api.whatsapp.com/send?phone=5579998431776' className="bg-white w-48 flex justify-center items-center px-4 py-3 text-slate-900 font-semibold rounded-md"> Fale com a gente</Link>
        </div>
        <div className="sm:grid sm:grid-cols-2 flex flex-col justify-between mt-4 text-white mb-28 sm:w-full gap-5 w-4/5">
          <div className="flex w-full flex-col sm:gap-2 gap-5">
            <p className="text-orange-500 sm:font-semibold font-bold">
            Construindo Sua Marca:</p>
              <p>Construir uma marca forte é fundamental para o sucesso de qualquer negócio, seja ele grande ou pequeno. Uma marca bem estabelecida não é apenas um logo ou um nome, mas uma representação da identidade e dos valores da sua empresa. Ela cria um vínculo emocional com os seus clientes, tornando-os mais fiéis e promovendo o crescimento do seu negócio.</p>
            
            <p className="sm:mt-32 text-cyan-300 sm:font-semibold font-bold mt-6">
            Alavanque Seu Negócio:</p>
              <p>Uma consultoria digital especializada em marketing e SEO pode ser o diferencial que seu negócio precisa para alcançar novos patamares. Ao contar com profissionais experientes, você terá acesso a estratégias personalizadas e eficazes para aumentar sua visibilidade online, atrair mais clientes e impulsionar suas vendas.
              
            </p>
          </div>
          <div className="flex w-full flex-col sm:mt-44 sm:p-6 sm:gap-2 gap-5 mt-6">
            <p className="text-lime-300 sm:font-semibold font-bold">Marque Presença Digital:</p>
              <p>Marcar presença digital é fundamental para qualquer negócio nos dias de hoje. A internet se tornou o principal canal de comunicação e pesquisa das pessoas, e estar presente nesse ambiente é crucial para alcançar novos clientes e fortalecer sua marca.</p>
            
            <p className="sm:mt-48 text-purple-400 sm:font-semibold font-bold mt-6">Produtos Para Gráfica:</p>
              <p>
              Os produtos gráficos são ferramentas essenciais para qualquer estratégia de marketing, pois permitem transmitir mensagens de forma visualmente atraente e memorável como em cartões de visita, folhetos e flyers, posters e cartazes, catálogos, banners, infográficos etc.</p>
            

          </div>
        </div>
      </section>
    </main>
   </Container>
  );
}