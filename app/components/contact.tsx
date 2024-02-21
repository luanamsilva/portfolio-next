"use client"
import React from 'react';
import { Button } from '@nextui-org/react';
import {useForm} from 'react-hook-form'
import { useTheme } from "next-themes";
import { z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import  emailjs  from '@emailjs/browser';


const contactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(3).max(500),
 
})

type ContactFormData = z.infer<typeof contactFormSchema>

const Contact = () => {

  const { theme } = useTheme();
  const bgClass = theme === "dark" ? "bg-zinc-900" : "bg-gray-200";

  const {handleSubmit, register, reset} = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
    
    })
  
    const onSubmit = async (data: ContactFormData) => {
      const { email, name, message } = data;
      console.log(email, name)
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
      try {
        await emailjs.send(serviceID, templateID, {
          from_name: name,
          from_email: email,
          message,
        }, userID);
        
        alert('E-mail enviado com sucesso!'); 
        reset();
      } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        alert('Erro ao enviar e-mail. Por favor, tente novamente.'); 
      }
    };
    
  return (
    <section className="flex flex-col justify-center items-center pb-6 mb-6">
      <div className="w-full md:w-3/4">
        <h1 className="bg-clip-text  text-transparent bg-gradient-to-r from-purple-700 to-pink-500 lg:text-4xl w-full py-9">
          Contato
        </h1> 
           <div className="flex items-center justify-center rounded-lg ">
       
          <div className="w-6/12">
          
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4  items-center justify-center">
            
                 <input
               placeholder="Nome"
               className={`w-full rounded-lg pl-6 p-2 placeholder:text-zinc-600 focus:outline-none focus:ring-2 ring-secondary ${bgClass}`}
               autoComplete='off'
               {...register('name')}
              />
               <input
                placeholder="E-mail"
                className={`w-full rounded-lg pl-6 p-2 placeholder:text-zinc-600 focus:outline-none focus:ring-2 ring-secondary ${bgClass}`}
                autoComplete='off'
                {...register('email')}
              />
              <textarea
                placeholder="Mensagem"
                className={`w-full rounded-lg pl-6 p-2 placeholder:text-zinc-600 focus:outline-none focus:ring-2 ring-secondary ${bgClass}`}
                maxLength={500}
                {...register('message')}
              /><div>
              <Button className='w-max mx-auto ' color="secondary" variant="shadow"  onClick={handleSubmit(onSubmit)}>Enviar</Button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
