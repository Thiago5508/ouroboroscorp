'use client'
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FiLoader, FiLock, FiLogOut, FiUser } from "react-icons/fi";
import logoub from '@/assets/oub_logo.png'



export default function Header() {
  const {status,data} = useSession();

  async function handleLogin(){
    await signIn()
  }
  async function handleLogout(){
    await signOut()
  }
 return (
   <header className=" fixed top-0 left-0 w-full flex items-center px-2 py-4 bg-custom h-20 text-white z-50">
    <div className=" w-full flex max-w-7xl items-center justify-between mx-auto">
      <Link href='/'>
        <Image src={logoub} alt="logo oub" className="w-28"/>
      </Link>
      <div className=" flex content-around gap-4 font-semibold items-center">
        <Link 
          href='/' 
          className="hover:text-white   text-slate-400 hidden sm:block">HOME</Link>
        <Link 
          href='/Produtos'
          className="hover:text-white text-slate-400  text-sm sm:text-base ">WEBPRODUTOS</Link>
        <Link 
          href='/Institucional'
          className="hover:text-white text-slate-400 hidden sm:block">INSTITUCIONAL</Link>
        <Link href='/Contato' 
          className="hover:text-white text-slate-400 text-sm sm:text-base">CONTATO</Link>
      



          {status ==='loading'&&(
            <button>
              <FiLoader size={26} color="#4b5563"/>
            </button>
          )}
          {status === 'unauthenticated' &&(
            <div className="flex flex-col items-center justify-center">
              
              <button className=" hover:tracking-widest hover:text-white bg-cu hover:bg-custom-bg text-custom duration-300 rounded flex flex-1 w-full items-center justify-center" 
                onClick={handleLogin}>
                <span className="hidden sm:block">LOGIN</span>
                <FiLock size={30} color="white"/>
                
              </button>
            </div>
          )}
          {status ==='authenticated'&&(
            <div className="flex flex-row ">
              <Link href='/dashboard' className="flex flex-row">
              <span>Sr(a) {data?.user?.name?.split(" ")[0]}</span>
                <FiUser size={26} color="#4b5563"/>
              </Link>
              <button onClick={handleLogout}>
                <FiLogOut size={26} color="#4b5563"/>
              </button>
           </div>
          )}
      </div>
    </div>
   </header>
  );
}