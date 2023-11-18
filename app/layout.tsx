import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Diani Travel Guide",
	description:
		"Looking to Holiday in Diani? Well look no further for all the information you Need. Sights, Nights, Food, Culture, Diani beach, Shimba Hills, Hotels and more...",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
