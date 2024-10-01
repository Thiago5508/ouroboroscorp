'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLoader, FiLock, FiLogOut, FiUser } from "react-icons/fi";


export default function Header() {
  const {status,data} = useSession();
  

  async function handleLogin(){
    await signIn()
  }
  async function handleLogout(){
    await signOut()
  }
 return (
   <header className=" w-full flex items-center px-2 py-4 bg-black h-20 text-white ">
    <div className=" w-full flex max-w-7xl items-center justify-between mx-auto">
      <Link href='/'>
        <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
            <span className="text-blue-800">OUB</span>CORP
        </h1>
      </Link>
      <div className=" flex content-around gap-4 font-semibold items-center ">
        <span className="hover:text-blue-900 hover:tracking-widest duration-300">WEBPRODUTOS</span>
        <span className="hover:text-blue-900 hover:tracking-widest duration-300">NOSSOS CLIENTES</span>
        <span className="hover:text-blue-900 hover:tracking-widest duration-300">INSTITUCIONAL</span>
        <span className="hover:text-blue-900 hover:tracking-widest duration-300">CONTATO</span>
      



          {status ==='loading'&&(
            <button>
              <FiLoader size={26} color="#4b5563"/>
            </button>
          )}
          {status === 'unauthenticated' &&(
            <div className="flex flex-col items-center justify-center">
              
              <button className=" hover:tracking-widest hover:text-white hover:bg-black duration-300 rounded text-black flex flex-1 w-full items-center justify-center" onClick={handleLogin}>
              
                <FiLock size={30} color="#4b5563"/>
                <span>AREA PARA ASSOCIADOS</span>
              </button>
            </div>
          )}
          {status ==='authenticated'&&(
            <div className="flex flex-row ">
              <Link href='/dashboard' className="">
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