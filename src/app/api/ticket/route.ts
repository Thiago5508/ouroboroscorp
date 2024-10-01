import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function DELETE(request:Request){

    const session = await getServerSession(authOptions)
    if(!session || !session.user){
        return NextResponse.json({error:'Not authorized'},{status:401})
    }
//
   const {searchParams}= new URL (request.url)

   const userId = searchParams.get('id')

   if (!userId) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
}
   const findDelete = await prisma.ticket.findFirst({
    where:{
        customerID:userId
    }
   })
   if(findDelete){
    return NextResponse.json({error:'failed delete'},{status:400})
   }

   try{ await prisma.ticket.delete({
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

// https://localhost:300/api/ticket
export async function PATCH(request:Request){
    const session = await getServerSession(authOptions)
    if(!session || !session.user){
        return NextResponse.json({error:'Not authorized'},{status:401})
    }
//
   const {id}=await request.json()
   const findTicket = await prisma.ticket.findFirst({
    where:{
        id:id as string,
    }
   })
   if(!findTicket){
    return NextResponse.json({error:'failed ticket'},{status:400})
   }

   try{
    await prisma.ticket.update({
        where:{
            id: id as string,
        },
        data:{
            status: 'FECHADO'
        }
    })
   return NextResponse.json({message:'Status Atulizado'})
   }catch(err){
   return NextResponse.json({message:'failed ticket'},{status:400})
   }
}