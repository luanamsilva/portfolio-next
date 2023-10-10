import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarItem,

} from "@nextui-org/navbar";


import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "../config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
	LinkedInIcon,
	GithubIcon,

} from "./icons";



export const Navbar = () => {


	return (
		<NextUINavbar maxWidth="xl" position="sticky">
		
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
				
					<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
						<LinkedInIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
				
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
	);
};