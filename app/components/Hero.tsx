"use client"
import React from 'react'
import {Avatar} from "@nextui-org/react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
   <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row m-4 p-4 gap-3 w-full md:w-3/4">
        <div className="place-self-center text-center md:text-left">
          <h1 className="text-secondary mb-4 px-4 text-4xl lg:text font-extrabold">
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
        <p className="text-gray-700 text-lg lg:text-xl px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi omnis numquam pariatur reprehenderit, error, eaque odit quia perspiciatis quasi consectetur tenetur, debitis cupiditate. In quos earum dolor eveniet repudiandae vel.</p>
      </div >
      <div className='place-self-center'>
    
      <Avatar isBordered radius="full"  src="profile.jpeg"  className="relative mt-12 w-60 h-60 hidden md:block " />
   </div> </div>

  </section>
  )
}

export default Hero
