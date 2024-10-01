'use client'
import { api } from "@/lib/api";
import { CustomerProps } from "@/utils/customer.type";
import { useRouter } from "next/navigation";




export default function CardCustomer({customer}:{customer:CustomerProps}) {

    const router = useRouter()

    async function handleDelete(){
      
            const response = await api.delete('/api/cliente',{
                params:{
                    id:customer.id as string,
                }
            })
            console.log(response.data)
        router.replace('/dashboard/customer')
        router.refresh();
        alert('deletou')
    }
    async function handleinfo(){
    alert(customer.info)
}
 return (
   <article className="flex flex-col bg-gray-100 border-2 p-2 rounded gap-2 hover:scale-105 duration-300">
    <h2>
        <a className="font-bold">Nome:</a>{customer.name}</h2>
        <p><a className="font-bold">Email:</a>{customer.email}</p>
        <p><a className="font-bold">Telefone:</a>{customer.phone}</p>
        <p><a className="font-bold">Senha:</a>{customer.key}</p>
       <div className="self-end">
       <button className="bg-blue-500 px-4 rounded text-white mt-2 mr-2">
            Alterar
        </button>
        <button
        className="bg-red-500 px-4 rounded text-white mt-2 mr-2"
        onClick={handleDelete}>
            Deletar
        </button>
        <button
        className="bg-green-500 px-4 rounded text-white mt-2 mr-2"
        onClick={handleinfo}>
            Informações
        </button>
       </div>

   </article>
  );
}