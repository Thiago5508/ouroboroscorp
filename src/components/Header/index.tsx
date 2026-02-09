'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, FiMenu, FiX, FiArrowRight} from "react-icons/fi";
import logoub from "@/assets/oub_logo3.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full max-w-1920 bg-white text-white z-40">

      {/* TOP BAR */}
      <div className="w-full max-w-1920 h-14 flex items-center bg-[url('/rethead.png')] font-roboto">
        <div className="w-full max-w-7xl mx-auto flex justify-end px-4 gap-4">
          <span>Siga-nos</span>
          <Link href="https://www.instagram.com/oubcorp/" target="_blank"><FiInstagram size={26}/></Link>
          <Link href="https://www.linkedin.com/company/oubdw" target="_blank"><FiLinkedin size={26} /></Link>
          <Link href="https://www.facebook.com/profile.php?id=61587247004065" target="_blank"><FiFacebook size={26}/></Link>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="w-full h-14 flex items-center">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <Link href="/">
            <Image src={logoub} alt="logo oub" className="w-19" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-6 font-semibold items-center text-[#222F37] font-roboto">
            <Link href="/" className="hover:text-slate-400">Home</Link>
            <Link href="/Portfolio" className="hover:text-slate-400">Portfólio</Link>
            <Link href="/Institucional" className="hover:text-slate-400">Sobre nós</Link>
            <Link href="/Contato" className="pr-8 text-normal text-[#21C063] hover:text-slate-400 border border-[#21C063] p-0.5 rounded-full flex w-fit font-roboto"><FiArrowRight color="white"size={24} className="bg-[#21C063] rounded-full mr-4"/>Contato</Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Abrir menu"
          >
            {open ? <FiX size={28} color="#222F37"/> : <FiMenu size={28} color="#222F37"/>}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-white/10">
          <nav className="flex flex-col items-center gap-4 py-6 font-semibold ">
            <Link className="text-black hover:text-slate-400" onClick={() => setOpen(false)} href="/">Home</Link>
            <Link className="text-black hover:text-slate-400" onClick={() => setOpen(false)} href="/Portfolio">Portfolio</Link>
            <Link className="text-black hover:text-slate-400" onClick={() => setOpen(false)} href="/Institucional">Sobre nós</Link>
            <Link className="text-black hover:text-slate-400" onClick={() => setOpen(false)} href="/Contato">Contato</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
