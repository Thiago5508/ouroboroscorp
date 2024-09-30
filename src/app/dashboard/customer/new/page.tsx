import Container from "@/components/container";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function NewCustomer(){

    const session = await getServerSession(authOptions)
    if(!session || !session.user){
     redirect('/')
    }

    async function handleResgisterClient(formData:FormData){
        'use server'
        const name = formData.get('name')
        const phone = formData.get('phone')
        const email = formData.get('email')
        const adress = formData.get('adress')
        
        
        
    
        if(!name || !phone || !email || !adress){
            return
    }
    await prismaClient.customer.create({
        data:{
            name: name as string,
            phone:phone as string,
            email:email as string,
            adress:adress as string,
            userId:session?.user.id,
        }
    })
    redirect('/dashboard/customer')
}

    return(
        <Container>
            <main>
                <div className=" text-white flex items-center gap-3">
                    <Link href='/dashboard'
                    className="px-4 py-1 rounded ">Voltar
                    </Link>
                    <h1 className="text-3xl font-bold">Cadastrar Clientes</h1>
                </div>
                <form className="flex flex-col mt-6"
                action={handleResgisterClient}>
                    <label className="mb-1 font-medium text-lg text-white" >Nome:</label>
                    <input 
                    type='text'
                    placeholder="Digite o nome completo..."
                    required
                    className="w-full border-2 rounded-md px-2 1 h-11 mb-2"
                    name='name'/>
                    <div className="flex gap-2">
                        <div className="w-full">
                            <label className="mb-1 font-medium text-lg text-white" >Telefone:</label>
                                <input 
                                type='text'
                                placeholder="Telefone Ex: 79999323146"
                                required
                                className="w-full border-2 rounded-md px-2 1 h-11 mb-2"
                                name="phone"/>
                        </div>
                        <div className="w-full">
                            <label className="mb-1 font-medium text-lg text-white" >Email:</label>
                            <input 
                            type='text'
                            placeholder="Email EX: teste@gmail.com"
                            required
                            className="w-full border-2 rounded-md px-2 1 h-11 mb-2"
                            name="email"/>
                        </div>
                    
                    </div>
                    <label className="mb-1 font-medium text-lg text-white" >Endereço:</label>
                    <input 
                    type='text'
                    placeholder="Endereço completo Ex:rua,numro,bairro,cidade,CEP"
                    required
                    className="w-full border-2 rounded-md px-2 1 h-11 mb-2"
                    name="adress"/>
                    <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold px-2 h-11 rounded-md my-4 disabled:bg-gray-400"
                        >Cadastrar
                    </button>
                </form>
            </main>
        </Container>
    )
}