export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Portfolio",
	description: "Página portfólio pessoal.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
 
    {
      label: "Sobre",
      href: "#about",
    },
    {
      label: "Projetos",
      href: "#projects",
    },
   	],
	
	links: {
		github: "https://github.com/luanamsilva",
		linkedin: "https://www.linkedin.com/in/luana-moura-silva/",
	
  
	},
};