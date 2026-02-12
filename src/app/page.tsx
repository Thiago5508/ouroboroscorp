import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import {  FiArrowRight} from "react-icons/fi";
import group from '../assets/group50.png'
import hero1 from '../assets/layout/hero1.png'
import hero2 from '../assets/layout/hero2.png'
import hero3 from '../assets/layout/hero3.png'
import hero4 from '../assets/layout/hero4.png'
import group2 from "@/assets/group.png";
import Social from "@/components/Social";
import section3 from "@/assets/section3.png";


export default function Home() {
  const phoneNumber = '5579998431776';
  const message = 'Olá, gostaria de falar sobre serviços digitais ofercidos pela sua empresa'
  return (
    <Container>
      <main className= "mx-auto text-black w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start text-xl">

      {/* Baner carrosel antigo nao mexer 
      <Banner/>
      */}

      
      <div className="bg-white text-black rounded-md px-4 py-4 my-4 text max-w-4xl items-center  mx-auto">
        <h1 className=" text-black text-[clamp(20px,2.5vw,28px)] mt-8">Design, Tecnologia e Experiências que <p>Conectam Pessoas e Negócios</p></h1>
        <div>
          <p className="mt-10 text-[clamp(14px,2.5vw,20px)]">Contamos com uma equipe multidisciplinar especializada em design de interfaces, 
            desenvolvimento de sistemas web e aplicativos móveis. 
            Trabalhamos com práticas contemporâneas de design e 
            processos centrados no ser humano, garantindo soluções esteticamente consistentes, funcionais e acessíveis 
            para diferentes perfis de público. Utilizamos tecnologias modernas e eficientes para entregar produtos digitais 
            alinhados às necessidades de pessoas e negócios.
          </p>   
        </div>

        <Link href={'/Institucional'} 
        className="text-[clamp(14px,2.5vw,20px)] text-black border border-[#222F37] p-1 pl-10 rounded-full flex w-fit mt-10 justify-center items-center"
        >Conheça mais sobre nós e nossa equipe<FiArrowRight color="white"size={45} className="bg-[#222F37] rounded-full ml-8 shrink-0"/></Link>
      </div>

      <Link href={'/Portfolio'} className="bg-[url('/retbar.png')] w-full h-56 flex">
        <div className="flex w-full h-full items-center justify-between max-w-7xl mx-auto">
          <span className="text-white text-[clamp(15px,2.5vw,20px)] mx-4">Clique aqui e conheça nosso portfólio</span>
            <div className="shrink-0 w-[clamp(150px,15vw,500px)]">
              <Image src={group} alt="Thumbnails do portfólio" className="w-full h-auto"/>
            </div>
        </div> 
      </Link>

      <section className="w-full items-center justify-center text-xl mt-18 md:p-0 p-6">
        <div className="text-[clamp(15px,2.5vw,20px)] md:flex w-full h-full items-baseline justify-between max-w-7xl mx-auto">

          <div className="md:w-1/5 w-full items-center flex flex-col md:block mb-14">
            <Image src={hero1} alt=""/>
            <div className="md:w-9/12 ml-2">
              <h3 className="text-orange-600 font-bold mt-6 mb-2">Construindo Sua Marca:</h3>
                <p>Identidade visual</p>
                <p>Gestão de marca</p>
                <p>Branding e Logo</p>
            </div>
          </div>

          <div className="md:w-1/5 w-full items-center flex flex-col md:block mb-14">
            <Image src={hero2} alt=""/>
            <div className="md:w-9/12 ml-2">
              <h3 className="text-purple-600 font-bold mt-6 mb-2">Edição e Impressão:</h3>
                <p>Banners</p>
                <p>Cartões de visitas</p>
                <p>Artes para impressão e afins</p>
            </div>
          </div>

          <div className="md:w-1/5 w-full items-center flex flex-col md:block mb-14">
            <Image src={hero3} alt=""/>
            <div className="md:w-9/12 ml-2">
              <h3 className="text-cyan-600 font-bold mt-6 mb-2">Alavanque Seu Negócio:</h3>
                <p>Consultoria Digital</p>
                <p>Marketing e</p>
                <p>SEO</p>
            </div>
          </div>

          <div className="md:w-1/5 w-full items-center flex flex-col md:block mb-14">
            <Image src={hero4} alt=""/>
            <div className="md:w-9/12 ml-2">
              <h3 className="text-lime-400 font-bold mt-6 mb-2">Marque Presença Digital:</h3>
                <p>Sites e Landing pages</p>
                <p>Portfolios digitais</p>
                <p>Gestão de conteúdo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-[clamp(15px,2.5vw,20px)] w-full items-center justify-center text-xl md:p-0 p-6">
        <div className="flex w-full h-full items-center justify-center md:justify-start max-w-7xl mx-auto">
          <div className="md:w-1/2 md:pr-4 mb-24 md:mb-0">
            <h4 className="text-orange-600 font-bold mb-5">Construindo Sua Marca:</h4>
            <p className="">Construir uma marca forte é fundamental para o sucesso de qualquer negócio, seja ele grande ou pequeno.
               Uma marca bem estabelecida não é apenas um logo ou um nome, mas uma representação da identidade e dos valores da sua empresa. 
              Ela cria um vínculo emocional com os seus clientes, tornando-os mais fiéis e promovendo o crescimento do seu negócio.</p>
          </div>
        </div>

        <div className="flex w-full h-full items-center justify-center md:justify-end max-w-7xl mx-auto">
          <div className="md:w-1/2 md:pl-4 mb-24 md:mb-0">
            <h4 className="text-purple-600 font-bold mb-5">Edição e Impressão</h4>
            <p className="">Os produtos gráficos são ferramentas essenciais para qualquer estratégia de marketing, pois permitem 
              transmitir mensagens de forma visualmente atraente e memorável como em cartões de visita, folhetos e flyers, posters e cartazes, 
              catálogos, banners, infográficos etc.</p>
          </div>
        </div>

        <div className="flex w-full h-full items-center justify-center md:justify-start max-w-7xl mx-auto">
          <div className="md:w-1/2 md:pr-2 mb-24 md:mb-0">
            <h4 className="text-cyan-600 font-bold mb-5">Alavanque Seu Negócio:</h4>
            <p className="">Uma consultoria digital especializada em marketing e SEO pode ser o diferencial que seu negócio precisa 
              para alcançar novos patamares. Ao contar com profissionais experientes, você terá acesso a estratégias personalizadas e eficazes para 
              aumentar sua visibilidade online, atrair mais clientes e impulsionar suas vendas.</p>
          </div>
        </div>

        <div className="flex w-full h-full items-center justify-center md:justify-end max-w-7xl mx-auto">
          <div className="md:w-1/2 md:pl-2 mb-24 md:mb-0">
            <h4 className="text-lime-400 font-bold mb-5">Marque Presença Digital:</h4>
            <p className="">Marcar presença digital é fundamental para qualquer negócio nos dias de hoje. A internet se tornou o principal 
              canal de comunicação e pesquisa das pessoas, e estar presente nesse ambiente é crucial para alcançar novos clientes e fortalecer sua marca.</p>
          </div>
        </div>
      </section>
      
      
        <Social/>
        <section className="w-full md:block hidden -mt-8" >
            <div className="hidden md:block">
              <Image src={section3} alt="section"/>
            </div>
        </section>

      <section className="w-full items-center justify-center md:block hidden">
        <div className="flex flex-col w-full h-full items-center justify-center md:justify-start  max-w-7xl mx-auto">
          <div className="mt-16">
            <h4 className="w-1/3 text-3xl">E por que ter <p>um site profissional?</p></h4>
            <p className="mt-8">A decisão de ter um site profissional ao invés de um site de plataformas prontas envolve uma série 
              de considerações que podem impactar diretamente o sucesso do seu negócio online.</p>
            <p className="mt-8">Vantagens de um site profissional:</p>
          </div>
          <Image src={group2} alt="" className="mt-10"/>
        </div>
      </section>
      </main>
      </Container>
  );
}
