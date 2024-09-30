import Container from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import TicketItem from "./components/ticket";
import prismaClient from "@/lib/prisma";

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
 if(!session || !session.user){
  redirect('/')
 }

 const tickets = await prismaClient.ticket.findMany({
  where:{
    userID:session.user.id,
    status: 'ABERTO'
  },
  include:{
    customer:true
  },
  orderBy:{
    created_at:'desc'
  }
 })
 const ticketsF = await prismaClient.ticket.findMany({
  where:{
    userID:session.user.id,
    status: 'FECHADO'
  },
  include:{
    customer:true
  },
  orderBy:{
    created_at:'desc'
  }
 })
 

 return (
    <Container>
        <main className="mt-9 mb-2">
          <div className="flex items-center justify-between">
            <h1 className=" text-white text-3xl font-bold">Chamados</h1>
              <Link href='/dashboard/new' className="bg-blue-500 px-4 py-1 rounded text-white">
                Abrir Solicitaçao</Link>
          </div>
        </main>
        <table className="min-w-full my-2">
          <thead>
            <tr className="text-white">
              <th className="font-medium text-left">Clinte</th>
              <th className="font-medium text-left hidden sm:block">Data cadastro</th>
              <th className="font-medium text-left">STATUS</th>
              <th className="font-medium text-left">#</th>
             </tr> 
          </thead>
          <tbody>
              {tickets.map(ticket =>(
                <TicketItem 
                key={ticket.id}
                customer={ticket.customer}
                ticket={ticket}
                />
              ))} 
              {ticketsF.map(ticket =>(
                <TicketItem 
                key={ticket.id}
                customer={ticket.customer}
                ticket={ticket}
                />
              ))}
          </tbody>

        </table>
        {tickets.length === 0 &&(
          <h1 className="text-3xl px-2 text-white">Nenhum ticket aberto encontrado....</h1>
        )}
    </Container>
  );
}