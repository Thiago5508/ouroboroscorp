'use client'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";

const schema = z.object({
    name: z.string().min(1, 'o campo nome é obrigatorio '),
    email: z.string().email('Digite um email valido.').min(1,'o email é obrigatorio.'),
    phone: z.string().refine((value)=> {
        return /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{11}$/.test(value)
    }, {
        message: 'o numero de telefone deve estar (DD) 999999999'
    }),
    address: z.string()
})

type FormData = z.infer<typeof schema>

export default function NewCustomerForm() {
    const {register,handleSubmit,formState:{errors}} = useForm<FormData>({
        resolver:zodResolver(schema)
    })

    function handleRegisterCustomer(data:FormData){
        console.log(data)
    }
 return (
   <form
    className="flex flex-col mt-6"
    onSubmit={handleSubmit(handleRegisterCustomer)}>
    <label className="mb-1 text-lg font-medium">Nome Completo:</label>
    <Input
    type="text"
    name="name"
    placeholder="Digite o nome completo"
    error={errors.name?.message}
    register={register}
    />
    <div className="flex gap-2 mt-2 my-2 flex-col sm:flex-row">
        <div className="flex-1">
            <label className="mb-1 text-lg font-medium">Telefone:</label>
             <Input
                type="text"
                name="phone"
                placeholder="Exemplo: (DD) 995959595"
                error={errors.phone?.message}
                register={register}
                />
        </div>
        <div className="flex-1">
            <label className="mb-1 text-lg font-medium">Email:</label>
                <Input
                type="email"
                name="email"
                placeholder="Digite um email valido ex: teste@gmail.com"
                error={errors.email?.message}
                register={register}
                />
        
        </div>
    </div>
    <label className="mb-1 text-lg font-medium">Endereço Completo:</label>
    <Input
        type="text"
        name="address"
        placeholder="Ex: Rua,Numero,Bairro,Cidade"
        error={errors.address?.message}
        register={register}
    />
    <button
    type="submit"
    className="bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold">
        Cadastrar
    </button>
   </form>
  );
}