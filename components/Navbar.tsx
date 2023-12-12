"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
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
import Socials from "./Socials";

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
				className='fixed text-center sm:left-[2.5%] md:left-[10%] lg:left-[17.5%] flex flex-col md:flex-row justify-between sm:justify-around items-center max-container padding-container my-3 sm:rounded-full bg-blue-200/60 z-30 py-2 gap-4 w-full sm:w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] backdrop-blur-sm'>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: [0, 5, 0], opacity: 1 }}
					transition={{ duration: 0.6 }}
					className='flex flex-row justify-around w-full'>
					<Link
						href='/'
						className='flex  justify-center items-center bg-blue-300/60 px-2 py-0.5 rounded-md text-slate-800 font-medium text-sm md:text-md'>
						<span>LOGO</span>
					</Link>
					<ul className='hidden justify-center items-center gap-6 sm:flex flex-row'>
						{NAV_LINKS.map((link) => (
							<li className='bg-blue-300/60 px-2 py-0.5 rounded-md text-slate-800 font-medium text-sm md:text-md'>
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
						<button>
							<Link href='/'>
								<FaUser />
							</Link>
						</button>
					</div>
				</motion.div>

				<ul
					className={`${
						menuOpen ? "flex flex-col flexBetween lg:flex sm:hidden" : "hidden"
					}`}>
					{NAV_LINKS.map((link) => (
						<li className='bg-blue-300/60 w-screen px-2 py-4 rounded-lg text-slate-800 font-medium text-sm md:text-md'>
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
