import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import logo4 from "@/assets/oub_logo5.png"

// coloca o ano atual dinamicamente no rodapé
const currentYear = new Date().getFullYear();

export default function Footer() {
 return (
   <main className="text-[clamp(10px,2.5vw,15px)] px-4 w-full items-center justify-center bg-[#222F37] text-white h-56 font-roboto">
        <div className="flex w-full h-48 items-center justify-between max-w-7xl mx-auto">
            <div className="flex flex-col">
               <Image src={logo4} className="shrink-0 w-[clamp(50px,15vw,128px)]" alt=""/>
            </div>

            <div className="md:flex justify-around w-1/3 mx-auto hidden">
                <div className="flex flex-col">
                <Link href='/'>Home</Link>
                </div>
                <div className="flex flex-col">
                    <Link href='/Portfolio' >Portfólio</Link>
                </div>
                <div className="flex flex-col">
                    <Link href='/Portfolio' >Sobre nós</Link>
                </div>
                <div className="flex flex-col">
                    <Link href='/Portfolio'>Contato</Link>
                </div>
            </div>
            <div className="flex flex-col items-end justify-center ">
                <div className="flex gap-5 mb-5">
                    <h2 className="font-bold">Siga-nos</h2>
                    <Link href='https://www.instagram.com/oubcorp/'className="flex flex-row gap-2 text-2xl"><FiInstagram /></Link>
                    <Link href='https://www.linkedin.com/company/oubdw'className="flex flex-row gap-2 text-2xl"><FiLinkedin/></Link>
                    <Link href='https://www.facebook.com/profile.php?id=61587247004065'className="flex flex-row gap-2 text-2xl"><FiFacebook /></Link>
                </div>
                <span>oub.web.design@gmail.com</span>
            </div>
        </div>
        <div className="flex w-full items-baseline justify-center max-w-7xl mx-auto text-[#83929C]">
            <span>{currentYear} &copy; Oub</span>
        </div>
   </main>
  );
}