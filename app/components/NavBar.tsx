"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarItem,

} from "@nextui-org/navbar";

import { useState , useEffect} from "react";
import { ThemeSwitch } from "./theme";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "../config/site";
import NextLink from "next/link";


import {
	LinkedInIcon,
	GithubIcon,

} from "./icons";



export const Navbar  = () => {
	const navItems= [
		{
			label: "Home",
			href: "/",
			id : 'home'
		},
 
    {
      label: "Sobre",
      href: "#about",
			id: 'about'
    },
    {
      label: "Projetos",
      href: "#projects",
			id: "projects"
    },
		{
      label: "Educação",
      href: "#education",
			id: "education"
    },
   	]
		 
		 const [isActive, setIsActive] = useState<string | null>('');
		 

		useEffect(() => {
			const handleScroll = () => {
				const scrollY = window.scrollY;

				
				switch (true) {
					
					case scrollY < 500:
							setIsActive('#');
							break;
					case scrollY < 1000:
							setIsActive('#about');
							break;
					case scrollY < 1500:
							setIsActive('#projects');
							break;
					case scrollY < 2000:
							setIsActive('#education');
							break;
					default:
							setIsActive('#');
			}
			
				} 
				if (scrollY === 0) {
					setIsActive('#');}
			
			if (isActive !== null) {
				window.location.hash = isActive;
			
			};
			window.addEventListener('scroll', handleScroll);
	
			
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}, [isActive]);
	
	return (
		
		<section className="flex justify-center items-center p-4 fixed top-0 w-full h-16 z-50">
    <div className='w-full '>
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className=" " justify="start">
				<div className="mx-auto  rounded-full p-2 ">
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={
									
								  ` px-4 py-2 rounded-lg text-sm lg:text-base relative no-underline duration-300 ease-in, ${isActive === item.href
                    ? "text-pink-500 font-medium"
                    : "text-secondary"}`
								}
								color="foreground"
								href={isActive ? item.href : "/"} 
								onClick={() => setIsActive(item.href)}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul></div>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-2/5 sm:basis-full justify-between m-6"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
				
					<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
						<LinkedInIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
		
				<NavbarItem className="hidden md:flex">
	
				
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
	
				<NavbarMenuToggle />
			</NavbarContent>

			
		</NextUINavbar>
		</div>
    </section>);
};