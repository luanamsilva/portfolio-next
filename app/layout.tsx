import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { siteConfig } from "./config/site";
import { Navbar } from "./components/NavBar";





export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
		
						<main className="container mx-auto max-w-7xl  px-6 flex-grow">
							{children}
						</main>
				
					</div>
				</Providers>
			</body>
		</html>
	);
}