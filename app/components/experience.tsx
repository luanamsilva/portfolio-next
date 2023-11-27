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
    <div className='w-full md:w-3/4'>
    <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 lg:text-4xl w-full py-9'>
  Experiência
</h1>    

<Accordion>
      <AccordionItem key="1" aria-label="developer" title="Desenvolvedora Front-end - Autônomo">
      <ul className="list-disc ml-6">
        {experienceOne.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      </AccordionItem>
      <AccordionItem key="2" aria-label="administration" title="Administrativo - Auto Peças Mecânica DS Ltda">
      <ul className="list-disc ml-6">
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
