'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, FiMenu, FiX} from "react-icons/fi";
import logoub from "@/assets/oub_logo3.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full max-w-1920 bg-white text-white z-40">

      {/* TOP BAR */}
      <div className="w-full max-w-1920 h-14 flex items-center bg-[url('/rethead.png')]">
        <div className="w-full max-w-7xl mx-auto flex justify-end px-4 gap-4">
          <span>Siga-nos</span>
          <FiInstagram size={26}/>
          <FiLinkedin size={26} />
          <FiFacebook size={26}/>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="w-full h-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <Link href="/">
            <Image src={logoub} alt="logo oub" className="w-28" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-4 font-semibold items-center">
            <Link href="/" className="text-black hover:text-slate-400">Home</Link>
            <Link href="/Portfolio" className="text-black hover:text-slate-400">Portfolio</Link>
            <Link href="/Institucional" className="text-black hover:text-slate-400">Sobre nós</Link>
            <Link href="/Contato" className="text-black hover:text-slate-400">Contato</Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Abrir menu"
          >
            {open ? <FiX size={28} color="red"/> : <FiMenu size={28} color="red"/>}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-white/10">
          <nav className="flex flex-col items-center gap-4 py-6 font-semibold">
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
