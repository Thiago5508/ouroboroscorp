'use client'
import { useState } from "react";

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
        const message = `Olá neu nome é ${formData.name}, gostaria de falar sobre ${formData.assunto}\nMensagem: ${formData.message}`;
    
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
        <form onSubmit={handleSubmit} className="w-full items-center flex flex-col  ">
          <div className="w-2/3 ">
            <label className="font-semibold">Nome:</label>
            <input
              placeholder="digite seu nome ..."
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md text-black px-1 "
            />
          </div>
          <div className="w-2/3 flex flex-col">
            <label>Assunto:</label>
            <input
              placeholder="digite o um titulo para o assunto que deseja ..."
              type="text"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className=" rounded-md text-black px-1"
            />
          </div>
          <div className="w-2/3 flex flex-col">
            <label>Mensagem:</label>
            <textarea
              placeholder="digite a mensagem  ..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className=" rounded-md resize-none text-black px-1"
            />
          </div>
          <button 
          type="submit"
          className="text-white mt-4 font-semibold px-2 py-1 w-2/3 bg-green-500 rounded-md">Enviar para WhatsApp</button>
        </form>
  );
}