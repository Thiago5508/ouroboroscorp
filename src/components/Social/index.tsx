'use client';
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin,} from "react-icons/fi";
import logoub from "@/assets/oub_logo4.png";

export default function Social() {

  return (
    <section className="w-full md:block hidden" >
        <div className="flex w-full h-full items-center justify-start max-w-7xl mx-auto ">
          <div className="bg-[url('/background1.png')] h-14 w-28 items-end flex  justify-center">
            <Image src={logoub} alt="logo"/>
          </div>
       </div>
        <div className="bg-[url('/retbody.png')] w-full h-56">
          <div className="flex w-full h-full items-center justify-between max-w-7xl mx-auto">
            <div className="w-1/2">
              <span className="text-3xl text-white">Siga a Oub nas redes sociais e conheça mais do nosso trabalho!</span>
            </div>
            <div className="w-1/2 flex justify-end items-center gap-20">
              <Link href="https://www.instagram.com/oubcorp/" target="_blank">
                <FiInstagram color="white" size={80}/>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61587247004065" target="_blank">
                <FiFacebook color="white" size={80}/>
              </Link>
              <Link href="https://www.linkedin.com/company/oubdw" target="_blank">
                <FiLinkedin color="white" size={80}/>
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
}
