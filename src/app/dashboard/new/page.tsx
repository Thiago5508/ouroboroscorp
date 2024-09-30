import Container from "@/components/container";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function NewTicket(){

    const session = await getServerSession(authOptions)
    if(!session || !session.user){
     redirect('/')
    }

    const customers = await prisma.customer.findMany({
        where:{
            userId:session.user.id
        }
    })

async function handleResgisterTicket(formData:FormData){
    'use server'
    const name = formData.get('name')
    const description = formData.get('description')
    const custormerId = formData.get('customer')
    console.log(name)
    console.log(description)
    console.log(custormerId)

    if(!name || !description || !custormerId){
        return
    }
    await prisma.ticket.create({
        data:{
            name:name as string,
            description:description as string,
            customerID:custormerId as string,
            status: 'ABERTO',
            userID:session?.user.id,
        }
    })
    redirect('/dashboard')
}
    return(
        <Container>
            <main>
                <div className=" text-white flex items-center gap-3">
                    <Link href='/dashboard'
                    className="px-4 py-1 rounded ">Voltar
                    </Link>
                    <h1 className="text-3xl font-bold">Novo Chamado</h1>
                </div>
                <form 
                className="flex flex-col mt-6"
                action={handleResgisterTicket}>
                    <label className="mb-1 font-medium text-lg text-white" >Nome do chamado</label>
                    <input 
                    type='text'
                    placeholder="Digite o chmado"
                    required
                    className="w-full border-2 rounded-md px-2 1 h-11 mb-2"
                    name="name"/>
                    <label className="mb-1 font-medium text-lg text-white" >Descreva o problema</label>
                    <textarea
                    placeholder="Descreva o problema o chamado ...."
                    required
                    className="w-full border-2 rounded-md px-2 1 h-24 mb-2  resize-none"
                    name="description"/>
                    <label className="mb-1 font-medium text-lg text-white" >Selecione o cliente</label>
                    {customers.length !== 0 && (
                        <>
                            <select
                            className="w-full border-2 rounded-md px-2 1 h-11 mb-2  resize-none"
                            name='customer'>
                            {customers.map(customer =>(
                                <option 
                                key={customer.id}
                                value={customer.id}>{customer.name}</option>
                            ))}
                    </select>
                        </>
                    )}
                    {customers.length === 0 &&(
                        <Link href='/dashboard/custormer/new'>
                            Você ainda não tem nenhum cliente cadastrado!<span className="text-blue-500 font-medium">Cadastrar Cliente</span>
                        </Link>
                    )}
                    <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold px-2 h-11 rounded-md my-4 disabled:bg-gray-400 disabeld:cursor-not-allowed"
                    disabled={customers.length===0}
                        >Cadastrar
                    </button>
                </form>
            </main>
        </Container>
    )
}