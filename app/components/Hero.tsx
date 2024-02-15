"use client"
import React from 'react'
import {Avatar} from "@nextui-org/react";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const Hero = () => {
  return (
   <section className="h-screen flex flex-col justify-center items-center md:mt-0 mt-16">
      <div className="flex flex-col md:flex-row m-2 p-2 gap-2 w-full md:w-3/4">
        <div className="place-self-center text-center md:text-left ">
          <h1 className="text-secondary mb-4 pt-8 px-4 text-4xl lg:text font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 lg:text-5xl'>Olá, eu sou </span>

         <TypeAnimation
      sequence={[
       
        1000,
        'a Luana Moura',
        1000,
        'Desenvolvedora web',
        1000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '3rem', display: 'inline-block', backgroundImage: 'linear-gradient(to right, #800080, #FF1493)', 
      WebkitBackgroundClip: 'text', 
      color: 'transparent' }}
      repeat={Infinity}
    />
        </h1>
        <p className="text-gray-700 text-lg lg:text-xl px-4"> Sou formada em Administração, mas sempre fui apaixonada pela área da tecnologia. 
 Migrei para a área de desenvolvimento Web em busca de novos desafios e oportunidades para continuar crescendo profissionalmente.
Considero-me uma pessoa dedicada, com facilidade de trabalhar em equipe e em constante processo de desenvolvimento e aprendizagem.</p>
      </div >
      <div className='place-self-center '>
    
      <Avatar isBordered color='secondary' radius="full" src="avatar32.png"  className="relative mt-12 w-60 h-60 hidden md:block"  />
   </div> </div>
  
   <div className='flex gap-4'>
    
   <Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' width={40} height={40} alt='react'/>
   <Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' width={40} height={40} alt='react'/>
<Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg' width={40} height={40} alt='react'/>
<Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg' width={40} height={40} alt='react'/>
<Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' width={40} height={40} alt='react'/>

  </div>
  </section>
  )
}

export default Hero
