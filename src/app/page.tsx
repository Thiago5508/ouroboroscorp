import Container from "@/components/container";
import Image from "next/image";
import binoculos from '../assets/binoculos.png'
import Banner from "@/components/Banner";
import credbi from '../assets/credibilidade.png'
import foguete from '../assets/foguete.png'
import relacion from '../assets/relacionamento.png'
import market from '../assets/marketing.png'
import vendas from '../assets/vendas.png'
import elipse from '../assets/Ellipse.png'
import cara from '../assets/man-7829544_1280 1.png'
import Link from "next/link";



export default function Home() {
  const phoneNumber = '5579998431776';
  const message = 'Olá, gostaria de falar sobre serviços digitais ofercidos pela sua empresa'
  return (
    <Container>
      <main className= " max-w-7xl mx-auto px-2 text-white w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Banner/>
      <div className="bg-white text-black rounded-md px-4 mx-4 py-4 my-4 text-justify text-lg font-semibold">
        <div>
          <p className=" indent-3">Trabalhamos atualmente com modelos chaves para iniciar e alavancar no seu negocio: 
          </p>
          <p className=" indent-3">O modelo Institucional para identificar o seu negocio, posiciona-lo no google maps e abrir portas de contato com seu cliente
            e com pontencias novos fornecedores.
          </p>
          <p className=" indent-3">O modelo de Catálogo de Produtos com carrinho de compras permite que o cliente visualize todos os
             itens disponíveis na sua loja, incluindo preços e descrições dos produtos. As seleções feitas pelo cliente são
              automaticamente redirecionadas para o WhatsApp da sua empresa, gerando um pedido com o valor total, produtos escolhidos e a forma de pagamento escolhida. 
          </p>
          <p className=" indent-3">No modelo WEBSistemas de cadastro, você poderá registrar seus clientes de forma segura, armazenando dados essenciais. Além disso, 
            é possível cadastrar chamados, pedidos e solicitações de clientes. O sistema de formulários utilizado pelo WEBSistemas é totalmente customizável,
             permitindo adaptações conforme suas necessidades.
          </p>
        </div>
      </div>
      <h1 className="sm:text-2xl font-semibold text-lg">Ter um site proporciona ao seu negócio :</h1>
      <section className="grid items-baseline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={binoculos} alt="ico1" className="w-14 mt-6"/>
          <h3 className="pt-2 pb-2 font-semibold">Maior visibilidade</h3>
          <p>"Quem não é visto não é lembrado". Com um site, seu negócio ganha mais visibilidade, pois ele ficará visível 24 horas por dia, 365 dias no ano.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={credbi} alt="ico1" className="w-11 mt-6"/>
          <h3 className="pt-2 pb-2 font-semibold">Credibilidade</h3>
          <p>Ter um site trará uma imagem mais profissional ao seu negócio e consequentemente maior credibilidade e autoridade no mercado.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={foguete} alt="ico1" className="w-14 mt-6"/>
          <h3 className="pt-2 pb-2 font-semibold">Seu negócio vai além...</h3>
          <p>Ter um site trará uma imagem mais profissional ao seu negócio e consequentemente maior credibilidade e autoridade no mercado.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={relacion} alt="ico1" className="w-14 mt-6"/>
          <h3 className="pt-2 pb-2 font-semibold">Melhor relacionamento com seu público</h3>
          <p>Sites podem proporcionar um ótimo meio de interação com seu público, melhorando assim sua relação com seu cliente.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={market} alt="ico1" className="w-14 mt-6"/>
          <h3 className="pt-2 pb-2 font-semibold">Marketing mais eficiente</h3>
          <p>Sites são uma ótima ferramenta para divulgação, e te ajudará a construir a imagem da sua marca e do seu negócio.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={vendas} alt="ico1" className="w-14 mt-6"/>
          <h3 className="pt-2 pb-2 font-semibold">Mais vendas</h3>
          <p>E claro! todas essas vantagens só trarão benefícios para o seu negócio, como melhores resultados nas vendas.</p>
        </div>
      </section>
      <section className="mb-auto">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div className="flex flex-col">
            <div className="flex justify-center mt-10 sm:mb-auto mb-96">
              <Image src={elipse} alt="eli" className="w mt absolute"/>
              <Image src={cara} alt="eli" className="flex mt-6 absolute"/>
            </div>
          <div className="w-full items-center justify-center flex mt-4">
            <Link href='https://api.whatsapp.com/send?phone=5579998431776' className="bg-white w-48 flex justify-center items-center px-4 py-3 text-slate-900 font-semibold rounded-md"> Fale com a gente</Link>
          </div>
          </div>
          <div className=" flex flex-col mt-10 sm:mt-auto ">
            <h2 className="gap-2 mb-4 font-semibold sm:text-2xl text-xl">E por que ter uma site profissional?</h2>
            <p>A decisão de ter um site profissional ao invés de um site de plataformas prontas envolve uma série de considerações que podem impactar diretamente o sucesso do seu negócio online.</p>
            <p className="my-1">
            Vantagens de um Site Profissional:
            </p>
            <div className="ml-3">
              <li>Personalização completa: Um site profissional é desenvolvido sob medida para atender às suas necessidades específicas, permitindo que você tenha total controle sobre o design, a estrutura e os recursos.</li> 
                
              <li>Otimização para mecanismos de busca (SEO): Um site profissional pode ser otimizado para os principais motores de busca, como o Google, aumentando suas chances de aparecer nos primeiros resultados e atrair mais visitantes orgânicos.</li>

              <li>Escalabilidade: Um site profissional é mais fácil de expandir e adaptar às mudanças do seu negócio, permitindo que você adicione novas páginas, funcionalidades e conteúdos conforme necessário.</li>

              <li>Design exclusivo: Um design único e personalizado ajuda a fortalecer a identidade da sua marca e a se destacar da concorrência.</li>

              <li>Velocidade de carregamento: Sites profissionais são geralmente mais rápidos, o que melhora a experiência do usuário e contribui para um melhor posicionamento nos resultados de busca.</li>

              <li>Suporte técnico: Ao contratar uma empresa especializada, você terá acesso a um suporte técnico especializado para resolver qualquer problema que possa surgir.</li>

            </div> 
          </div>
        </div>
      </section>
      
      
      </main>
      </Container>
  );
}
