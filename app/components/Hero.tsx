"use client"
import React from 'react'
import {Avatar} from "@nextui-org/react";


const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      
    <div className="flex flex-col md:flex-row m-4 p-4 gap-3 w-full md:w-3/4">
      <div className=" place-self-center">
        <h1 className="text-secondary mb-4 px-4 text-4xl lg:text font-extrabold">
         Olá, eu sou a 
        
         <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 lg:text-6xl'> Luana Moura</span>
        </h1>
        <p className="text-gray-400 text-lg lg:text-xl px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi omnis numquam pariatur reprehenderit, error, eaque odit quia perspiciatis quasi consectetur tenetur, debitis cupiditate. In quos earum dolor eveniet repudiandae vel.</p>
      </div >
      <div className='place-self-center'>
    
      <Avatar isBordered color='secondary' radius="full"  src="profile.jpeg"  className="relative w-full mt-12 w-22 h-22 " />
   </div> </div>

  </section>
  )
}

export default Hero
