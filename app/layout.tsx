import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
	title: "Diani Travel Guide",
	description:
		"Looking to Holiday in Diani? Well look no further for all the information you Need. Sights, Nights, Food, Culture, Diani beach, Shimba Hills, Hotels and more.. Website built by Ricky Matthews Githinji",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='hide-scrollbar'>
				<Navbar />
				<main className='relative overflow-hidden'>
					<SideBar />
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
