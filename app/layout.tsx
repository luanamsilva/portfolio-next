import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { siteConfig } from "./config/site";
import { Navbar } from "./components/NavBar";
import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })




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
		<html className={inter.variable} lang="pt-BR">
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
			
			<body>
			
					<div className="relative flex flex-col h-screen antialiased">
					
						<main className="container mx-auto text-gray-600 max-w-7xl  px-6 flex-grow">
							<Navbar/>
							{children}
						</main>
				
					</div>
				
			</body></Providers>
		</html>
	);
}