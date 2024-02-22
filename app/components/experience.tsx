"use client"
import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";


const Experience = () => {
const experienceOne = [" Desenvolvimento de páginas Web", " Atuação com responsividade e acessibilidade"]  

  const experienceTwo = [  "atendimento ao cliente",
  " financeiro",
 " cadastro de produtos e serviços",
  " criação e análise de planilhas de dados"]
 
  return (
    <section className='flex flex-col justify-center items-center'>
    <div className='w-full md:w-3/4 text-center'>
    <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 lg:text-4xl w-full py-12 mt-12'>
  Experiência
</h1>    

<Accordion>
      <AccordionItem key="1" aria-label="developer" title="Desenvolvedora Front-end - Autônomo" classNames={{ title: "text-gray-600" }}>
      <ul className="list-disc ml-6 text-left">
        {experienceOne.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      </AccordionItem>
      <AccordionItem key="2" aria-label="administration"  title="Administrativo - Auto Peças Mecânica DS Ltda" classNames={{ title: "text-gray-600" }}>
      <ul className="list-disc ml-6 text-left">
        {experienceTwo.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      </AccordionItem>
      </Accordion>
    </div>
    </section>
  )
}

export default Experience
