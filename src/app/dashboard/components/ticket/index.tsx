'use client'
import { CustomerProps } from "@/utils/customer.type";
import { TicketProps } from "@/utils/ticket.type";
import { FiCheckSquare, FiFile, FiTrash2 } from "react-icons/fi";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { ModalContext } from "@/providers/modal";
import { useContext } from "react";

interface TicketItemProps{
    ticket: TicketProps;
    customer:CustomerProps | null;
}

export default function TicketItem({customer , ticket}:TicketItemProps) {
    const {handleModalVisible ,setDetail} = useContext(ModalContext)

    const router = useRouter()
    
    async function handleChangeStatus(){
        try{
            const response = await api.patch('/api/ticket',{
                id: ticket.id, 
            })
            router.refresh()
            }catch(err){
                console.log(err)
            }
    }
    function OpenModal(){
        handleModalVisible();
        setDetail({
            customer:customer,
            ticket:ticket,
        })
    }

    async function handleDelete(){
      
            const response = await api.delete('/api/ticket',{
                params:{
                    id:ticket.id as string,
                }
            })
            console.log(response.data)
        router.replace('/dashboard')
        router.refresh();
        alert('deletou')
    }

 return (
   <tr className=" bg-slate-100 hover:bg-slate-200 duration-300 border-b-2 border-b-slate-200 h-16 last:border-b-0">
    <td className=" pl-1 text-left">
        {customer?.name}
    </td>
    <td className="text-left hidden sm:table-cell">
        {ticket.created_at?.toLocaleDateString('pt-br')}
    </td>
    <td className="text-left ">
        <span className="bg-green-500 px-2 py-1 rounded">{ticket.status}</span>
    </td>
    <td className="text-left">
        <button className="mr-4"
        onClick={handleChangeStatus}>
            <FiCheckSquare size={24} color="gray"/>
        </button>
        <button onClick={OpenModal}>
            <FiFile size={24} color="blue"/>
        </button>
        
    </td>
    <td className="text-left">
        <button 
        className="hidden sm:block" 
        onClick={handleDelete}
        title="excluir solicitação">
            <FiTrash2 size={24} color="red"/>
        </button>
    </td>
   </tr>
   
   
  );
}