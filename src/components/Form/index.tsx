'use client'
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        assunto: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // Número de WhatsApp para o qual enviar a mensagem (adicione o código do país e número)
        const phoneNumber = '5579998431776'; // Substitua pelo seu número de WhatsApp
    
        // Montando a mensagem a ser enviada
        const message = `Olá neu nome é ${formData.name}, gostaria de falar sobre \nMensagem: ${formData.message}`;
    
        // Gerando o link para o WhatsApp com a mensagem preenchida
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
        // Redirecionando o usuário para o WhatsApp
        window.open(whatsappLink, '_blank');

        setFormData({
          name: '',
          assunto: '',
          message: '',
        });
      };
    
      return (
        <form onSubmit={handleSubmit} className="w-full items-center flex flex-col gap-4 text-[clamp(15px,2.5vw,20px)]">

          <h1 className="text-[clamp(20px,2.5vw,28px)] w-2/3 mb-10">Envie uma mensagem para o nosso WhatsApp</h1>

          <div className="w-2/3 ">
          
            <input
              placeholder="Digite seu nome ..."
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl text-black px-6 py-4 border"
            />
          </div>

          <div className="w-2/3 flex flex-col">
            <textarea
              placeholder="digite a mensagem  ..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className=" w-full rounded-xl text-black px-6 py-4 border h-56"
            />
          </div>

          <button 
            type="submit"
            className="text-white mt-4 font-semibold px-2 py-2 w-2/3 bg-green-500 rounded-md justify-center flex items-center"><IoSend size={37}/>
          </button>
        </form>
  );
}