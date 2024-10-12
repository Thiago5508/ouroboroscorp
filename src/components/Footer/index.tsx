import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram } from "react-icons/fi";

export default function Footer() {
 return (
   <main className=" mx-auto rounded-md w-full flex max-w-7xl flex-col items-center justify-center mt-10 bg-white text-black ">
        <div className="flex flex-row w-full justify-between mx-auto gap-2 px-4 py-2">
            <div className="flex flex-col">
                <h2 className="font-bold">Links uteis</h2>
                <Link href='/'>Home</Link>
                <Link href='/Dashboard'>Login</Link>
                <Link href='/Produtos'>Produtos</Link>
                <Link href='/Institucional'>Institucional</Link>
            </div>
            <div className="flex flex-col">
                <h2 className="font-bold">Parceiros</h2>
                <Link href='#'>Design JM</Link>
                
            
            </div>
            <div className="flex flex-col">
                <h2 className="font-bold">Endereço</h2>
                <Link href='/Contato' className="flex flex-col">Av. Delmiro Gouveia, 400
                <span>- Coroa do Meio, Aracaju-SE</span>
                <span>49035-500</span></Link>
            </div>
            <div className="flex flex-col">
                <h2 className="font-bold">Siga-nos</h2>
                <Link href='/'className="flex flex-row gap-2 text-2xl">
                <FiFacebook />
                <FiInstagram />
                <FaWhatsapp />
                </Link>
            </div>
        </div>
        <div className="mb-4 font-bold">
            <span>&copy;Ouroboros Corporation</span>
        </div>
   </main>
  );
}