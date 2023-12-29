"use client";

import { NAV_LINKS } from "@/constants";

import Link from "next/link";
import { motion } from "framer-motion";

import Button from "./Button";
import { useState } from "react";

import {
	FaUser,
	FaAnkh,
	FaBars,
	FaEject,
	FaFacebook,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuOpen = (menuOpen: any) => {
		if (menuOpen) {
			setMenuOpen(true);
		}
	};
	const handleMenuClose = (menuClose: any) => {
		if (menuOpen) {
			setMenuOpen(false);
		}
	};
	return (
		<section className='relative'>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='fixed text-center sm:left-[2.5%] md:left-[10%] lg:left-[17.5%] flex flex-col md:flex-row justify-between sm:justify-around items-center max-container padding-container my-3 sm:rounded-full bg-slate-100/40 z-30 py-2 gap-4 w-full sm:w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] backdrop-blur-sm hover:backdrop-blur-md'>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: [0, 5, 0], opacity: 1 }}
					transition={{ duration: 0.6 }}
					className='flex flex-row justify-around w-full'>
					<ul className='hidden justify-center items-center gap-6 sm:flex flex-row'>
						{NAV_LINKS.map((link) => (
							<li className='bg-slate-300/60 hover:bg-blue-300/60 hover:scale-105 px-2 py-0.5 rounded-md text-slate-900 font-medium text-sm md:text-md transition-all duration-300'>
								<Link
									href={link.href}
									key={link.key}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>

					<div className='flexCenter gap-4 relative right-[-10]'>
						<button
							onClick={handleMenuOpen}
							className={`${
								!menuOpen
									? "sm:hidden flex relative z-30 duration-300"
									: "hidden"
							}`}>
							<FaBars />
						</button>
						<button
							onClick={handleMenuClose}
							className={`${
								!menuOpen
									? "hidden"
									: "sm:hidden flex relative z-30 duration-300"
							}`}>
							<FaAnkh />
						</button>

						<Link href='/'>
							<button className='bg-orange-500/80 hover:bg-blue-600/60 hover:scale-105 p-2 rounded-full hover:text-slate-100 text-slate-100 font-medium text-sm md:text-md transition-all duration-300'>
								<FaUser />
							</button>
						</Link>
					</div>
				</motion.div>

				<ul
					className={`${
						menuOpen ? "flex flex-col flexBetween lg:flex sm:hidden" : "hidden"
					}`}>
					{NAV_LINKS.map((link) => (
						<li className='bg-blue-300/60 w-screen px-2 py-4 rounded-lg text-slate-700 font-medium text-sm md:text-md'>
							<Link
								href={link.href}
								key={link.key}>
								{link.label}
							</Link>
						</li>
					))}
					<ul className='flex sm:hidden items-center justify-center rounded full gap-6 flex-row'>
						<li className='flex px-2 py-2 items-center justify-center shadow-lg rounded-full'>
							<Link href='/'>
								<FaFacebook />
							</Link>
						</li>
						<li className='flex px-2 py-2 items-center justify-center shadow-lg rounded-full'>
							<Link href='/'>
								<FaInstagram />
							</Link>
						</li>
						<li className='flex px-2 py-2 items-center justify-center shadow-lg rounded-full'>
							<Link href='/'>
								<FaTwitter />
							</Link>
						</li>
					</ul>
				</ul>
			</motion.nav>
		</section>
	);
};

export default Navbar;
