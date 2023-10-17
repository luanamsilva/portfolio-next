"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarItem,

} from "@nextui-org/navbar";

import { useState } from "react";
import { ThemeSwitch } from "./theme";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "../config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
	LinkedInIcon,
	GithubIcon,

} from "./icons";



export const Navbar  = () => {
	const navItems= [
		{
			label: "Home",
			href: "/",
			id: 'home'
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
const [hoverNavItem, setHoverNavItem] = useState(navItems)
	return (
		
		<section className="flex justify-center items-center p-4 fixed top-0 w-full h-16 z-50">
    <div className='w-full '>
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className=" " justify="start">
				<div className="mx-auto border rounded-full p-2 bg-[#18181B] border-secondary-600/90">
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: 'secondary' }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
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