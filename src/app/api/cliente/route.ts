import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prismaClient from "@/lib/prisma";
import { authOptions } from "@/lib/auth";




// https://localhost:300/api/cliente
export async function DELETE(request:Request){

    const session = await getServerSession(authOptions)
    if(!session || !session.user){
        return NextResponse.json({error:'Not authorized'},{status:401})
    }

   const {searchParams}= new URL (request.url)

   const userId = searchParams.get('id')

   if (!userId) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
}
   const findDelete = await prismaClient.ticket.findFirst({
    where:{
        customerID:userId
    }
   })
   if(findDelete){
    return NextResponse.json({error:'failed delete'},{status:400})
   }

   try{ await prismaClient.customer.delete({
        where:{
            id: userId as string,
        }
    })
   return NextResponse.json({message:'Customer deleted successfully'})
   
    } catch(err){
    alert('erro ao deletar')
   return NextResponse.json({error:'failed ticket'},{status:500})
   }
}