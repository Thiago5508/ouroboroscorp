import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import logo4 from "@/assets/oub_logo5.png"

export default function Footer() {
 return (
   <main className="w-full items-center justify-center text-xl bg-custom text-white h-56">
        <div className="flex w-full h-48 items-center justify-between max-w-7xl mx-auto">
            <div className="flex flex-col">
               <Image src={logo4} className="" alt=""/>
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
            <div className="flex flex-col items-center justify-center mt-6">
                <div className="flex gap-4">
                    <h2 className="font-bold">Siga-nos</h2>
                    <Link href='/'className="flex flex-row gap-2 text-2xl"><FiInstagram /></Link>
                    <Link href='/'className="flex flex-row gap-2 text-2xl"><FiLinkedin/></Link>
                    <Link href='/'className="flex flex-row gap-2 text-2xl"><FiFacebook /></Link>
                </div>
                <span>oub.web.design@gmail.com</span>
            </div>
        </div>
        <div className="flex w-full items-baseline justify-center max-w-7xl mx-auto">
            <span>2024 &copy; Oub</span>
        </div>
   </main>
  );
}