import Container from "@/components/container";
import Image from "next/image";
import binoculos from '../assets/binoculos.png'
import Banner from "@/components/Banner";
import credbi from '../assets/credibilidade.png'
import foguete from '../assets/foguete.png'
import relacion from '../assets/relacionamento.png'
import market from '../assets/marketing.png'
import vendas from '../assets/vendas.png'

export default function Home() {
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
          <h3>Maior visibilidade</h3>
          <p>"Quem não é visto não é lembrado". Com um site, seu negócio ganha mais visibilidade, pois ele ficará visível 24 horas por dia, 365 dias no ano.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={credbi} alt="ico1" className="w-14 mt-6"/>
          <h3>Credibilidade</h3>
          <p>Ter um site trará uma imagem mais profissional ao seu negócio e consequentemente maior credibilidade e autoridade no mercado.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={foguete} alt="ico1" className="w-14 mt-6"/>
          <h3>Seu negócio vai além...</h3>
          <p>Ter um site trará uma imagem mais profissional ao seu negócio e consequentemente maior credibilidade e autoridade no mercado.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={relacion} alt="ico1" className="w-14 mt-6"/>
          <h3>Melhor relacionamento com seu público</h3>
          <p>Sites podem proporcionar um ótimo meio de interação com seu público, melhorando assim sua relação com seu cliente.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={market} alt="ico1" className="w-14 mt-6"/>
          <h3>Marketing mais eficiente</h3>
          <p>Sites são uma ótima ferramenta para divulgação, e te ajudará a construir a imagem da sua marca e do seu negócio.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image src={vendas} alt="ico1" className="w-14 mt-6"/>
          <h3>Mais vendas</h3>
          <p>E claro! todas essas vantagens só trarão benefícios para o seu negócio, como melhores resultados nas vendas.</p>
        </div>
      </section>
      
      
      </main>
      </Container>
  );
}
